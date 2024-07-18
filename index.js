const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const jwt_token = require('jsonwebtoken')
const {register} = require('./controllers/authController')
const {login} = require('./controllers/authController')
const cors = require('cors')
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors({origin:'*'}))

// Routes
app.get('/',async (req,res)=>{
    try {
        const token = req.headers["x-token"]
        const verify = await jwt_token.verify(token,'secret')
        if(token){
            res.status(200).send(verify.user) 
        }
        res.status(400).send("Invalid User")
    } catch (error) { 
        res.status(500).send("Athuntication failed")
    }
})

app.post('/register',register)
app.post('/login',login)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
