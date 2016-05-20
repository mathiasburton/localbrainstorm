brainstormModule.factory("ideaFactory", function($http) {
	return {
		create: function(idea, callback) {
			$http.post("/ideas", idea).success(function (response) {
				callback(response);
			})
		},

		getIdeas: function(callback) {
			$http.get('/ideas').success(function (response) {
				callback(response);
			})
		}

	}
})