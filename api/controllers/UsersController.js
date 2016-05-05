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
			err = "Looks like you already have an account.";
			res.json(err);
		} else {
			// if user doesn't exist, create new user
			var user = User.create(req.body).exec(function (err, created) {
				if(err) {
					console.log(err);
					res.send(err);
				} else {
					// get the newly created user from the db
					User.find({email:req.body.email}).exec(function (err, user) {
						if(err){
							console.log(err);
							res.send(err);
						} else {
							// save the user.id in session return the user
							req.session.user = user[0].id;
							res.json(true);
						}
					})
				}	
			})
		}
	})
  }

  
};

