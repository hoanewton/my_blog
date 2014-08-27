App.Views.PostFormView = Backbone.View.extend({
	el: '#post-form',

	initialize: function () {
		this.template = HandlebarsTemplates['posts/form'];
		this.render();
	},

	events: {
		'click button.create': 'addPost',
		'click button.cancel': 'cancel'
	},

	render: function () {
		this.$el.empty();
		this.$el.html(this.template());
	},

	addPost: function () {
		var formData = {
			author: 	$('#author').val(),
			title: 		$('#title').val(),
			content: 	$('#content').val()
		};
		App.Collections.postsCollection.create(formData, {success: function () { 
			$('input').val('');
			$('#post-form').hide(100);
			App.Routers.postRouter.navigate('');
		}
	});
	},
	cancel: function(){
		this.$el.fadeOut(200);
		App.Routers.postRouter.navigate('');
	}	
});