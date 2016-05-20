/**
 * Issue.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name : {
  		type: "string"
  	},

  	plans : {
  		collection: "plan",
  		via: "issue"
  	},

  	plan_components : {
  		collection: "plan_component",
  		via: "issue"
  	},

  	ideas : {
  		collection: "idea",
  		via: "issue"
  	}

  }
};

