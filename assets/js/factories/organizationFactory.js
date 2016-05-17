brainstormModule.factory("organizationFactory", function($http) {
	return {
		getSession: function(callback) {
			$http.get('/organizationSession').success(function (org) {
				console.log(org);
				callback(org);
			})
		},

		create: function(org, callback) {
			$http.post('/organizations', org).success(function (err) {
				callback(err);
			})
		},

		createSession: function(org, callback) {
			$http.post('/login', org).success(function (err) {
				console.log(err);
				callback(err);
			})
		}
	}
})