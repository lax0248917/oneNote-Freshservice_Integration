$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          window.client = _client;
          client.events.on('app.activated',
            function() {
                getModal();
        });
    });
});

// Function that will create modal and slide out with text area for notes
function getModal() {
    client.interface.trigger("showModal", {
        title: "New Note",
        template: "modal.html"
      }).then(function(data) {
        console.log(data)
      }).catch(function(error) {
        console.log(error);
      });
}

// Function to handle all notifications (error, success, etc.)
function showNotification(type, title, message) {
    client.interface.trigger('showNotify', {
        type: `${type}`,
        title: `${title}`,
        message: `${message}`
    }).catch(function (error) {
        console.log('Notification Error : ', error);
    })
}