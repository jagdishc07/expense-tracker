const express = require('express');
const Expense = require('../models/Expense.js');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        let newexpense = req.body;
        Expense.create(newexpense);
        res.status(200).json(newexpense);
    } catch(error){
        console.log(error);
    }
})

router.get('/', async (req, res) => {
    try{
        let expenses = await Expense.find({}, {title: 1, amount: 1, date: 1, type: 1, _id: 1}).sort({time: -1});
        res.status(200).json(expenses);
    } catch(error){
        console.log(error);
    }
})

module.exports = router;