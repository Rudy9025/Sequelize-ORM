const {Sequelize} =require('sequelize')


const sequelize=new Sequelize("Test","root","root",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize
