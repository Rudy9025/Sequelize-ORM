const {Sequelize} =require('sequelize')


const sequelize=new Sequelize("practice","root","rudy",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize