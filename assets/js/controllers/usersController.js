brainstormModule.controller("usersController", function(usersFactory, $location) {

	var ctrl = this;
	
	this.create = function() {
		console.log(ctrl.new_user);
		// Will need to fix admin level later
		ctrl.new_user.admin_level = 0; 
			usersFactory.create(ctrl.new_user, function(response) {
				if(response != true){
					ctrl.err = response;
					console.log(ctrl.err);
				} else {
					ctrl.user = response[0]; 
					$location.path('/users');
				}
				ctrl.new_user = {};
			})
	};
})