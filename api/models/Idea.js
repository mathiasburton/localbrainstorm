/**
 * Idea.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	title : {
  		type: "string",
  		required: true
  	},

  	content : {
  		type: "text",
  		required: true
  	},

  	implemented : {
  		type: "boolean",
  		required: true
  	},

  	expected_result : {
  		type: "text"
  	},

  	location : {
  		type: "string"
  	},

  	addition_request : {
  		type: "boolean"
  	},

  	addition_request_pending : {
  		type: "boolean"
  	},

  	addition_request_denied : {
  		type: "boolean"
  	},

  	addition_request_accepted : {
  		type: "boolean"
  	},

  	timeline : {
  		type: "string" 
  		// or should type be text?
  	},

  	budget : {
  		type: "string"
  	},

  	declaration : {
  		type: "string"
  	},

  	created_at : {
  		type: "datetime"
  	},

  	updated_at : {
  		type: "datetime"
  	},

  	// reference to users
  	author : {
  		model: "user"
  	},

  	// reference to plans
  	plan : {
  		model: "plan"
  	},

    facebookAuthor : {
      model: "FacebookUser"
    }

  }
};

