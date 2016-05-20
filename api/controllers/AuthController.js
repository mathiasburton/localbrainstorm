/**
 * SessionControllerController
 *
 * @description :: Server-side logic for managing sessioncontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = {

	// organizationSession: function(req, res) {
	// 	res.json(req.session.org);
	// },

	// userSession: function(req, res) {
	// 	res.json(req.session.user);
	// },

	login: function (req, res) {
		passport.authenticate('local', req.body.user, function(err, user, info, type) {
			if(err || !user) {
				err = {
					exists: true,
					message: info.message
				};
				return res.json(err); 
				
			} 
			console.log(type);
			req.login(user, type, function (err, message) {
				if(err) {
					err = {
						exists: true,
						message: info.message
					};
					return res.json(err);
				}
				if(info.type == "user"){
					req.session.user = {
						'name': user.first_name + " " + user.last_name,
						'id': user.id,
						'email': user.email
					}
					err = {
						exists: false
					};
					return res.json(err);
				} else {
					req.session.org = {
						'name': user.name,
						'email': user.email,
						'street': user.street,
						'city': user.city,
						'state': user.state,
						'zip': user.zip,
						'mission': user.mission,
						'content': user.content
					};
					err = {
						exists: false
					};
					return res.json(err);
				}
			
			})
		})(req, res);
	},

	logout: function (req, res) {
		req.session.user = null;
		req.session.org = null;
		// req.addFlash("message", "You have logged out");
		return res.redirect('/');
	},

	'facebook': function (req, res, callback) {
		console.log("FIRST FACEBOOK FUNCTION");
			passport.authenticate('facebook', function (err, user) {
				console.log("passport authenticate function");
			})(req, res, callback);
	},

	'facebook/callback': function (req, res, callback) {
		console.log('facebook callback');
		passport.authenticate('facebook', function (err, user) {
			if(err) {
				console.log(err);
				req.addFlash("message", err);
				return res.redirect("/#/users/new");
			} else {
				req.session.user = user;
				return res.redirect("/#/users");
			}
		})(req, res, callback);
	}

	// twitter: function(req, res, callback) {
	// 	passport.authenticate('twitter', function (err, user) {
	// 		console.log("twitter");
	// 	})(req, res callback);
	// },

	// 'twitter/callback': function (req, res, callback) {
	// 	passport.authenticate('twitter', function (err, user) {
	// 		if(err){
	// 			req.addFlash("message", err);
	// 			return res.redirect("/");
	// 		} else {
	// 			req.session.user = user;
	// 			return res.redirect("/users");
	// 		}
	// 	})(req, res, callback);
	// }
	
	
};

