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
				req.addFlash('message', 'Looks like you already have an account.');
				return res.redirect("/users/new");
			} else {
				User.create(req.body).exec(function (err, user) {
					if(err) {
						console.log(err);
						req.addFlash('message', err);
						return res.redirect("users/new");
					} else {
						// get the newly created user from the db
						User.find({email:req.body.email}).exec(function (err, user) {
							if(err){
								console.log(err);
								req.addFlash('message', err);
								return res.redirect("users/new");
							} else {
								// save the user data in session
								req.session.user = user;
								res.redirect("/users");
							}
						});
					}
							
				});		
				
			}
		});
	}

  
};

