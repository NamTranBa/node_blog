const express = require('express')
const route = express.Router()

const siteController = require('../app/controllers/SiteController')


// newsController.index
route.use('/:slug', siteController.search)
route.use('/', siteController.index)

module.exports = route