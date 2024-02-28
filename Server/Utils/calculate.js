const mongoose = require("mongoose");
const performanceModel = require("../Models/PerformanceMetricCollections");

mongoose.connect("mongodb+srv://biswayanpaulju:admin@cluster0.nvdtdn4.mongodb.net/")

async function calculate_total_downtime() {

    const data = await performanceModel.find({});
    // console.log(data);

    let total_up = 0;
    for (let i = 0; i < data.length; i++) {
        let cur_up = Number(data[i].Downtime);
        total_up += cur_up;
    }
    console.log(total_up);
}

async function calculate_total_cose() {
    const data = await performanceModel.find({});

    let total_cost = 0;
    for (let i = 0; i < data.length; i++) {
        let cost = Number(data[i].MaintainanceCose);
        total_cost += cost;
    }
    console.log(total_cost);
}

async function calculate_highest_failure() {
    const data = await performanceModel.find({});

    let maxFail = 0;
    let maxFail_id;
    for (let i = 0; i < data.length; i++) {
        if (data[i].FailureRate > maxFail) {
            maxFail = data[i].FailureRate;
            maxFail_id = data[i]._id;
        }
    }
    console.log(maxFail_id);
}

module.exports = {
    calculate_highest_failure,
    calculate_total_cose,
    calculate_total_downtime
}
