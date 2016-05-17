brainstormModule.controller("mainController", function() {

	var ctrl = this;

	this.scrollTo = function (anchor) {
		$("html, body").animate({ scrollTop:
			$(anchor).offset().top }, 1000);
	};

})
