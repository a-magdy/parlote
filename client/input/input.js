Template.input.events({
  "submit form": function(event) {
    event.preventDefault();

    var loggedInUser = Meteor.user();

    if(!loggedInUser)
    {
      return;
    }

    var message = document.getElementById('message');

    if (message.value !== '') {

      var username = (loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);

      Messages.insert({
        userId: Meteor.userId(),
        name:username,
        room: Session.get('roomName'),
        message: message.value,
        time: Date.now()
      })

      document.getElementById('message').value = '';
      message.value = '';
    }
  }
});
