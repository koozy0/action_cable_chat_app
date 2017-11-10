App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    alert('x is connected')
  },
  // Called when the subscription is ready for use on the server
  disconnected: function() {

  },
  // Called when the subscription has been terminated by the server
  received: function(data) {
    alert(data.content)
  }
});

// Called when there's incoming data on the websocket for this channel
