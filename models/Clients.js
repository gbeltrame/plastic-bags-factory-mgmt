const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    street: {type: String, required: true},
    number: {type: Number, required: true},
    floor: {type: Number, required: false},
    apartment: {type: String, required: false},
    department: {type: String, required: false},
    city: {type: String, required: true},
    province: {type: String, required: true}
});

const ClientsSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    address: {type: AddressSchema, required: false},
    relevance: {type: Number, required: true, default: 1}, // being 1 lowest and 5 highest
    enabled: {type: Boolean, required: true, default: true}
},{
    timestamps:true
});

module.exports = mongoose.model('Client', ClientsSchema)