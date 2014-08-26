App.Views.PostView = Backbone.View.extend({
	id: 'post',
	tagName: 'div',

	initialize: function () {
		console.log('created a postView')
		this.template = HandlebarsTemplates['posts/post'];
		this.editTemplate = HandlebarsTemplates['posts/editForm'];
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.render();
	},

	render: function () {
		this.$el.empty();
		this.$el.html(this.template(this.model.toJSON()));
	},

	events: {
		'click button.delete': 'deleteView',
		'click button.edit': 'editPost',
		'click button.edit-post': 'updatePost',
		'click button.cancel': 'cancel'
	},

	deleteView: function () {
		this.model.destroy();
	},

	editPost: function () {
		App.Routers.postRouter.navigate('posts/' + this.model.id + '/edit');
		this.$el.html(this.editTemplate(this.model.toJSON()));
		this.$('.edit-post').show();
	},

	updatePost: function () {
		var newData = {
			author: 	this.$("input#author").val(),
			title: 		this.$("input#title").val(),
			content: 	this.$("input#content").val()
		};
		this.model.save(newData, {success: function () {
			console.log('updated')
			App.Routers.postRouter.navigate('');
			this.$('.edit-post').fadeOut(500);
		}.bind(this)});

	},
	cancel: function () {
		App.Routers.postRouter.navigate('');
		this.render();
		this.$('.edit-post').fadeOut(500);
	}
	
});

