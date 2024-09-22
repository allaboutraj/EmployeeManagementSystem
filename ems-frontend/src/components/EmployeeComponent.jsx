import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //   const handleFirstName = (e) => setFirstName(e.target.value);

  //   const handleLastName = (e) => {
  //     setLastName(e.target.value);
  //   };

  //   const handleEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePhone = (e) => {
  //     setPhone(e.target.value);
  //   };

  const navigator = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email, phone };
    console.log(employee);

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator("/employees");
    });
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Employee Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>

              <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
