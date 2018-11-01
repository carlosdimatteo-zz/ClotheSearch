const express = require('express')
const db = require('./../helpers/db')
const brandQuery = require('./../helpers/queries').getBrands;
let router =express.Router()

router.get('/',async (req,res)=>{
    try{
        console.log('query to be executed : '+ brandQuery)
    let brands = await db.any(brandQuery)
    if(brands){
        let brandArray = []
    brands.map(name=>{
        console.log('Type name : '+name)
        brandArray.push(name.name)
    })
        console.log(`The types of clothes received from database are ${JSON.stringify(brands,null,2)}`)
        res.send({data:brandArray,status:200});
    }
    }catch(error){
        console.log(error)
        res.send({data:error})
    }
    
});




module.exports = router