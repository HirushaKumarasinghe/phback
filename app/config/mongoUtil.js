const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://user:user@cluster0.mpctz.mongodb.net/phoenix";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('employees');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};