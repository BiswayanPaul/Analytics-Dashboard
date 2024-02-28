const mongoose = require("mongoose");

const Assets = new mongoose.Schema({
    AssetId: {
        type: String
    },
    AssetName: {
        type: String,
        required: true
    },
    AssetType: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    PurchaseDate: {
        type: Date,
        required: true
    },
    InitialCost: {
        type: Number,
        required: true
    },
    OperationalStatus: {
        type: Boolean,
        required: true
    }

})

const assetsModel = mongoose.model("Assets", Assets);

module.exports = assetsModel;