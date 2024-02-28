const mongoose = require("mongoose");

const Performance = new mongoose.Schema({
    Uptime: {
        type: String,
        required: true
    },
    Downtime: {
        type: String,
        required: true
    },
    MaintainanceCose: {
        type: Number,
        required: true
    },
    FailureRate: {
        type: Number,
        required: true
    },
    Efficiency: {
        type: Number,
        required: true
    }
})

const performanceModel = mongoose.model("Performance", Performance);

module.exports = performanceModel;