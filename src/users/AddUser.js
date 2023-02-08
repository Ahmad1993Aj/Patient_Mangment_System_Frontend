import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate();
    const[user, setUser]= useState({

      name:"",
      username:"",
      email:""
    })
    
    const { name, username, email } = user;

    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
    };


    
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4">

        <h2 className="text-center m-4">Patient registration</h2>

          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                First name:
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Write the first name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              
              />

              </div>

              <div className="mb-3">
              <label htmlFor="username" className="form-label">
                last name:
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Write the last name"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}

              
              />

              </div>

              <div className="mb-3">
              <label htmlFor="E-mail" className="form-label">
                Email:
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              
              />

              </div>

              <button type="submit" className="btn btn-lg btn-outline-secondary mx-2">
                Confirm
              </button>

              <Link className="btn btn-outline-danger mx-2" to="/">
                Back
              </Link>

              </form>


        

        </div>
      </div>


    </div>
  )
}
