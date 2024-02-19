require('dotenv').config();
const express = require('express');
const connectDatabase = require('./db/db');

const User = require('./routes/User');

const app = express();
app.use(express.json()); // Parses the JSON Body sent from the client
connectDatabase();

app.get('/', function (req, res) {
    res.status(200).json({
        message: "Server is up",
    });
})

app.use('/user/', User);
app.use('/user' , User)

app.get("/api/v1/note",(req , res)=>{
    try {
        res.status(200).json({
            "name":"saneer"
        })
    } catch (error) {
        throw error;
        
    }

    console.log("we are running")
})
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});