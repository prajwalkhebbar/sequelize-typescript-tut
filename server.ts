import SequelizeObject from "./sequelize";
import {app} from "./app"


(async ()=>{

    await SequelizeObject(false).then(fullfilled=>{
        app.listen(3000,()=>{
            console.log("App is running on port 3000");
        })
    },function onreject(err){
        console.log("Error occured"+err)
    })

    
})();
