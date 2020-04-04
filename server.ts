import sequelize from './sequelize';

async function create_tables(){
    await sequelize(true);
}

console.log("Creating tables");
create_tables();

