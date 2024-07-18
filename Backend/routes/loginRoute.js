const {Router,express} =require('express');
const Customer = require('../models/Customer');
const bodyParser = require('body-parser');
 
const LoginRoute=Router()
 

LoginRoute.post('/', async (req, res) => {
    const { ntid, role } = req.body;
       try {
        const existingCustomer = await Customer.findOne({ where: { name: ntid, role: role } });
        if(existingCustomer){ 
            let count= await Customer.count()
             console.log(count)
             res.json({message:"Proceed to login",count})
        }
        else res.json({message:"invalid credentials"})
       } catch (error) {
        console.log(error)
       }
   });  

// LoginRoute.post('/', async (req, res) => {
//         const { ntid, role } = req.body;
//            try {
//             const existingCustomer = await Customer.create({ name: ntid, role: role });
//            console.log(existingCustomer)
//            } catch (error) {
//             console.log(error)
//            }
//        });  

LoginRoute.get('/', async (req, res) => {
    try {
        const count = await Customer.count();
        res.json({ count });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

  LoginRoute.get('/',async(req,res)=>{
     
    try {
        const customers=await Customer.findAll()
         res.json({customers})
    } catch (error) {
        console.log(error)
    }
  })

 LoginRoute.delete('/',async(req,res)=>{
    const {selected}=req.body

    try {
    const customer =await Customer.findOne({where:{name:selected}})
    if(!customer){
        return res.status(404).json({message:"customer not found"})
            }
            await customer.destroy()
            return res.status(200).json({message:"Dleted successfully"})
} catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' });
}
    
 })

  module.exports=LoginRoute