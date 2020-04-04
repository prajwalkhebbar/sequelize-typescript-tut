import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import {Hobbies} from "./Hobbies";
import { Person } from "./Person";
@Table
export class PersonHobby extends Model<PersonHobby>{

    @ForeignKey(()=>Person)
    @Column
    personID!: number;

    @ForeignKey(()=>Hobbies)
    @Column
    hobbyID!: number;

}