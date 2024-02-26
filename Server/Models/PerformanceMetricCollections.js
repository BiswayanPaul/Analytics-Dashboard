const mongoose = require("mongoose");

const Performance = new mongoose.Schema({
    Uptime: {
        type: Number,
        required: true
    },
    Downtime: {
        type: Number,
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