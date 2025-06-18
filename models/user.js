const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// On importe le module bcrypt permet de hacher les expressions
const bcrypt = require('bcrypt');

const User = new Schema({
    name : {
        type    : String,
        trim    : true,
        required: [true, 'Le nom est requis'] 
    },
    firstname : {
        type    : String,
        trim    : true
    },
    email : {
        type    : String,
        trim    : true,
        required: [true, `L'email est requis`],
        unique  : true, // index unique
        lowercase: true
    },
    password : {
        type    : String,
        trim    : true
    }
}, {
    // ajouter 2 champs au document createAt et updateAt
    timestamps  : true
});

// Hash le mot de passe quand il est modfié
User.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

module.exports = mongoose.model('User', User);