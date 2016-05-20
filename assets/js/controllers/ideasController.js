brainstormModule.controller("ideasController", function(ideaFactory, userFactory) {

	var ctrl = this;

	getSession = function() {
		userFactory.getSession(function (user) {
			ctrl.user = user;
			console.log(ctrl.user);
		})
	}
	getSession();

	getIdeas = function() {
		ideaFactory.getIdeas(function (ideas) {
			ctrl.ideas = ideas.ideas;
		})
	}
	getIdeas();

	this.create = function() {
		console.log(this.new_idea);
		console.log(this.user)
		ideaFactory.create(this.new_idea, function (response){
			if(response.err == true) {
				ctrl.err = response.message;
			}
		})
		this.new_idea = {};
	}

})