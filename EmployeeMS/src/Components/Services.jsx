import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Services = () => {

    const [services, setServices] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/services')
        .then(result => {
            if(result.data.Status) {
                setServices(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (coach) => {
        axios.delete('http://localhost:3000/auth/delete_services/'+coach)
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
            <h3>Services List</h3>
        </div>
        <Link to="/dashboard/add_services" className='btn btn-success'>Add Services</Link>
        <div className='mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Coach</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Fare</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(b => (
                            <tr>
                                <td>{b.coach}</td>
                                <td>{b.source}</td>
                                <td>{b.destination}</td>
                                <td>{b.departure_time}</td>
                                <td>{b.fare}</td>
                                <td>
                                <button
                                   className="btn btn-warning btn-sm"
                                   onClick={() => handleDelete(b.coach)}
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

export default Services