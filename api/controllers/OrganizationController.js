/**
 * OrganizationController
 *
 * @description :: Server-side logic for managing Organizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
		// check to see if user already exists in db
		Organization.find({email:req.body.email}).exec(function (err, org){
			if(org.length > 1) {
				// if organization exists, send back error
				err = {
					exists: true,
					message: "Looks like you already have an account."
				};
				return res.json(err);
			} else {
				Organization.create(req.body).exec(function (err, org) {
					if(err) {
						console.log(err);
						err = {
							exists: true,
							message: "There was a problem creating your account."
						};
						return res.json(err);
					} else {
						// get the newly created organization from the db
						Organization.find({email:req.body.email}).exec(function (err, org) {
							if(err){
								console.log(err);
								err = {
									exists: true,
									message: "Something went wrong."
								};
								return res.json(err);
							} else {
								console.log(org);
								// save the organization data in session
								req.session.org = org.id;
								err = {
									exists: false,
									org: org
								};
								res.json(err);
							}
						});
					}							
				});		
			}
		});
	}
	// create: function (req, res) {
	// 	// check to see if user already exists in db
	// 	Organization.find({email:req.body.email}).exec(function (err, org){
	// 		if(org.length > 1) {
	// 			// if organization exists, send back error
	// 			req.addFlash('message', 'Looks like you already have an account.');
	// 			return res.redirect("/organizations/new");
	// 		} else {
	// 			Organization.create(req.body).exec(function (err, org) {
	// 				if(err) {
	// 					console.log(err);
	// 					req.addFlash('message', "There was a problem creating your organization.");
	// 					return res.redirect("organizations/new");
	// 				} else {
	// 					// get the newly created organization from the db
	// 					Organization.find({email:req.body.email}).exec(function (err, org) {
	// 						if(err){
	// 							console.log(err);
	// 							req.addFlash('message', "Something went wrong.");
	// 							return res.redirect("organizations/new");
	// 						} else {
	// 							console.log(org);
	// 							// save the organization data in session
	// 							req.session.org = org;
	// 							console.log(req.session.org);
	// 							res.redirect("/organizations");
	// 						}
	// 					});
	// 				}							
	// 			});		
	// 		}
	// 	});
	// }
	
};

