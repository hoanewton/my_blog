App.Collections.PostsCollection = Backbone.Collection.extend({
  
  initialize: function() {
    console.log('New Post Collection');
  },

  model: App.Models.Post,
  url: '/posts',

  save: function(){
    this.each(function(model){
      if (!model.has('id') || model.hasChanged()) { model.save(); }
    }, this)
  }
});
