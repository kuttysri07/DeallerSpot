const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    title: String,
    description: String,
    companyname:String,
    address:String,
    brandname:String,
    industry:String,
    category:String,
    product:String,
    revenue:String,
    role: {  // Update role to accept an object with "dealer" and "franchise"
        dealer: { type: Boolean, default: false },
        franchise: { type: Boolean, default: false },
        wholesaler: { type: Boolean, default: false },
        stockist: { type: Boolean, default: false },
        distributor: { type: Boolean, default: false },
        agency: { type: Boolean, default: false },
        retailer: { type: Boolean, default: false }
    },
    investmentminimum:String,
    investmentmaximum:String,
    space:String,
    state:String,
    district: String,
    royality:String,
    numberhide:Boolean,
    approve:Boolean
});

const SellerModel = mongoose.model("sellerregister", SellerSchema);

module.exports = SellerModel;
