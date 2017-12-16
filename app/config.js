const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var path = require('path');

mongoose.connect('mongodb://prestonW:veritas42@ds059207.mlab.com:59207/shortlydeploy')

const urlsSchema = new Schema({
  id: Number,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: {type: Date, default: Date.now}
});

const usersSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  timestamp: { type: Date, default: Date.now }
});

const User = mongoose.model('User', usersSchema);

const Url = mongoose.model('Url', urlsSchema);

module.exports.saveUser = (userObj) => {
  const newUser = new User(userObj);
  return new Promise((reject, resolve) => {
    newUser.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve('success');
      }
    });
  });
}

module.exports.saveUrl = (urlObj) => {
  const newUrl = new Url(urlObj);
  return new Promise((reject, resolve) => {
    newUrl.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve('success');
      }
    });
  });
}


// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;
