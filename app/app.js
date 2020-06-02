$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          window.client = _client;
          client.events.on('app.activated',
            function() {
              showModal();
              
          });
        getModalData();
    });
});

// Function that will create modal and slide out with text area for notes
function showModal() {
  client.interface.trigger("showModal", {
      title: "New Note",
      template: "modal.html",
      data: ""
    }).then(function(data) {
      console.log(data)
    }).catch(function(error) {
      console.log(error);
    });
}

// Function to get and handle data from modal
function getModalData() {
  $('#saveBtn').click(function () {
    // client.instance.context()
    //   .then(function(context){
    //   console.log('Model instance API context', context);
    //   });
    client.instance.send({
      message: {name: "Zachary King"}
    });
    client.instance.receive(function (event) {
      let data = event.helper.getData();
      console.log(data);
    })
  })
};

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

// .then(function () {
//   let noteData = $('#textArea').val();
//   client.instance.send({
//     message: {noteData}
//   })
// }).then(function () {
//   client.instance.receive(function (event) {
//     let data = event.helper.getData();
//     console.log(data);
//   });
// })