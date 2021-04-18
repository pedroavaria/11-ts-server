import {Sequelize} from 'sequelize';

const db = new Sequelize('node','root','Javi0511',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db