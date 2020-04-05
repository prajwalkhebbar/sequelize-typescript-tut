import {Table, Column, Model, BelongsToMany, Scopes} from 'sequelize-typescript';
import { Person } from "./Person";
import { PersonHobby } from "./PersonHobby";

@Scopes(()=>({
    persons:{
        include:[
            {
                model:Person,
                through:{attributes: []}
            }

        ]
    }
}))
@Table
export class Hobbies extends Model<Hobbies>{
    @Column
    name!: String;

    @BelongsToMany(()=>Person, ()=>PersonHobby)
    persons?: Person[];


}