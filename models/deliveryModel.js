const db =require('../config/db')
class Delivery {
        constructor(){

        }

    async addStaff (staffDetails){
    
        const sql = `INSERT INTO delivery_staff 
                    (id,name,contact,email) VALUES
                    (${staffDetails.nic},
                    '${staffDetails.name}',
                    '${staffDetails.contact_number}',
                    '${staffDetails.email}')`

        db.execute(sql).then((data)=>{
                            console.log(data[0])
                            return data
                        })
                       .catch((err)=>{
                            console.log(err.message)
                            return err
                       })
    }


}
module.exports= {Delivery}