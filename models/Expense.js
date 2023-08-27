const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    time:{
        type: Date,
        default: Date.now
    }
});

const Expense = mongoose.model('expense', ExpenseSchema);

module.exports = Expense;