var express = require('express');
var router = express.Router();
var News = require('../models/news');

router.get('/getPress', (req, res, next) => {
    News.find((err, news) => {
        res.json(news);
    })
}) 

router.post('/submitPress', (req, res, next) => {
    createNews(req, res)
})

async function createNews (req, res) {
    var newNews = new News ({
        title: req.body.title,
        desc: req.body.desc,
        content: req.body.content,
        imgName: req.body.imgName,
        author: req.body.author,
        type: req.body.type,
        published: Date.now()
    })

    try {
        doc = await newNews.save();
        return res.status(201).json(doc);
    } catch(err) {
        console.log("Issue fucking sending it");
        return res.status(501).json(err);
    }
}

module.exports = router;