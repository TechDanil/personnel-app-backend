/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDTO } from './createEmployee.dto';

class UpdateEmployeeDTO extends PartialType(CreateEmployeeDTO) {}

export { UpdateEmployeeDTO };