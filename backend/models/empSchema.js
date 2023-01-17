const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const empSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ['EMPLOYEE', 'MANAGER', 'DIRECTOR', 'VP']
    },
    department: {
        type: String,
        required: true,
        enum: ['IT', 'MARKETING', 'HR', 'ENGINEERING']
    },
    empType: {
        type: String,
        required: true,
        enum: ['Full Time', 'Part Time', 'Contract', 'Seasonal']
    },
    currentStatus: {
        type: String,
        required: false,
        enum: ["0", "1"],
        default: "1"
    }
}, {
    // timestamps: true
});
module.exports = Employees = mongoose.model('Employees', empSchema);
