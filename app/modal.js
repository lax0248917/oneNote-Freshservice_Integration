$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      window.client = _client;
      getModalData();
    });
});

// Function to get and handle data from modal
function getModalData() {
  $('#saveBtn').click(function () {
    // let textData = $('#textArea').val();
    let textData = document.getElementById('textArea').value
    console.log(textData);

    let headers = {
      "Authorization": "bearer <%= access_token %>",
      "Content-Type": "text/html"
    }
    let options = {
      headers: headers,
      isOAuth: true,
      body: textData
    };
    let url = 'https://graph.microsoft.com/v1.0/me/onenote/pages?sectionName=Stuff';
    client.request.post(url, options)
      .then(
        function (data) {
          console.log(data);
          showNotification('success', 'Page was created in OneNote')
        },
        function (error) {
          console.log(error);
          showNotification('error', 'Page was unable to be created')
        }
      );
  });
};

// Function to handle notifications
function showNotification(status, message) {
  client.interface.trigger('showNotify', {
    type: `${status}`,
    message: `${message}`
  });
}