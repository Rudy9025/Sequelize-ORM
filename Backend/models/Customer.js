const {Sequelize} =require('sequelize')

const sequelize=require('../connection/db')


const Customer=sequelize.define("customer",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    role:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Customer