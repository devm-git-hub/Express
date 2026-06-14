const express = require('express');
const app = express();

let port = 9000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


// app.get('/', (req, res) => {
//     console.log('Request recieved');
//     let code = "<h1>Hello, World!</h1><h2>Express.js</h2>";
//     res.send(code);
// });

app.get('/', (req, res) => {
    res.send("This is the Origin Path");
});
app.get('/about', (req, res) => {
    res.send("This is the About Page");
});
app.get('/contact', (req, res) => {
    res.send("This is the Contact Page");
});