import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import { Person } from "./Person";
import { PersonHobby } from "./PersonHobby";


@Table
export class Hobbies extends Model<Hobbies>{
    @Column
    name!: String;

    @BelongsToMany(()=>Person, ()=>PersonHobby)
    persons?: Person[];


}