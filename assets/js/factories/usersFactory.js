brainstormModule.factory("userFactory", function($http) {
	return {
		factory.index = function(id, callback) {
			$http.get("/users", id).success(function(user) {
				callback(user);
			})
		}

	}
})
	
