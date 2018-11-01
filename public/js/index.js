let brandArray,typeArray =[]

fetch('localhost:3000/brand').then(data=>{
    brandArray=data
    console.log(brandArray)
}).catch(err=>{
    console.log(err)
})