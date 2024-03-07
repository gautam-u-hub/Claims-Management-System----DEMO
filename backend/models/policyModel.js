const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
    policyType: {
        type: String,
        required: [true, "Please enter policy type"]
    },
    premiumAmount: {
        type: Number,
        required: [true, "Please enter premium amount"],
    },
    sumAssured: {
        type: Number,
        required: [true, "Please enter sum assured"],
    },
    termsAndConditions: {
        type: String,
    },
    policyTerm: {
        type: Number,
        required: [true, "Please enter policy term"],
    },
    paymentFrequency: {
        type: String,
        required: [true, "Please enter payment frequency"],
    },
    lastPaymentDate: {
        type:Date
    }

});

module.exports = mongoose.model("Policy", policySchema);
