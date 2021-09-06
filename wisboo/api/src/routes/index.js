const { Router } = require('express');
const encuesta = require('./forms')

const router = Router();

router.use('/forms', encuesta)

module.exports = router;
