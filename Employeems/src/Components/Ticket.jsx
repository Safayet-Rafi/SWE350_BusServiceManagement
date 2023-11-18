import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Ticket = () => {

    const [ticket, setTicket] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/ticket')
        .then(result => {
            if(result.data.Status) {
                setTicket(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (ticket_no) => {
        axios.delete('http://localhost:3000/auth/delete_ticket/'+ticket_no)
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
            <h3>Ticket List</h3>
        </div>
        <div className='mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Ticket No</th>
                        <th>Seat</th>
                        <th>Coach</th>
                        <th>Issue Date</th>
                        <th>Journey Date</th>
                        <th>Fare</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ticket.map(b => (
                            <tr>
                                <td>{b.ticket_no}</td>
                                <td>{b.seat}</td>
                                <td>{b.coach}</td>
                                <td>{b.issue_date}</td>
                                <td>{b.journey_date}</td>
                                <td>
                                <button
                                   className="btn btn-warning btn-sm"
                                   onClick={() => handleDelete(b.ticket_no)}
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

export default Ticket