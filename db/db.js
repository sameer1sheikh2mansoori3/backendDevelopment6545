const mongoose = require('mongoose');

function databaseConnect() {
    mongoose.connect(process.env.DB_URI).then(() => {
        console.log('Database connection established');
    }).catch((err) => {
        console.log('Connection failed', err);
    });
}

module.exports = databaseConnect;