//importing file system module built into node

const fs = require('fs')

//reading files

// fs.readFile('./docs/blog12.txt', (err, data)=>{
//     if(err){console.log(err)}
//     console.log(data.toString()) 
//     //display data in buffer format hence we need to use the to string method to get the text written in our file
// })



//writing files

// fs.writeFile('./docs/blog12.txt', 'Hello, world', ()=>{
//     console.log('File written')
// })

//NB If you ran readfile on a non existing path that file will be created in that path

// directories
// if(!fs.existsSync('./assets')){

//     fs.mkdir('./assets', (err)=>err?console.log(err): console.log('Folder created'))
    
// }
// else{
//     fs.rmdir('./assets',(err)=>err?console.log(err): console.log('Folder Deleted'))
// }

// deleting files

// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt',(err)=>err?console.log(err): console.log('File deleted'))
// }







