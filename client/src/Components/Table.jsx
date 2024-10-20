import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setData] = useState([])

console.log('data user',data)

    useEffect(() => {
        async function FeatchData() {
            try {
                const user = await axios.get('http://localhost:4000/api/get')
                const response = await user.data.user
                setData(response)
            } catch (error) {
                console.log(error)
            }
        }
        FeatchData()
    }, []) // <--- Empty array ensures it only runs once when component mounts
    


    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Users</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                  <i className="material-icons">&#xE147;</i> <span>Add New User</span>

                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Father</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.length > 0 ? data.map((elem, index) => (
    <tr key={index}>
        <td></td>
        <td>{elem.name}</td>
        <td>{elem.fathername}</td>
        <td>{elem.email}</td>
        <td>{elem.phone}</td>
        <td>
            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(elem._id)}>
                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
            </a>
            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(elem._id)}>
                <i className="material-icons" data-bs-toggle="tooltip" title="delete">&#xE872;</i>
            </a>
        </td>
    </tr>
)) : <tr><td colSpan="6">No data available</td></tr>}


                        </tbody>
                    </table>
                </div>
            </div >


        </>
    );
}

