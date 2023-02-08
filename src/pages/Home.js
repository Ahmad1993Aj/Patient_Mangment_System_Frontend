import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


export default function Home() {

    const [user, setUser]= useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUser(result.data);

    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
      };
      

  return (

    

    <div className='container'>
    
    <div className='py-4'>
    <table className="table border shadow ">

    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Fist name</th>
            <th scope="col">Last name</th>
            <th scope="col">E-Mail</th>
            <th scope="col">Function</th>
        </tr>
    </thead>

    <tbody>

    {
        user.map((user, index)=>(

            <tr>

            <th scope="row" key={index}>{index+1}</th>
            <td> {user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>

            <Link
                    className="btn btn-lg btn-outline-primary"
                    to={`/viewuser/${user.id}`}
                  >
                    Show Details 
                  </Link>

                  <Link
                    className="btn btn-lg btn-outline-secondary mx-1"
                    to={`/edituser/${user.id}`}
                  >
                    Editing
                  </Link>

                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete the Patient
                  </button>  
            </tr>
        ))
    }
    </tbody>
    </table>
    </div>
    </div>
  )
}
