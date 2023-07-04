const express = require("express");
const router = express.Router();
const { getAllTrees } = require("../controller/trees");

router.get("/trees", getAllTrees);

module.exports = router;