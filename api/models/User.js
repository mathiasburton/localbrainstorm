/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 var bcrypt = require('bcrypt');
module.exports = {

	attributes: {

    	first_name : {
    	type: 'string',
    	required: true,
    	maxLength: 45 
	},

    last_name : { 
    	type: 'string', 
    	required: true,
    	maxLength: 45
    },

    email : { 
    	type: 'string',
    	required: true
    },

    password : { 
    	type: 'string',
    	required: true,
    	// password: true 
    },

    admin_level : { 
    	type: 'integer'
    },

    created_at : { 
    	type: 'datetime' 
    },

    updated_at : { 
    	type: 'datetime' 
    }
  },

  beforeCreate: function (values, callback) {
    bcrypt.hash(values.password, 10, function (err, hash) {
      values.password = hash;
      callback();
    });
  }



  // types: {
  // 	password: function(value) {
  //     // For all creates/updates of `User` records that specify a value for an attribute
  //     // which declares itself `type: 'password'`, that value must:
  //     // • be a string
  //     // • be at least 6 characters long
  //     // • contain at least one number
  //     // • contain at least one letter
  //     return _.isString(value) && value.length >= 6 && value.match(/[a-z]/i) && value.match(/[0-9]/);
  //   }
  // }
};

