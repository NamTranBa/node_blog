
class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('cc')
    }
}


module.exports = new NewsController;