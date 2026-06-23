const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})

const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data',(chunk)=>{
    console.log('-------------- New chunk --------------------')
    writeStream.write('\n\n\n\nNEW CHUNK\n\n\n\n');
    writeStream.write(chunk)
})

//we can use to string or add a data type argument to the create readsteam 