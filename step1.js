const fs = require('fs');

file = process.argv[2]


fs.readFile(file,'utf8', (err,data)=>{
    if(err){
        console.log(err)
        proccess.kill
    }
    console.log(data)
})
