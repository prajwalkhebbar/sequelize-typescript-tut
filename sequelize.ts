import {Sequelize} from 'sequelize-typescript';

export default async (force_value:boolean): Promise<any> => {
    const sequelize = new Sequelize({
        database: 'test_db',
        dialect: 'postgres',
        username: 'testuser',
        password:'admin',
        models:[__dirname+"/models"]
    });

    return sequelize.sync({force:force_value});
}