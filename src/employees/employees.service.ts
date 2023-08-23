import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDTO } from './dto/createEmployee.dto';
import { Employee } from './employee.entity';
import { UpdateEmployeeDTO } from './dto/updateEmployee.dto';

@Injectable()
class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeesRepository: Repository<Employee>
    ) {}

    createEmployee = async (createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> => {
        const employee = this.employeesRepository.create(createEmployeeDTO);
        return await this.employeesRepository.save(employee);
    }

    getAllEmployees = async (): Promise<Employee[]> => {
        return await this.employeesRepository.find();
    }

    getEmployeeById = async (id: number): Promise<Employee> => {
        const employee = await this.employeesRepository.findOne({ where: { id } });

        if (!employee) {
            throw new NotFoundException(`Employee with ID ${id} not found`);
        }

        return employee;
    }
    
    updateEmployee = async (id: number, updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee> => {
        const employee = await this.getEmployeeById(id);
        const shallowCopyEmployee = Object.assign(employee, updateEmployeeDTO);
        return this.employeesRepository.save(shallowCopyEmployee);
    }

    deleteEmployee = async (id: number) => {
        const employee = await this.getEmployeeById(id);

    }
}

export { EmployeeService };