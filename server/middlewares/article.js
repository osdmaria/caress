const Article = require("../models/article");

module.exports = {
  createArticle: async (req, res, next) => {
    // title, desc, categories, content
    const { title, description } = req.body;
    try {
      const article = await Article.create({ title, description });
      res.status(201).json(article);
    } catch (e) {
      next({ message: e.message, status: 500 });
    }
  },
  updateArticle: async (req, res, next) => {
    const { title, description, _id } = req.body,
      id = req.params.id;
    try {
      if (!(id.toString() == _id.toString()))
        return next({
          message: "You aren't allowed to update other Users article.",
          status: 401,
        });
      const article = await Article.findById(id);
      article.title = title ? title : article.title;
      article.description = description ? description : article.description;
      await article.save();
      res.status(201).send(article);
    } catch (e) {
      next({ message: e.message, status: 500 });
    }
  },
  showArticle: async (req, res) => {
    const id = req.params.id;
    try {
      const article = await Article.findById(id);
      res.json(article);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showArticlesByDoctor: async (req, res) => {
    // if the doctor is authentificated, then show the articles he's got
    try {
        const article = await Article.find();  
        // .select({_id : 0})
        res.json(article);
    } catch (e) {
        res.json({ error: e.message });
    }
},
};
