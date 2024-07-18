
const sequelize = require('./connection/db')
const port=3005
const cors=require('cors')
const LoginRoute = require('./routes/loginRoute')
const bodyParser = require('body-parser');
const express=require('express')
const app=express()

app.use(bodyParser.json())
app.use(cors());

app.use('/logincount',LoginRoute)


 sequelize
   .sync()
   .then(()=>{
     app.listen(port,()=>console.log(`server started successfully at http://localhost:${port}`))
   })
  
    
 