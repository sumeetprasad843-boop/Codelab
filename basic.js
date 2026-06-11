const express=require('express');
const app=express();

app.get("/", (req, resp) => {

    resp.send("<h1>Welcome to Express</h1>");

    });

app.get("/about", (req, resp) => {
    resp.send("<h1>About Us!!!!</h1>");

});



app.listen(3200);
