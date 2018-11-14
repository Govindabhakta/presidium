var Express = require('express');
var router = Express.Router();
var directive = require('../models/directive')

router.post('/post', (req, res, next) => {
    createPost(req, res);
});

async function createPost(req, res) {
    var Directive = new directive({
        title: req.body.title,
        id: req.body.id,
        content: req.body.content,
        dirtype: req.body.dirtype,
        author: req.user.country
    })

    try {
        doc = await Directive.save();
        return res.status(201).json(doc);
    } catch(err) {
        console.log("Issue fucking sending it");
        return res.status(501).json(err);
    }
}

router.get('/list', (req, res, next) => {
    directive.find((err, dir) => {
        res.json(dir)
    })
})

router.get('/userdir', (req, res, next) => {  
    directive.find({author: req.user.country}, (err, dir) => {
        res.json(dir)
    })
})

router.patch('/reviewed/:id', (req, res ,next) => {
    directive.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(
        (dir) => {res.send(dir)}
    )
})

module.exports = router;