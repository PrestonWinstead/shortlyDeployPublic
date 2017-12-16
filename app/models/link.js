var db = require('../config');
var crypto = require('crypto');
const MongooseTrigger = require('mongoose-trigger');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlsSchema = new Schema({
  id: Number,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: { type: Date, default: Date.now }
});

const Link = mongoose.model('Link', urlsSchema);

urlsSchema.post('save', (newLink) => {
  let newCode = crypto.createHash('sha1');
  newCode.update(newLink.url);
  newCode = newCode.digest('hex').slice(0, 5);
  Link.update(newLink, {code: newCode});
});


module.exports = Link;

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

