import express from 'express';
import TestService from '../services/TestService';
const router = express.Router();

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
    TestService.hello();
    res.render('index', { title: 'Modern JavaScript' });
});

router.get('/test', function(req, res, next) {
    res.render('index', { title: 'Modern JavaScript' });
});