let brandArray,typeArray =[]

// getting type and brands from database and arrange elements so the 
// brands that contain more than one word are tested first
fetch('http://localhost:3000/brand').then(res=>{
    return res.json()})
        .then(body=>{
            let arrangedData = body.data.sort((first,second)=>{
                return second.length-first.length

            })
        brandArray=arrangedData
        console.log(brandArray)
        
}).catch(err=>{
    console.log(err)
})

fetch('http://localhost:3000/type').then(res=>{
    return res.json()})
        .then(body=>{
            let arrangedData = body.data.sort((first,second)=>{
                return second.length-first.length

            })
            typeArray=arrangedData
        console.log(typeArray)
}).catch(err=>{
    console.log(err)
})


const search = ()=>{
    let searchString = " "+document.getElementById('search').value+" "
    console.log('The user inputed search string is : '+searchString)
    document.getElementById('input').innerHTML = ''
    document.getElementById('result').innerHTML = ''
    document.getElementById('input').innerHTML = searchString
    document.getElementById('result').innerHTML = format(searchString)
    
}

const format = (search) =>{
    return formatTypes(formatBrands(search))
}

const formatBrands = (searchString) => {
    let result=searchString
    brandArray.map(brand=>{
        if(result.indexOf(brand)){
            let readyBrand = brand.indexOf(' ')!=-1 ?  brand.replace(' ','\\s') :brand 
            let regexp = new RegExp('\\s'+readyBrand+'\\s',"gi")
            console.log(regexp)
        console.log(result.replace(regexp,'<strong> '+brand+'</strong>'))
        result = result.replace(regexp,match=>{
            return ' <strong> '+match+'</strong> '
        })
        }
    })
    console.log(result)
    return result
}


const formatTypes = (searchString) => {
    let result=searchString

    // console.log('the string with brands already formatted is : '+searchString)
    typeArray.map(type=>{
        if(result.indexOf(type)){
            let regexp = new RegExp('\\s'+type+'\\s',"gi")
        console.log(result.replace(regexp,' <em> '+type+'</em> '))
        result = result.replace(regexp,match=>{
            return ' <em> '+match+'</em> '
        })
        }
    })
    console.log(result)
    return result
}