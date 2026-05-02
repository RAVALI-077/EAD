const http=require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==='/')
    {
        res.write(`
            <html>
            <head>
            <title>
            welcome to my first server
            </title>
            </head>
            <body>
            <h1>this is my first server </h1>
            <a href='/about'>ABOUT</a>
            <a href='/contact'> CONTACT</a>
            <a href='/services'>SERVICES</a>
            </body>
            </html>
            `);
    }
    else if(req.url==='/about')
    {
        res.write(`
            <html>
            <head>
            <title>
            welcome to my first server
            </title>
            </head>
            <body>
            <h1>this is my first server </h1>
            <p>welcome to about page </p>
            <a href='/'>ABOUT</a>
           
           
            </body>
            </html>
            `);
    }
    else if(req.url==='/contact')
    {
        res.write(`
            <html>
            <head>
            <title>
            welcome to my first server
            </title>
            </head>
            <body>
            <h1>this is my first server </h1>
           <p>welcome to contact</p>
            <a href='/contact'> CONTACT</a>
           
            </body>
            </html>
            `);
    }
    else if(req.url==='/services')
    {
        res.write(`
            <html>
            <head>
            <title>
            welcome to my first server
            </title>
            </head>
            <body>
            <h1>this is my first server </h1>
            <p>welcome to services<p>
            <a href='/services'>SERVICES</a>
            </body>
            </html>
            `);
    }
    else
    {
        res.write(`
            <html>
            <head>
            <title>
            welcome to my first server
            </title>
            </head>
            <body>
            <h1>404 error go to home</h1>
           <a href='/'>ABOUT</a>
            
            </body>
            </html>
            `);
    }
    res.end();
});
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});
