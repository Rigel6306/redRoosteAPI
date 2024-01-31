
const deliveryModel = require('../models/deliveryModel')
const deliveryStaff = new deliveryModel.Delivery()
exports.addStaff= async(req,res)=>{
  deliveryStaff.addStaff(req.body).then((data)=>{
    console.log(data);
    res.status(200).send('success')
  }).catch((err)=>{
    console.log(err)
    res.status(400).send(err.message)
  })
    

    
}