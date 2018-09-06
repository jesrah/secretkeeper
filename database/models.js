const mongoose = require('mongoose');
let Schema = mongoose.Schema
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/secretkeeper');

let db = mongoose.connection;

let secretSchema = new Schema({
		id: {type: Number, require: true, unique: true},
		secret: String,
	});

const Secret = mongoose.model('Secret', secretSchema);

module.exports.Secret = Secret;
module.exports.db = db;

// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// // mongoose.connect('mongodb://localhost/crunchlyview');
// mongoose.connect('mongodb://database/secretkeeper');

// let db = mongoose.connection;

// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', () => {}
// // //connected
// // );

// const secretSchema = mongoose.Schema({
// 		id: {type: Number, require: true, unique: true},
// 		secret: String,
// 	});

// const Secrets = mongoose.model('Secrets', secretSchema);

// module.exports.Secrets = Secrets;
// module.exports.db = db;