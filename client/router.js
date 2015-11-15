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
Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.redirect('chatRoom');
  } else {
    this.next();
  }
}, {
  only: ['userDetails']
});

/**
 * Router definition for the chat room page.
 * Subscribes to the required publications.
 */
Router.route('/', {
  name:     'chatRoom',
  template: 'chatRoom',
  subscriptions: function() {
    return [
      Meteor.subscribe('messages'),
      Meteor.subscribe('userIds')
    ];
  }
});

/**
 * Router definition for the user details page.
 */
Router.route('/user', {
  name:     'userDetails',
  template: 'userDetails'
});