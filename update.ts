import sequelizeObject from "./sequelize";
import { Person } from "./models/Person";

async function update_person(){
    await sequelizeObject(false);

    console.log("Database sync Done");

    Person.update({ birthday: new Date('1990-3-20')}, { 
        where: {
            name: "Molly"
        }
    }
    ).then(()=>{
        console.log("Updated the birtday");
    });


}

update_person();