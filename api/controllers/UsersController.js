/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {


	create: function (req, res) {
	// check to see if user already exists in db
		User.find({email:req.body.email}).exec(function (err, user){
			if(user.length > 1) {
				// if user exists, send back error
				err = {
					exists: true,
					message: "Looks like you already have an account."
				};
				return res.json(err);
			} else {
				User.create(req.body).exec(function (err, user) {
					if(err) {
						console.log(err);
						err = {
							exists: true,
							message: "There was a problem creating your account."
						};
						return res.json(err);
					} else {
						// get the newly created user from the db
						User.find({email:req.body.email}).exec(function (err, user) {
							if(err){
								console.log(err);
								err = {
									exists: true,
									message: "Something went wrong."
								};
								return res.json(err);
							} else {
								// save the user data in session
								req.session.user = user;
								err = {
									exists: false,
									user: user.id
								};
								return res.json(err);
							}
						});
					}
							
				});		
				
			}
		});
	},

	getSession: function (req, res) {
		if(req.session.user) {
			User.find({id: req.session.user}).exec(function (err, user) {
				if(err) {
					console.log(err);
					err = {
						exists: true,
						message: "Something went wrong."
					};
					return res.json(err);
				} else {
					user = {
						first_name: user.first_name,
						last_name: user.last_name,
						email: user.email,
						admin_level: user.admin_level
					};
					err = {
						exists: false,
						user: user
					};
					return res.json(err);
				}
			})
		}
	}

  
};

