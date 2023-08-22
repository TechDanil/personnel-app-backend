/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { CreateEmployeeDTO } from "./dto/createEmployee.dto";

@Controller('employees')
class EmployeesController {
    constructor() {}

    @Post() 
    createEmployee(@Body() createEmployeeDTO: CreateEmployeeDTO)  {
    }

    @Get()
    getAllEmployees() {
    }

    @Put(':id')
    updateEmployee(@Param('id') id: number, @Body() updateEmployee: CreateEmployeeDTO) {

    }

    @Delete(':id')
    deleteEmployee(@Param('id') id: number) {

    }
}

export { EmployeesController };