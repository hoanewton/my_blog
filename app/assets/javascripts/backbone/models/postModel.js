App.Models.Post = Backbone.Model.extend({

	initialize: function () {
		console.log ("new Post Model created !");
	},
	urlRoot: '/posts'
});
