const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    courseCreated: {
        type: [String], // Specify an array of strings for the "courseCreated" field
        required: true,
    },
    URL: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    }
});

// Create a model using the schema
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
