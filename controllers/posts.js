const Post = require("../models/Post");
const chance = require('chance').Chance();

module.exports = {
  createPost: async (req, res) => {
    try {
      const id = chance.string({ length: 5, alpha: true })
      // const shorty = `${req.protocol}://${req.get('host')}/${id}`
      const shorty = `${req.get('host')}/${id}`
      
      await Post.create({
        URLid: id,
        longURL: req.body.url,
      });
      console.log("Link has been added!");
      res.render('index.ejs', {url: shorty});
    } catch (err) {
      console.log(err);
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findOne({URLid: req.params.id});
      if(!post) res.status(404).send('URL not found :(')
      const url = 'https://' + post.longURL
      
      res.redirect(url)
    } catch (err) {
      console.log(err);
    }
  }
}