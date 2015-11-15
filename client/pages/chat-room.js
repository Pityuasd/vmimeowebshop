/*Template.chatRoom.events({

  'submit form': function(event) {
    event.preventDefault();
    Meteor.call('addMessage', event.target.message.value);
    event.target.message.value = '';
  },

  'keypress textarea': function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      Meteor.call('addMessage', event.target.value);
      event.target.value = '';
    }
  }
});

Template.chatRoom.helpers({

  getMessages: function() {
    return Messages.find({}, { sort: {createdAt: -1}});
  },

  getDisplayName: function(userId) {
    var user = Meteor.users.findOne({_id: userId});
    if(user) {
      return user.profile.displayName ? user.profile.displayName : user.username;
    }
    return 'A ghost...';
  },

  ownMessage: function(messageUserId) {
    if(Meteor.user() && Meteor.user()._id == messageUserId) {
      return 'own';
    }
    return '';
  },

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
});*/
