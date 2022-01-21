const http = require('http');

const server = http.createServer((req, res) => { // creating the server passing in the request and response as arguments
    const url = req.url; // accessing the request url
    if (url === '/') {
        // setting up the response data;
        res.setHeader('Content-Type','text.html');
        res.write('<html>');
        res.write('<head><title>Assign 01</title>');
        res.write('<body<form action="/create-user" method="POST"><input type="text" name="username><button type="submit">Add</button></form> </body>');
        res.write('</html>');
        return res.end(); // send the response to the client
    }
    if (url === '/users') {
        res.setHeader('Content-Type');
        res.write('<html>');
        res.write('<head><title>Assign 01</title>');
        res.write('<body><ul><li>Dirk</li><li>Deirdre</li><li>Daphne</li<li>Darryl</li><li>Belinda</li></ul> </body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user'){
        const body = [];
        req.on('data',chunk =>{
            body.push(chunk);
        });
        req.on('end',() => {
            const parsed = Buffer.concat(body).toString();
            console.log(parsed.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }

})

server.listen(3000); // listen to the server at port 3000