const express = require ('express');
const db = require('./../helpers/db')
const typeQuery = require('./../helpers/queries').getTypes;
let router =express.Router()

router.get('/',async (req,res)=>{
    try{
        console.log('query to be executed : '+ typeQuery)
    let clothesTypes = await db.any(typeQuery)
    
    if(clothesTypes){
        let typeArray = []
    clothesTypes.map(name=>{
        console.log('Type name : '+name)
        typeArray.push(name.name)
    })
        console.log(`The types of clothes received from database are ${JSON.stringify(clothesTypes,null,2)}`)
    res.send({data:typeArray,status:200});
    }
    }catch(error){
        console.log(error)
        res.send({data:error,status:200});
    }
    
});




module.exports = router