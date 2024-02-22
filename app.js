const express = require('express')
const cors = require('cors')


require ('dotenv').config()

// routes import
const orderRouter = require('./routes/orderRoutes')
const deliveryRouter = require('./routes/deliveyRoutes')
const adminRouter = require('./routes/adminRoutes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

 
app.use('/order',orderRouter)
app.use('/delivery',deliveryRouter)
app.use('/admin',adminRouter)


app.listen(process.env.PORT, ()=>{
    console.log('listing on port :',process.env.PORT)
})