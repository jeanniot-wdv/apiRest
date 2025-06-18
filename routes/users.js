const express = require('express');
const router = express.Router();

const service = require('../services/users');
/* La route pour lire les infos d'un utilisateur */
router.get('/:id', service.getById);
/* La route pour ajouter un utilisateur */
router.put('/add', service.add);
/* La route pour modifer un utilisateur */
router.patch('/:id', service.update);
/* La route pour supprimer un utilisateur */
router.get('/:id', service.delete);
/* La route authenticate */
router.post('/authenticate', service.authenticate);

module.exports = router;
