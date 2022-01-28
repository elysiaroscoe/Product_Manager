const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "{PATH} must be present"],
            minlength: [3, "{PATH} must be at least 3 chars long"]
        },
        price:{
            type: Number,
            required: [true, "{PATH} must be present"],
            minlength: [1, "Please provide a {PATH}"]
        },
        description:{
            type: String,
            required: ["{PATH} must be present"],
            minlength: [10, "{PATH} must be at least 10 characters"]
        },
    },
    {timestamps: true}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;