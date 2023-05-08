const express = require('express');
const cors = require('cors');
const app = express();

port = process.env.PORT || 5000;


// middleware for requests 
app.use(cors());
app.use(express.json()); //


app.get('/', (req, res) => {
    res.send('SIMPLE CRUD IS RUNNING')
})

app.listen(port, () =>{
    console.log(`Simple CRUD is running on port: ${port}`)
})