brainstormModule.factory("usersFactory", function($http) {
	return{

		create: function(user, callback) {
			$http.post("/users", user).success(function(response) {
				callback(response);
			})
		}
	}
})