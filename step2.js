const fs = require('fs');
const axios = require('axios')

function cat(file){
    fs.readFile(file,'utf8', (err,data)=>{
        if(err){
            console.log(err)
            proccess.kill
        }
        console.log(data)
    })
}

url = process.argv[2]
async function webCat(url){
    let res = await axios.get(url)
    console.log(res.data)
}

file = process.argv[2]
if(file.includes('.txt')){
    cat(file)
}else{
    webCat(file)
}