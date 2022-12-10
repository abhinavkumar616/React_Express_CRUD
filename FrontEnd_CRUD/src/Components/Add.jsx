import React from 'react'
import axios from 'axios';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"


export default function Add() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [aadhar, setAadhar] = useState("")


    const history=useNavigate()

    const postData = (e) => {
        e.preventDefault();
        axios.post(`/dec`,{
            name:name,
            email:email,
            phone:phone,
            state:state,
            pincode:pincode,
            aadhar:aadhar  
        })
       .then(()=>{
        history("/");
       })
    }

    const data={
        backgroundColor:"green" ,
        color:"white",
        padding:"10px",
        'borderRadius':'5px'
    }

    return (
        <>
            <div className='container'>
                {/* <button style={data} >Home</button> */}
                <Link style={data} to="/" >Home Page</Link>
            </div>
            <div className='container text-center mt-2 border-radius'>
                <h2>Add Employee Details</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-6">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Full Name" onChange={(e) => setName  (e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail  (e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" onChange={(e) => setPhone  (e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label">State</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User State Name" onChange={(e) => setState  (e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Pincode</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Pincode" onChange={(e) => setPincode (e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Aadhar</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Aadhar Number " onChange={(e) => setAadhar  (e.target.value)} />
                    </div>
                    <button onClick={postData} type="submit" className="btn btn-primary mt-3">Add</button>
                    
                </div>
            </div>
        </>
    )
}
