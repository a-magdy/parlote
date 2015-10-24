Template.input.events({
  "submit form": function(event) {
    event.preventDefault();

    var loggedInUser = Meteor.user();

    // Get logged in user name or Anonymous.
    if (loggedInUser) {
      var name = loggedInUser.profile.name || loggedInUser.services.github.username;
    } else {
      var name = "Anonymous";
    }

    var message = document.getElementById('message');

    if (message.value !== '') {
      Messages.insert({
        userId: Meteor.userId(),
        name: name,
        message: message.value,
        time: Date.now()
      })

      document.getElementById('message').value = '';
      message.value = '';
    }
  }
});
