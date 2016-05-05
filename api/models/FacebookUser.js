/**
 * FacebookUser.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
  	facebookId : {
    	type: 'string',
    	required: true,
    	unique: true
    },

    name : {
    	type: 'string',
    	required : true
    },

    picture : {
    	type: 'string',
    	required : true
    },

    email : {
    	type: 'string',
    	required : true
    }

  }

};

