import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

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
  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
          setPhone(res.data.phone);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email, phone };
    console.log(employee);
    if (validateForm()) {
      if (id) {
        updateEmployee(id, employee)
          .then((res) => {
            console.log(res.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First Name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is Required";
      valid = false;
    }

    if (phone.trim()) {
      errorCopy.phone = "";
    } else {
      errorCopy.phone = "Phone is Required";
      valid = false;
    }

    setErrors(errorCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {/* <h2 className="text-center">Add Employee</h2> */}
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> First Name</label>
                <input
                  type="text"
                  // className="form-control"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : " "
                  }`}
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Last Name</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : " "
                  }`}
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Email</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.email ? "is-invalid" : " "
                  }`}
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Phone</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.phone ? "is-invalid" : " "
                  }`}
                  placeholder="Enter Employee Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
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
