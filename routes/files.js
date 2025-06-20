const express = require('express');

const router = express.Router();

const service = require('../services/users');

const multer = require('../middlewares/files-storage');

const private = require('../middlewares/private');


router.get('/', private.checkJWT, service.getAllFiles);

router.post('/', multer, service.createOneFile);

router.get('/:id', private.checkJWT, service.getOneFile);

router.put('/:id', private.checkJWT, multer, service.modifyOneFile);

router.delete('/delete', private.checkJWT, service.deleteOneFile);

module.exports = router;