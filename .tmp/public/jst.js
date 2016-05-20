this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="jumbotron" id="main_page_background">\n\t<h1 id="main_page_text">a community of digital change-makers</h1>\n\t<img id="arrow" ng-src="/../images/arrow-2.png" ng-click="mc.scrollTo(\'#problem\')">\n</div>\n<div class="jumbotron" id="problem">\n\t<div class="row">\n\t\t<div class="col-xs-6">\n\t\t\t<h1>the problem</h1>\n\t\t\t<h3>Having ideas and not knowing what to do next sucks. People need feedback from other people.</h3>\n\t\t\t<h3>"Most innovation results from the use of intentional methods within organizations." (Horvitz, Bailey, 2010)</h3>\n\t\t</div>\n\t\t<div class="col-xs-6">\n\t\t\t<h1>the idea</h1>\n\t\t\t<h3>Build an open ideation platform that allows a community to discuss and plan actions from their ideas and feedback on those ideas.</h3>\n\t\t</div>\n\t</div>\n\t<img id="second_arrow" ng-src="/../images/arrow-2.png" ng-click="mc.scrollTo(\'#how_it_works\')">\n</div>\n<div class="jumbotron" id="how_it_works">\n\t<h1>how it works</h1>\n\t<div class="row">\n\t\t<div class="col-xs-4">\n\t\t\t<img id="add_ideas" ng-src="/../images/add_ideas.png">\n\t\t\t<h2>Input to the possibilities</h2>\n\t\t\t<h3>Individuals have their own ideas and can decide to share to the public. To get feedback on it, they must give feedback to someone else.</h3>\n\t\t</div>\n\t\t<div class="col-xs-4">\n\t\t\t<img id="analyze" ng-src="/../images/analyze_ideas.png">\n\t\t\t<h2>Agitate and Challenge</h2>\n\t\t\t<h3>Ideas need insights that match. Sometimes they\'re off, or need data, budgeting, collaborators, or already exist in some form. Individuals can refine ideas and be pushed toward action.</h3>\n\t\t</div>\n\t\t<div class="col-xs-4">\n\t\t\t<img id="develop" ng-src="/../images/develop_ideas.png">\n\t\t\t<h2>Make it Real</h2>\n\t\t\t<h3>With great insights, ideas grow from their small start and Local Brainstorm will press an idea forward by creating urgency.</h3>\n\t\t</div>\n\t</div>\n\t<img id="second_arrow" ng-src="/../images/arrow-2.png" ng-click="mc.scrollTo(\'#why_it_works\')">\n</div>\n<div class="jumbotron" id="why_it_works">\n\t<h1>why I think it will work</h1>\n\t<div class="row">\n\t\t<div class="col-xs-4">\n\t\t\t<img id="your_ideas" ng-src="/../images/your_ideas.png">\n\t\t\t<h2>The Problem of Self-Interest in Civics</h2>\n\t\t\t<h3>Individuals have their own ideas and that\'s ok. By challenging and suggesting collaboration, similar intents can emerge and combine on their own.</h3>\n\t\t</div>\n\t\t<div class="col-xs-4">\n\t\t\t<img id="cultivating_civics" ng-src="/../images/cultivating_civics.png">\n\t\t\t<h2>The Problem of Half Baked Ideas</h2>\n\t\t\t<h3>Social Innovations are complex, multi-disciplinary by nature, and people need other\'s insight just to know what\'s missing. That is hard to gain from current tools.</h3>\n\t\t</div>\n\t\t<div class="col-xs-4">\n\t\t\t<img id="push_to_action" ng-src="/../images/push_to_action.png">\n\t\t\t<h2>The Problem of Passivity in Social Thought</h2>\n\t\t\t<h3>It\'s painful to watch an idea sit there, not be tried or practiced. Provoking action quicker reduces the risk f an idea held too dearly.</h3>\n\t\t</div>\n\t</div>\n\t<button class="btn btn-warning btn-lg btn-block" ng-click="mc.scrollTo(\'#brainstorm_background\')">Back to Top</button>\n</div>\n\n\n\n';

}
return __p
};

this["JST"]["assets/templates/issues/homelessness.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="ideasController as ic">\n\t<div ng-if="ic.err" class="alert alert-danger">\n\t\t<p><strong>Oops!</strong> {{ic.err}}</p>\n\t</div>\n\t<div class = "row"  ng-if="ic.user">\n\t\t<div class="col-xs-12">\n\t\t\t<form name="idea">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="title">Title</label>\n\t\t\t\t\t<input type="text" name="title" ng-model="ic.new_idea.title" class="form-control" required>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="content">What\'s your idea?</label>\n\t\t\t\t\t<textarea rows="4" cols="50"name="content" ng-model="ic.new_idea.content" class="form-control" required></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<button class="btn btn-default" ng-click="ic.create()">Submit Idea!</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div ng-repeat="idea in ic.ideas">\n\t\t{{idea.title}}\n\t\t{{idea.author.first_name}}\n\t</div>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/templates/issues/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Homelessness</h1>\n<img id="homelessness" ng-src="/../../images/homeless.png">';

}
return __p
};

this["JST"]["assets/templates/organizations/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n\t<h1>Welcome</h1>\n\t<h1></h1>\n</div>';

}
return __p
};

this["JST"]["assets/templates/organizations/new.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="container">\n\t<div class="row">\n\t<!-- \t<div ng-if="flash.all()" class="col-xs-12">\n\t\t\t';
 flash.get(message).forEach(function (message) { ;
__p += '\n\t\t\t\t<div class="alert alert-danger">\n\t\t\t  \t\t<p><strong>Oops!</strong> ' +
((__t = ( message )) == null ? '' : __t) +
'</p>\n\t\t\t\t\t<a role="button" class="btn btn-default" href="/">Back to Log In</a>\n\t\t\t\t</div>\n\t\t\t';
	}) ;
__p += '\n\t\t</div> -->\n\t\t<div ng-if="oc.err" class="alert alert-danger">\n\t\t  \t<p><strong>Oops!</strong> {{oc.err}}</p>\n\t\t</div>\n\t\t<div class="col-xs-6">\n\t\t\t<h2>Register</h2>\n\t\t\t<form name="register">\n\t\t\t\t<div class = "form-group" ng-class="{\'has-error\':register.name.$invalid && register.name.$dirty}">\n\t\t\t\t\t<label for="name">Name of Organization</label>\n\t\t\t\t\t<input type="text" name="name" ng-model="oc.new_org.name"required>\n\t\t\t\t\t<ul class="help-block has-error" ng-if="register.name.$dirty">\n\t\t\t\t\t\t<li ng-show="register.name.$error.required">Name is required</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\':register.email.$invalid && register.email.$dirty}">\n\t\t\t\t\t<label for="email">Email:</label>\n\t\t\t\t\t<input type="email" name="email" ng-model="oc.new_org.email" required>\n\t\t\t\t\t<ul class="help-block has-error" ng-if="register.email.$dirty">\n\t\t\t\t\t\t<li ng-show="register.email.$error.required">Email is required</li>\n\t\t\t\t\t\t<li ng-show="register.email.$error.email">Not a valid email address</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\':register.password.$invalid && password.$dirty}">\n\t\t\t\t\t<label for="password">Password:</label>\n\t\t\t\t\t<input name="password" type="password" ng-model="oc.new_org.password" ng-minlength="6" required>\n\t\t\t\t\t<ul class="has-error help-block" ng-if="register.password.$dirty">\n\t\t\t\t\t\t<li ng-show="register.password.$error.required">Password is required</li>\n\t\t\t\t\t\t<li ng-show="register.password.$error.minlength">Password must be at least 6 characters.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\':register.confirmPassword.$invalid && confirmPassword.$dirty}">\n\t\t\t\t\t<label for="confirmPassword">Confirm Password:</label>\n\t\t\t\t\t<input match-password="password" type="password" ng-model="oc.new_org.confirmPassword" name="confirmPassword" required>\n\t\t\t\t\t<ul class="help-block has-error" ng-if="register.confirmPassword.$dirty">\n\t\t\t\t\t\t<li ng-show="register.confirmPassword.$error.required">Please retype password</li>\n\t\t\t\t\t\t<li ng-show="register.confirmPassword.$error">Passwords must match.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<button class="btn btn-primary btn-lg" type="submit" ng-disabled="register.$invalid" ng-click="oc.create()">Create Account</button>\n\t\t\t</form>\n\t\t</div>\n<!-- \t\t<div class="col-xs-6">\n\t\t\t<h2>Register</h2>\n\t\t\t<form name="register" action =\'/organizations\' method = \'post\'>\n\t\t\t\t<div class = "form-group" ng-class="{\'has-error\':register.name.$invalid && register.name.$dirty}">\n\t\t\t\t\t<label>Name of Organization</label>\n\t\t\t\t\t<input type="text" name="name" required>\n\t\t\t\t\t<ul class="help-block has-error" ng-if="register.name.$dirty">\n\t\t\t\t\t\t<li ng-show="register.name.$error.required">Name is required</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\':register.email.$invalid && register.email.$dirty}">\n\t\t\t\t\t<label>Email:</label>\n\t\t\t\t\t<input type="email" name="email" required>\n\t\t\t\t\t<ul class="help-block has-error" ng-if="register.email.$dirty">\n\t\t\t\t\t\t<li ng-show="register.email.$error.required">Email is required</li>\n\t\t\t\t\t\t<li ng-show="register.email.$error.email">Not a valid email address</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\':register.password.$invalid && password.$dirty}">\n\t\t\t\t\t<label>Password:</label>\n\t\t\t\t\t<input name="password" type="password" ng-minlength="6" required>\n\t\t\t\t\t<ul class="help-block has-error" ng-if="register.password.$dirty">\n\t\t\t\t\t\t<li ng-show="password.$error.required">Password is required</li>\n\t\t\t\t\t\t<li ng-show="register.password.$error.minlength">Password must be at least 6 characters.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\':register.confirmPassword.$invalid && confirmPassword.$dirty}">\n\t\t\t\t\t<label>Confirm Password:</label>\n\t\t\t\t\t<input match-password="password" type="password" name="confirmPassword" required>\n\t\t\t\t\t<ul class="help-block has-error" ng-if="register.confirmPassword.$dirty">\n\t\t\t\t\t\t<li ng-show="register.confirmPassword.$error.required">Please retype password</li>\n\t\t\t\t\t\t<li ng-show="register.confirmPassword.$error">Passwords must match.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<button class="btn btn-primary btn-lg" type="submit" ng-disabled="register.$invalid">Create Account</button>\n\t\t\t</form>\n\t\t</div> -->\n\t\t<div class="col-xs-6">\n\t\t\t<h2>Sign In</h2>\n\t\t\t<form name="login">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="email">Email</label>\n\t\t\t\t\t<input type="text" name="email" ng-model="oc.new_session.email" required>\n\t\t\t\t\t<div class="help-block has-error" ng-if="login.email.$dirty && login.email.$invalid">\n\t\t\t\t\t\t<p ng-show="login.email.$error">Please enter an email</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="password">Password</label>\n\t\t\t\t\t<input type="password" name="password" ng-model="oc.new_session.password" required>\n\t\t\t\t\t<div class="help-block has-error" ng-if="login.password.$dirty && login.password.$invalid">\n\t\t\t\t\t\t<p ng-show="login.password.$required">Please enter a password</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<button type="submit" class="btn btn-primary" ng-click="oc.createSession()">Sign In</button>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n';

}
return __p
};

this["JST"]["assets/templates/plans/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>Plans</h3>';

}
return __p
};

this["JST"]["assets/templates/users/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Hello {{uc.user.name}}</h1>\n<div ng-if="uc.user.ideas">\n\t<h1>Your ideas:</h1>\n</div>\n<div ng-if="!uc.user.ideas">\n\t<h2>You haven\'t posted any ideas yet. Pick an issue to get started:</h2>\n\t<a href="#/issues/homelessness" class="btn btn-default">Homelessness</a>\n</div>\n<!-- <div ng-controller="ideasController as ic">\n\n</div> -->';

}
return __p
};

this["JST"]["assets/templates/users/new.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-if="uc.err" class="alert alert-danger">\n\t<p><strong>Oops!</strong> {{uc.err}}</p>\n</div>\n<div class="row">\n\t<div class="col-xs-6">\n\t\t<h2>Register</h2>\n\t\t<form name="register">\n\t\t\t<div class = "form-group" ng-class="{\'has-error\':register.first_name.$invalid && register.first_name.$dirty}">\n\t\t\t\t<label for="first_name">First Name:</label>\n\t\t\t\t<input type="text" name="first_name" ng-model="uc.new_user.first_name" ng-maxlength="45"required>\n\t\t\t\t<ul class="help-block has-error" ng-if="register.first_name.$dirty">\n\t\t\t\t\t<li ng-show="register.first_name.$error.required">First Name is required</li>\n\t\t\t\t\t<li ng-show="register.first_name.$error.maxlength">Name can\'t be more than 45 characters</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="form-group" ng-class="{\'has-error\':register.last_name.$invalid && register.last_name.$dirty}">\n\t\t\t\t<label for="last_name">Last Name:</label>\n\t\t\t\t<input type="text" name="last_name" ng-model="uc.new_user.last_name" ng-maxlength="45"required>\n\t\t\t\t<ul class="help-block has-error" ng-if="register.last_name.$dirty">\n\t\t\t\t\t<li ng-show="register.last_name.$error.required">Last Name is required</li>\n\t\t\t\t\t<li ng-show="register.last_name.$error.maxlength">Name can\'t be more than 45 characters</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="form-group" ng-class="{\'has-error\':register.email.$invalid && register.email.$dirty}">\n\t\t\t\t<label for="email">Email:</label>\n\t\t\t\t<input type="email" name="email" ng-model="uc.new_user.email" required>\n\t\t\t\t<ul class="help-block has-error" ng-if="register.email.$dirty">\n\t\t\t\t\t<li ng-show="register.email.$error.required">Email is required</li>\n\t\t\t\t\t<li ng-show="register.email.$error.email">Not a valid email address</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="form-group" ng-class="{\'has-error\':register.password.$invalid && password.$dirty}">\n\t\t\t\t<label for="password">Password:</label>\n\t\t\t\t<input name="password" type="password" ng-model="uc.new_user.password" ng-minlength="6" required>\n\t\t\t\t<ul class="help-block has-error" ng-if="register.password.$dirty">\n\t\t\t\t\t<li ng-show="password.$error.required">Password is required</li>\n\t\t\t\t\t<li ng-show="register.password.$error.minlength">Password must be at least 6 characters.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="form-group" ng-class="{\'has-error\':register.confirmPassword.$invalid && confirmPassword.$dirty}">\n\t\t\t\t<label>Confirm Password:</label>\n\t\t\t\t<input match-password="password" type="password" name="confirmPassword" ng-model="uc.new_user.confirm_password" required>\n\t\t\t\t<ul class="help-block has-error" ng-if="register.confirmPassword.$dirty">\n\t\t\t\t\t<li ng-show="register.confirmPassword.$error.required">Please retype password</li>\n\t\t\t\t\t<li ng-show="register.confirmPassword.$error">Passwords must match.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<button class="btn btn-lg" type="submit" ng-click="uc.create()" ng-disabled="register.$invalid">Create Account</button>\n\t\t</form>\n\t</div>\n\t<div class="col-xs-6">\n\t\t<h2>Sign In</h2>\n\t\t<form name ="login">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="email">Email</label>\n\t\t\t\t<input type="text" name="email" ng-model="uc.new_session.email" required>\n\t\t\t\t<p ng-show="login.email.$touched && login.email.$invalid" class="help-block has-error">Please enter an email address</p>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="password">Password</label>\n\t\t\t\t<input type="password" name="password" ng-model="uc.new_session.password" required>\n\t\t\t\t<p ng-show="login.password.$touched && login.password.$invalid" class="help-block has-error">Please enter a password</p>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-lg" ng-click="uc.createSession()">Sign In</button>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<h2>or</h2>\n\t\t\t\t<a href="/login/facebook" role="button" class="btn btn-primary btn-lg">Facebook Login</a>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>';

}
return __p
};