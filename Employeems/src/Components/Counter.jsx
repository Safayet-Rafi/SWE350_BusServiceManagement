import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Counter = () => {

    const [counter, setCounter] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/counter')
        .then(result => {
            if(result.data.Status) {
                setCounter(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (location) => {
        axios.delete('http://localhost:3000/auth/delete_counter/'+location)
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
            <h3>Counter List</h3>
        </div>
        <Link to="/dashboard/add_counter" className='btn btn-success'>Add Counter</Link>
        <div className='mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Phone</th>
                        <th>Manager</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        counter.map(b => (
                            <tr>
                                <td>{b.location}</td>
                                <td>{b.phone}</td>
                                <td>{b.manager}</td>
                                <td>
                                <button
                                   className="btn btn-warning btn-sm"
                                   onClick={() => handleDelete(b.location)}
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

export default Counter