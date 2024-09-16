import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "John",
      lastName: "khlo",
      email: "john@example.com",
      phone: 123456789,
    },
    {
      id: 2,
      firstName: "Raj",
      lastName: "khlo",
      email: "john@example.com",
      phone: 123456789,
    },
    {
      id: 3,
      firstName: "Kumar",
      lastName: "khlo",
      email: "john@example.com",
      phone: 123456789,
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center">List of Employee</h2>
      <table className="table table-striped table-bordered table-responsive table-hover">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Employee Phone</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
