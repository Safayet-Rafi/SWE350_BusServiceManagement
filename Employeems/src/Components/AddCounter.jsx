import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCounter = () => {
  const [counter, setCounter] = useState({
    location: "",
    phone: "",
    manager: "",
  });
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/auth/add_counter',counter)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/counter')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className="p-3 rounded w-50 border">
            <h3 className="text-center">Add Counter</h3>
            <form className="row g-1" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="inputLocation" className="form-label">
                  Counter Location
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="location"
                  placeholder="Enter Counter Location"
                  onChange={(e) =>
                    setCounter({ ...counter, location: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="model"
                  placeholder="Enter Phone No."
                  autoComplete="off"
                  onChange={(e) =>
                    setCounter({ ...counter, phone: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputManager" className="form-label">
                  Manager Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="manager"
                  placeholder="Enter Manager Name"
                  onChange={(e) =>
                    setCounter({ ...counter, manager: e.target.value })
                  }
                />
                </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Add Bus
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default AddCounter