const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile, getAssets, getPerformance, getCalculate } = require('../controllers/authControllers');
// middleware

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
router.use(express.json());

router.get("/", test)
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/dashboard/assetcollection", getAssets);
router.post("/dashboard/performancematrixcollection", getPerformance);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/dashboard/calculate", getCalculate);
module.exports = router;