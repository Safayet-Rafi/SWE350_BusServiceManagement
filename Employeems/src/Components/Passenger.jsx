import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Passenger = () => {

    const [passenger, setPassenger] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/passenger')
        .then(result => {
            if(result.data.Status) {
                setPassenger(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (nid) => {
        axios.delete('http://localhost:3000/auth/delete_passenger/'+nid)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
      } 

  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Passenger List</h3>
        </div>
        <div className='mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th>NID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        passenger.map(b => (
                            <tr>
                                <td>{b.nid}</td>
                                <td>{b.name}</td>
                                <td>{b.phone}</td>
                                <td>{b.gender}</td>
                                <td>
                                <button
                                   className="btn btn-warning btn-sm"
                                   onClick={() => handleDelete(b.nid)}
                                >
                                Delete
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Passenger