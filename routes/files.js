/*
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
*/

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../middlewares/files-storage');
const filesService = require('../services/files');
const File = require('../models/file'); 
const { checkJWT } = require('../middlewares/private');

// Configuration de multer pour l'upload de fichiers
const upload = multer({ storage: storage });

// Route pour gérer l'upload de fichier
router.post('/', upload.single('upload_file'), filesService.createOneFile);
// Route pour récupérer tous les fichiers
router.get('/', checkJWT, async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;