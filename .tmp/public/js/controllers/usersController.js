brainstormModule.controller("usersController", function(userFactory, $location) {

	var ctrl = this;

	this.init = function(user) {
		console.log("in controller index function");
		userFactory.index(user, function(user) {
			this.user = user;
			$location.path('/plans')
		})
	}
	
// 	// this.create = function() {
// 	// 	console.log(ctrl.new_user);
// 	// 	// Will need to fix admin level later
// 	// 	ctrl.new_user.admin_level = 0; 
// 	// 		usersFactory.create(ctrl.new_user, function(response) {
// 	// 			if(response != true){
// 	// 				ctrl.response = response;
// 	// 				console.log(ctrl.response);
// 	// 			} else {

// 	// 				$location.path("/users");
// 	// 			}
// 	// 			ctrl.new_user = {};
// 	// 		})
// 	// };
})