import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPassenger = () => {
  const [passenger, setPassenger] = useState({
    name: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/auth/add_passenger', passenger)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/passenger');
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Passenger</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="name"
              placeholder="Enter Name"
              onChange={(e) =>
                setPassenger({ ...passenger, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setPassenger({ ...passenger, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="address"
              placeholder="Enter Address"
              autoComplete="off"
              onChange={(e) =>
                setPassenger({ ...passenger, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Passenger
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPassenger;