const express = require("express");
const router = express.Router();
const { getAllPerks } = require("../controller/perks");

router.get("/perks", getAllPerks);

module.exports = router;