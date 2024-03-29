const User = require("../Models/user");
const Asset = require("../Models/AssetsCollection");
const { hashPassword, comparePassword } = require("../Helpers/auth");
const jwt = require("jsonwebtoken");
const performanceModel = require("../Models/PerformanceMetricCollections");
const { calculate_highest_failure, calculate_total_cose, calculate_total_downtime } = require("../Utils/calculate");

let i = 1;

const test = (req, res) => {
    res.json("Test is working");
};

// Register Endpoint

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if name was entered
        if (!name) {
            return res.json({
                error: "Name is required",
            });
        }
        // Check if password was entered
        if (!password || password.length < 6) {
            return res.json({
                error: "Password must be at least 6 characters",
            });
        }
        // check email
        const exist = await User.findOne({ email: email });

        if (exist) {
            return res.json({
                error: "Email already exists",
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({ name, email, password: hashedPassword });
        return res.json(user);
    } catch (err) {
        console.log(err);
    }
};

// Login Endpoint

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({
                error: "User does not exist",
            });
        }
        // Check if password is correct
        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie("token", token).json(user)
            })
        }
        else {
            res.json({ error: " password is incorrect " });
        }
    } catch (err) {
        console.log(err);
    }
};

const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                return res.json({
                    error: "Invalid token",
                });
            }
            res.json(user);
        });
    }
    else {
        res.json(null);
    }

}

const getAssets = async (req, res) => {
    try {
        const { AssetName, AssetType, Location, PurchaseDate, InitialCost, OperationalStatus } = req.body;

        const asset = await Asset.create({
            AssetId: Asset._id,
            AssetName,
            AssetType,
            Location,
            PurchaseDate,
            InitialCost,
            OperationalStatus
        })
        i = i + 1;
        return res.json(asset);
    }
    catch (e) {
        console.log(e);
    }
}

const getPerformance = async (req, res) => {
    try {
        const { Uptime,
            Downtime,
            MaintainanceCose,
            FailureRate,
            Efficiency } = req.body;

        const id = (await Asset.find().sort({ '_id': -1 }).limit(1))[0];
        // console.log(id['_id']);


        const performance = await performanceModel.create({
            AssetId: id,
            Uptime,
            Downtime,
            MaintainanceCose,
            FailureRate,
            Efficiency
        })
        return res.json(performance);
    }
    catch (e) {
        // console.log(e);
    }
}

const getCalculate = async (req, res) => {
    const highest_failure = calculate_highest_failure();
    const total_cost = calculate_total_cose();
    const total_downtime = calculate_total_downtime();

    res.json(
        {
            highest_failure,
            total_cost,
            total_downtime
        }
    )
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    getAssets,
    getPerformance,
    getCalculate
};
