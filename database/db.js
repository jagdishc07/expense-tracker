const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Connection = async () => {
    const URL = process.env.MONGODB_URL;
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(console.log("Database Connected"));
    } catch(error){
        console.log(error);
    }
};

module.exports = Connection;