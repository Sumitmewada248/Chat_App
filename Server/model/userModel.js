
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    consfirmPassword: {
        type: String,
        required: true,
    }
},{timestamps: true});// createdAt and updatedAt

module.exports = mongoose.model("User", userSchema);