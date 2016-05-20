module.exports = {

	index: function(req, res) {
		Idea.find({issue: 1})
		.populate('author')
		.exec(function (err, ideas) {
			if(err) {
				console.log(err + " line 8")
				data = {
					err: true,
					message: "Something went wrong."
				};
				return res.json(data);
			} else {
				data = {
					err: false,
					ideas: ideas
				};
				console.log(data.ideas);
				return res.json(data);
			}
		})
	},

	create: function (req, res) {
		console.log(req.session.user.id);
		console.log(req.body);
		Idea.create({
			title: req.body.title,
			content: req.body.content,
			implemented: false,
			issue: 1,
			author: req.session.user.id
		})
		.exec(function (err, idea) {
			if(err) {
				console.log(err + " line 36 in ideascontroller");
				data = {
					err: true,
					message: "Something went wrong."
				};
				return res.json(data);
			} else {
				User.find(req.session.user.id)
				.populate('ideas')
				.exec(function (err, user) {
					if(err) {
						console.log(err + "user population problem");
						data = {
							err: true,
							message: "Something went wrong."
						};
						return res.json(data);
					} else {
						console.log(user + "populated user");
						Issue.find(1)
						.populate('ideas')
						.exec(function (err, issue) {
							if(err) {
								console.log(err + "issue err");
								data = {
									err: true,
									message: "Something went wrong."
								}
							}
						})
					}	
				})
			console.log(idea);
			return res.json(idea);	
			}
		})
	}
}