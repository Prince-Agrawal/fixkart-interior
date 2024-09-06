const mongoose = require('mongoose');

const contactDetailSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    propertyName: {
        type: String,
    },
    message: {
        type: String,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('ContactDetails', contactDetailSchema);
