brainstormModule.factory("userFactory", function($http) {
	return {

		getSession: function(callback) {
			$http.get("/user").success(function (data) {
				callback(data);
			})
		},

		create: function(user, callback) {
			$http.post("/users", user).success(function (err) {
				callback(err);
			})
		},

		createSession: function(user, callback) {
			$http.post('/login', user).success(function (err) {
				callback(err);
			})
		}

	}
})
	
