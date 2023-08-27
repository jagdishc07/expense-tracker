const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Connection = require('./database/db.js');
const expense = require('./routes/expenses.js');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

Connection();

app.get('/', async (req, res) => {
    res.send("Expense Tracker Server Is Working")
})

// Routes
app.use('/api/newexpense', expense);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
