brainstormModule.controller("mainController", function($scope) {

	var ctrl = this;

	this.scrollTo = function (anchor) {
		$("html, body").animate({ scrollTop:
			$(anchor).offset().top }, 1000);
	};
})
