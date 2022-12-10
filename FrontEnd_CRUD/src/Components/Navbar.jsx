import axios from 'axios'
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Update from './Update';



export default function Navbar() {

  const [state, setState] = useState([]);

  const fetchdata = async () => {
    const { data } = await axios.get("/dec")
    setState(data.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  
  // const updateRecord=(_id)=>{
  //     let text="confirm to edit?";
  //     if(window.confirm(text)===true){
  //       alert("edited: "+_id);
  //       axios.get(`/dec/${_id}`)
  //       .then((res)=>{
  //         console.warn(res);
  //         fetchdata();
  //       })
  //     }else{
  //     }
  // }

  const deleteData = (_id) => {
    let text = "Confirm to delete?";
    if (window.confirm(text) === true) {
      alert("deleted: " + _id);
      axios.delete(`/dec/${_id}`)
      .then((res) => {
          console.warn(res);
          fetchdata();
        })
    } else {
    }
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CRUD DATA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/add">ADD</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view">View</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className='container text-center mt-1'>
        <h2>Employee Details</h2>
      </div>
      <div className=''>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fullname</th>
              <th>Emailaddress</th>
              <th>Phonenumber</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Aadhar</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>

            {
              typeof(state) == 'undefined' ? (<tr><td>Invalid Entry</td></tr>) : state.map((item, i) => (
                <tr key={i}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.state}</td>
                  <td>{item.pincode}</td>
                  <td>{item.aadhar}</td>
                  {/* <td><button onClick={() => updateRecord(item._id)}><EditIcon /></button></td> */}
                  {/* <td><Link to={`update/${item._id}`} onClick={() => updateRecord(item._id)}><EditIcon /></Link></td> */}
                  <td><Link to={`update/${item._id}`}><EditIcon /></Link></td>
                  <td><button onClick={() => deleteData(item._id)}><DeleteIcon /></button></td>
                </tr>

              ))
            }

          </thead>
        </table>
      </div>
    </>
  )
}
