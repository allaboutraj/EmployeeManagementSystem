package com.empmanager.ems_backend.service.Impl;

import org.springframework.stereotype.Service;

import com.empmanager.ems_backend.dto.EmployeeDto;
import com.empmanager.ems_backend.entity.Employee;
import com.empmanager.ems_backend.mapper.EmployeeMapper;
import com.empmanager.ems_backend.repository.EmployeeRepository;
import com.empmanager.ems_backend.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

}
