const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{ //Request and response are objects passed as arguments
    console.log(req.url, req.method)

    //Set header content type
    res.setHeader('content-Type', 'text/html')

    let path = './views'

    switch(req.url){
        case '/':
            path += '/index.html'
            res.statusCode = 200
            break
        case '/about':
            path += '/about.html'
            res.statusCode = 200
            break
        default:
            path += '/404.html'
            res.statusCode = 404
            break
    }

    fs.readFile(path, (err, data)=>{
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