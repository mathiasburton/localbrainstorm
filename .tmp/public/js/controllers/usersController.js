brainstormModule.controller("usersController", function(userFactory, $location, $window) {

	var ctrl = this;

	this.init = function() {
			$location.path('/users')
	}
	
	this.create = function() {
		console.log(this.new_user);
		// Will need to fix admin level later
		user = {
			first_name: this.new_user.first_name,
			last_name: this.new_user.last_name,
			email: this.new_user.email,
			password: this.new_user.password,
			admin_level: 0
		};
		userFactory.create(user, function (err) {
			if(err.exists == true){
				ctrl.err = err.message;
				console.log(ctrl.err);
			} else {
				ctrl.user = err.user;
				$window.location.href = "http://" + $window.location.host + "/";
			}
		})
		this.new_user = {};
	}

	this.createSession = function() {
		user = {
			email: this.new_session.email,
			password: this.new_session.password,
			user: "user"
		};
		userFactory.createSession(user, function (err) {
			if(err.exists == true) {
				ctrl.err = err.message;
			} else {
				this.user = err.user;
				$window.location.href = "http://" + $window.location.host + "/";
			}
		})
	this.new_session = {};
	}
})

