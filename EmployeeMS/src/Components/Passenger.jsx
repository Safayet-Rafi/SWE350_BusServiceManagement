import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Passenger = () => {
  const [passengers, setPassengers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/auth/passenger')
      .then(result => {
        if (result.data.Status) {
          setPassengers(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      }).catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/auth/delete_passenger/${id}`)
      .then(result => {
        if (result.data.Status) {
          setPassengers(passengers.filter(passenger => passenger.id !== id));
        } else {
          alert(result.data.Error);
        }
      }).catch(err => console.log(err));
  };

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Passenger List</h3>
      </div>
      <Link to="/dashboard/add_passenger" className='btn btn-success'>Add Passenger</Link>
      <div className='mt-3'>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              passengers.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.email}</td>
                  <td>{p.address}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDelete(p.id)}
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
  );
};

export default Passenger;
