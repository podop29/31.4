const fs = require('fs');
const axios = require('axios')

function cat(file, out){
    fs.readFile(file,'utf8', (err,data)=>{
        if(err){
            console.log(err)
            proccess.kill
        }
        console.log(data)
    })
}

url = process.argv[2]
async function webCat(url, out){
    let res = await axios.get(url)
    if(out){
        fs.writeFile(out, res.data, 'utf8', function(err){
            if (err) {
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
              }
        })
    }
    console.log(res.data)
}

let out

file = process.argv[2]
if(file == '--out'){
    out = process.argv[3]
    file = process.argv[4]
    if(file.includes('.txt')){
        cat(file, out)
    }else{
        webCat(file, out)
    }
}
else{
    if(file.includes('.txt')){
        cat(file)
    }else{
        webCat(file)
    }
}