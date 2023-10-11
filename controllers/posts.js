const Post = require("../models/Post");
const chance = require('chance').Chance();

module.exports = {
  createPost: async (req, res) => {
    try {
      const id = chance.string({ length: 5, alpha: true })
      // const shorty = `${req.protocol}://${req.get('host')}/${id}`
      const shorty = `${req.get('host')}/${id}`
      console.log(req.body.url)
      if(!req.body.url.startsWith('http')) return res.json({ error: 'invalid url' })
      // try {await fetch(req.body.url)}
      // catch (err) {
      //   console.log(err)
      //   return d
      // }
      
      
      await Post.create({
        URLid: id,
        longURL: req.body.url,
      });
      console.log("Link has been added!",req.body.url);
      res.json({original_url:req.body.url, short_url:id})
      //res.render('index.ejs', {url: shorty});
    } catch (err) {
      console.log(err);
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findOne({URLid: req.params.url});
      if(!post) res.status(404).send('URL not found :(')
      //console.log(post.longURL)
      //const url = 'https://' + post.longURL
      
      res.redirect(post.longURL)
    } catch (err) {
      console.log(err);
    }
  }
}