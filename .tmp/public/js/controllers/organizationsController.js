brainstormModule.controller("organizationsController", function(organizationFactory, $location, $window) {

	var ctrl = this;

	this.getSession = function() {
		organizationFactory.getSession(function (org) {
			ctrl.org = org[0];
		})
	}

	this.create = function() {
		console.log(this.new_org);
		organization = {
			name: this.new_org.name,
			email: this.new_org.email,
			password: this.new_org.password
		};
		console.log(organization);
		organizationFactory.create(organization, function (err) {
			if(err.exists == true){
				console.log(err.exists);
				ctrl.err = err.message;
			} else {
				$window.location.href = "http://" + $window.location.host + "/";			}
		})
		this.new_org = {};
	}

	this.createSession = function() {
		console.log(this.new_session);
		organization = {
			email: this.new_session.email,
			password: this.new_session.password,
			user: "organization"
		};
		organizationFactory.createSession(organization, function (err){
			console.log(err);
			if(err.exists == true) {
				ctrl.err = err.message; 
			} else {
				$window.location.href = "http://" + $window.location.host + "/";
			}
		})
		this.new_session = {};
	}

	// this.init = function(user) {
	// 	console.log("in controller index function");
	// 	organizationFactory.index(user, function(user) {
	// 		this.user = user;
	// 		$location.path('/plans')
	// 	})
	// }
})

