/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    patronymic: string;

    @Column()
    birthday: Date;

    @Column()
    position: string;

    @Column()
    salary: number;

    @Column()
    hired_date: Date;
}

export { Employee };