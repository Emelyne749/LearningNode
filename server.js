const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{ //Request and response are objects passed as arguments
    console.log(req.url, req.method)

    //Set header content type
    fs.readFile('./views/index.html', (err, data)=>{
        if(err){console.log(err)}
        else{
            // res.write(data)
            res.end(data)//use end to directly send one thing

        }
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening fo requests on port 3000')
})




// LOOPBACK IP adress (127.0.0.1)