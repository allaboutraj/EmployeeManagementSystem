package com.empmanager.ems_backend.service;

import com.empmanager.ems_backend.dto.EmployeeDto;
import com.empmanager.ems_backend.entity.Employee;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);
}
