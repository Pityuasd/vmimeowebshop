/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
  layoutTemplate: 'layout'
});

/**
 * Authentication beforeAction.
 * Prevents access to the user details page if user is not logged in.
 */
/*Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.redirect('index');
  } else {
    this.next();
  }
}, {
  only: ['userDetails']
});*/

/**
 * Router definition for the chat room page.
 * Subscribes to the required publications.
 */
Router.route('/', {
  name:     'index',
  template: 'index',
  subscriptions: function() {
    return [
      Meteor.subscribe('products'),
    ];
  } 
});
Router.route('/product/:_id', {
    template: 'productPage',
	  subscriptions: function() {
    return [
      Meteor.subscribe('products'),
    ];
  }, 
    data: function(){
        var currentProduct = this.params._id;
		console.log(Products.findOne({_id: currentProduct}));
		return Products.findOne({_id: currentProduct});
    }
});