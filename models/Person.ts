import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import {Hobbies} from "./Hobbies";
import { PersonHobby } from "./PersonHobby";
@Table
export class Person extends Model<Person> {
    @Column
    name!: String;

    @Column
    age!: number;

    @BelongsToMany(()=>Hobbies, ()=>PersonHobby)
    hobbies?: Hobbies[];

}

