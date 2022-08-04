const express = require("express"),
    router = express.Router(),
    {updateArticle, showArticle, createArticle, showArticlesByDoctor} = require("../middlewares/article");

router.route("/all").get(showArticlesByDoctor)
router.route("/:id").get(showArticle).put(updateArticle)
router.route("/").post(createArticle)
module.exports = router;