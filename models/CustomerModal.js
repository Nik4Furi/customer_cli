const mongoose = require('mongoose');

//Creating schema for customer info
const customerSchema = new mongoose.Schema({
    firstname : {type : String},
    lastname : {type : String},
    email : {type : String},
    phone : {type : Number},
    time : {
        type : Date,
        default : Date.now
    }
})

//Creating the model to export its
const customerModal = mongoose.model("Customer",customerSchema);

module.exports = customerModal;