import {Person} from './models/Person';
import { Hobbies } from "./models/Hobbies";
import sequelize from './sequelize';

async function create_tables() {
    await sequelize(true);

    console.log("Syncing the db");

    

    Person.bulkCreate([
        {
            name:'Prajwal',
            age:22,
            hobbies:[
                {id:1,name:"Reading"},
                {id:2,name:"Coding"}
            ]
        },
        {
            name:'John Doe',
            age:24
        }
    ],{
        include:[{
            model:Hobbies,
            as: 'hobbies'
        }]
    }
    
    ).then(()=>{
        Person.findOne({
            where:{
                name:"John Doe"
            }
        }).then((auser)=>{
            Hobbies.findOne({
                where:{
                    name:'Reading'
                }
            }).then((hobby:Hobbies)=>{
                auser?.$set('hobbies',hobby).then(()=>{console.log("Success in entering hobbies for a person")})
            })
        })
        console.log("Seeded the database");
    },(err:any)=>{
        console.log("ERROR while seeding");
    });
}
create_tables();


