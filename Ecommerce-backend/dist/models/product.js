import mongoose from "mongoose";
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    price: {
        type: Number,
        required: [true, "Please enter price"]
    },
    photo: {
        type: String,
        required: [true, "Please upload photo"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter stock details"]
    },
    category: {
        type: String,
        required: [true, "Please enter category"],
        trim: true
    },
}, {
    timestamps: true
});
export var Product = mongoose.model("Product", schema);
