Template.chatRoom.events({
  /**
   * Listen to submit events on the form.
   * If fired, save a message to the database.
   * @param event The event object.
   */
  'submit form': function(event) {
    event.preventDefault();
    Meteor.call('addMessage', event.target.message.value);
    event.target.message.value = '';
  },
  /**
   * Listen to keypress events on the textarea.
   * When the 'enter' key is pressed, save the message to the database.
   * @param event The event object.
   */
  'keypress textarea': function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      Meteor.call('addMessage', event.target.value);
      event.target.value = '';
    }
  }
});

Template.chatRoom.helpers({
  /**
   * Get the messages from the database.
   * @returns {Mongo.Cursor} Mongo Cursor of the messages.
   */
  getMessages: function() {
    return Messages.find({}, { sort: {createdAt: -1}});
  },
  /**
   * Get the display name of the users associated with messages.
   * @param userId Id of the user.
   * @returns {String} The displayName of the user.
   */
  getDisplayName: function(userId) {
    var user = Meteor.users.findOne({_id: userId});
    if(user) {
      return user.profile.displayName ? user.profile.displayName : user.username;
    }
    return 'A ghost...';
  },
  /**
   * Calculate if the message belongs to the current user.
   * If so, return with the 'own' string (css class).
   * @param messageUserId The message owners id.
   * @returns {String} String representing the status of the message.
   */
  ownMessage: function(messageUserId) {
    if(Meteor.user() && Meteor.user()._id == messageUserId) {
      return 'own';
    }
    return '';
  },
  /**
   * Calculate the dim effect from the current index.
   * @param index The current position of the watcher.
   * @returns {String} Css class depending on the index of the element.
   */
  applyDimEffect: function(index) {
    if(index <= 4) {
      return '';
    } else if(index <= 6) {
      return 'low-dim';
    } else if(index <= 7){
      return 'high-dim';
    } else {
      return 'hidden'
    }
  }
});
