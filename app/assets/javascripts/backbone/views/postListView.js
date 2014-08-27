App.Views.PostListView = Backbone.View.extend ({
	el: '.posts-container',
	initialize: function () {
		console.log( 'New Post List');
		this.listenTo(this.collection, 'add', this.addOne)
		this.listenTo(this.collection, 'reset', this.addAll)
	},

	events: {
		'click button.add':'showForm'
	},

	addOne: function (post) {
		var postView = new App.Views.PostView({model: post});
		// postView.$el.insertAfter(this.$('span.add'));
		this.$el.find('#post-list').append(postView.$el);
	},

	addAll: function () {
		this.$el.find('#post-list').empty();
		App.Collections.postsCollection.each(function (post) { this.addOne(post);}, this)
	},

	showForm: function () {
		console.log('show form')
		App.Routers.postRouter.navigate('posts/new');
		$('#post-form').fadeIn(500);
		// $('button.add').fadeOut(200);
	}

}) ;
