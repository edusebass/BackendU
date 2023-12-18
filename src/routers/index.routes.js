const {Router} = require('express')
const router = Router()

const {renderIndex,renderAbout} = require('../controllers/index.controllers.js')

router.get('/',renderIndex)

module.exports = router