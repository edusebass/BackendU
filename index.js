const http = require("http");

const server = http.createServer((req,res)=>{
    user = {
        user:"Byron",
        email:"byron@hotmail.com"
    }
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(user));
    res.end()
})

server.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");