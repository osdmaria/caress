const express = require("express")

const {createDoctor, logDoctor} = require ("../middlewares/doctor")
router = express.Router();
router.route("/signup").post(createDoctor);
router.route("/login").post(logDoctor);

module.exports = router;