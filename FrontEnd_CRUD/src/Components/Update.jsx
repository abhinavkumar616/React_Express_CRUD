import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom"


export default function Update() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [aadhar, setAadhar] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();

    console.log(id);
    useEffect(() => {
        getUserById(id);
    }, []);

    const getUserById= async (id)=>{
        const response=await axios.get(`/dec/${id}`)
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setPhone(response.data.data.phone);
        setState(response.data.data.state);
        setPincode(response.data.data.pincode);
        setAadhar(response.data.data.aadhar);
    }

    const postData = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/dec/${id}`, {
                name,
                email,
                phone,
                state,
                pincode,
                aadhar
            });
            navigate("/");
        }
        catch (error) {
            console.log(error);
        }
    }

    const data = {
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        'borderRadius': '5px'
    }

    return (
        <>
            <div className='container'>
                <Link style={data} to="/" >Home Page</Link>
            </div>
            <div className='container text-center mt-2 border-radius'>
                <h2>Update Employee Details</h2>
            </div>
            <div className='container'>
                <form action="" method='post'>
                    <div className='row'>
                        <div className="col-6">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Full Name" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User State Name" onChange={(e) => setState(e.target.value)} value={state}/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Pincode</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Pincode" onChange={(e) => setPincode(e.target.value)} value={pincode}/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Aadhar</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Aadhar Number " onChange={(e) => setAadhar(e.target.value)} value={aadhar}/>
                        </div>
                        <button onClick={postData} type="submit" className="btn btn-primary mt-3">Update Records</button>
                    </div>
                </form>
            </div>
        </>
    )

}

