const bookController = require('../controllers/bookController');
const router = require('express').Router();

router.post('/', bookController.addBooks);

router.get('/', bookController.searchBook);


module.exports = router;


