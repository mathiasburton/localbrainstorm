/**
 * Organization.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
  	name : {
  		type: 'string',
  		required: true
  	},

  	email : {
  		type: 'string',
  		required: true
  	},

  	password : {
  		type: 'string',
  		required: true
  	},

  	street : {
  		type: 'string'
  	},

  	city : {
  		type: 'string'
  	},

  	state : {
  		type: 'string'
  	},

  	zip : {
  		type: 'integer'
  	},

  	mission : {
  		type: 'text'
  	},

  	content : {
  		type: 'text'
  	},

    created_at : {
      type: 'datetime'
    },

    updated_at : {
      type: 'datetime'
    },

  	// reference to Goals

  	goals: {
  		collection: "goal",
  		via: "organization"
  	},
    // reference to actions
  	actions: {
  		collection: "action",
  		via: "organization"
  	},
    // reference to plans
  	plans: {
  		collection: "plan",
  		via: "organization"
  	}
  },

   beforeCreate: function (values, callback) {
    bcrypt.hash(values.password, 10, function (err, hash) {
      if(err) {
        console.log(err);
        callback(err);
      } else {
        values.password = hash;
        return callback();
      }
    });
  }


};

