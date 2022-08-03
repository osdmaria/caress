const express = require("express"),
    router = express.Router(),
    {updateDoctor, showDoctor} = require("../middlewares/doctor");

router.route("/:id").get(showDoctor).put(updateDoctor)
module.exports = router;