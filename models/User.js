const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required field"]
    },
    age: {
        type: Number,
        min: 15,
        max: 80
    },
    contact: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        select: false // To don't bring password from the database when searching any user.
    },
    notes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Note'
    }]
})

userSchema.pre('save', async function (next) {
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const User = mongoose.model('mUsers', userSchema);

module.exports = User;