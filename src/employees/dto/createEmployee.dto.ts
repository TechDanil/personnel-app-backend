/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsDate, IsInt } from 'class-validator';

class CreateEmployeeDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    surname: string;

    @IsNotEmpty()
    @IsString()
    patronymic: string;

    @IsNotEmpty()
    @IsInt()
    salary: number;

    @IsNotEmpty()
    @IsDate()
    birthday: Date;
    
    @IsNotEmpty()
    @IsDate()
    hiringDay: Date;
}

export { CreateEmployeeDTO };
