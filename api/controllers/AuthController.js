/**
 * SessionControllerController
 *
 * @description :: Server-side logic for managing sessioncontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = {
	login: function (req, res) {
		console.log("in create");
		console.log(req.body);
		passport.authenticate('local', function(err, user, info) {
			if(err || !user) {
				req.session.flash = info.message;
				return res.redirect("/"); 
				
			} 
			req.login(user, function (err, message) {
				if(err) {
					res.send(err);
				}
				req.session.flash = info.message;
				req.session.user = user;
				return res.redirect('/users')
			
			})
		})(req, res);
	},

	logout: function (req, res) {
		req.session.user = null;
		req.session.flash = 'You have logged out';
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
				req.session.flash = err;
				return res.redirect("/");
			} else {
				req.session.user = user;
				return res.redirect("/users");
			}
		})(req, res, callback);
	}
	
	
};

