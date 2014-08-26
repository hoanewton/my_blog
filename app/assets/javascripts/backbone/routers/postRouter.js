App.Routers.PostRouter = Backbone.Router.extend({

	routes: {
		'': 'index',
		'posts/new': 'new',
		'posts/:id/edit': 'edit'
	},

	initialize: function () {
		console.log (' New Router! ');
		App.Collections.postsCollection = new App.Collections.PostsCollection();
		App.Views.postListView = new App.Views.PostListView({collection: App.Collections.postsCollection});
		App.Views.postFormView = new App.Views.PostFormView({collection: App.Collections.postsCollection});
		App.Collections.postsCollection.fetch({ reset: true });
	},

	index: function () {
		App.Collections.postsCollection.fetch({ reset: true });
		$('#post-form').hide();
	},

	new: function () {
		console.log('new action activated')
		App.Collections.postsCollection.fetch({ reset: true });
		$('#post-form').fadeIn(500);
	},

	edit: function (postID) {
		var posts = App.Collections.postsCollection;
		posts.fetch({ reset: true, success: function () {
			$('#' + postID).find('button.edit').click()
		} });
		$('#post-form').hide();
	}

});