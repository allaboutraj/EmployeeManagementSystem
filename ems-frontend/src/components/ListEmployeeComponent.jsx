import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  // const dummyData = [
  //   {
  //     id: 1,
  //     firstName: "John",
  //     lastName: "khlo",
  //     email: "john@example.com",
  //     phone: 123456789,
  //   },
  //   {
  //     id: 2,
  //     firstName: "Raj",
  //     lastName: "khlo",
  //     email: "john@example.com",
  //     phone: 123456789,
  //   },
  //   {
  //     id: 3,
  //     firstName: "Kumar",
  //     lastName: "khlo",
  //     email: "john@example.com",
  //     phone: 123456789,
  //   },
  // ];

  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employee</h2>
      <button className="btn btn-primary mb-1" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered table-responsive table-hover table-dark">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Employee Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
