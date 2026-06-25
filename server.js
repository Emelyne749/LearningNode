const http = require('http')

const server = http.createServer((req, res)=>{ //Request and response are objects passed as arguments
    console.log(req.url, req.method)

    //Set header content type
    res.setHeader('content-Type', 'text/html')
    res.write('<h1>hello, Emelyne</h1>')
    res.write('<p>hello, Emelyne</p>')
    res.end()
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening fo requests on port 3000')
})




// LOOPBACK IP adress (127.0.0.1)