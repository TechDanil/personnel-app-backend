/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employees.service';
import { CreateEmployeeDTO } from './dto/createEmployee.dto';
import { Employee } from './employee.entity';

@Controller('employees')
class EmployeesController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    async createEmployee(@Body() createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        return await this.employeeService.createEmployee(createEmployeeDTO);
    }

    @Get()
    async getAllEmployees(): Promise<Employee[]> {
        return await this.employeeService.getAllEmployees();
    }

    @Get(':id')
    async getEmployeesById(@Param('id') id: number) {
        return await this.employeeService.getEmployeeById(id);
    }

    @Put(':id')
    async updateEmployees(
        @Param('id') id: number, 
        @Body() updateEmployeeDTO: CreateEmployeeDTO
    ): Promise<Employee> {
        return await this.employeeService.updateEmployee(id, updateEmployeeDTO);
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id: number): Promise<void> {
        return await this.deleteEmployee(id);
    }
}

export { EmployeesController };