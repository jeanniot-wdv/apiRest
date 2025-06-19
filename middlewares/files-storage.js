const multer = require('multer');

const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png' 
};

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename : (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        console.log(name);
        const extension = MIME_TYPES[file.mimetype];
        // Ci-dessous le callback ajoute un timestamp concaténé avec
        // le nom de l'image comme nom d'usage pour la sauvegarde
        // Cela permet de le rendre unique
        callback(null, Date.now() + name);
    }
});

module.exports = multer({storage : storage});