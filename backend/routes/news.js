const News = require('../models/news')

module.exports = function (router) {

    router.get("/news", function (req, res) {

        News.find({}, (err, events) => {
            if (err) res.send(err);
            res.json(events)
        })
    });

    router.post("/news", function (req, res) {
        var newEvent = new News(req.body);
        newEvent.save((err, news) => {
            if (err) {
                res.send(err)
            } else {
                res.json({ message: "News successfully added!", news });
            }
        })
    });
}





