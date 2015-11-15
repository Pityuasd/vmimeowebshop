/**
 * Publish the 8 latest messages.
 * @return {Mongo.Cursor} Sorted and limited collection objects.
 */
Meteor.publish('products', function () {
  return Products.find({});
});

/**
 * Publish users _id, username and profile information.
 * @return {Mongo.Cursor} Field reduced user objects.
 */
/*Meteor.publish('userIds', function () {
  return Meteor.users.find({}, {fields: {_id: 1, username: 1, profile: 1}});
});*/

Meteor.methods({
  /**
   * Save a message to the backend database.
   */
  addMessage: function(message) {
    if(Meteor.user()) {
      Messages.insert({
        userId:  Meteor.user()._id,
        message: message,
        createdAt: new Date()
      });
    }
  }
});
