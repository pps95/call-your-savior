const router = require('express').Router();

//router.route('/api')
router.post('/getSavior', require('./controller').getSavior);

router.all('*', (req, res, next) => {
    res.redirect('/');
})

module.exports = router;