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
    let textData = $('#textArea').val();
    console.log(textData);
  })
};

// Function to handle the Requests
function sendData() {
  client.request.post('https://graph.microsoft.com/v1.0/me/onenote/pages?sectionName=Quick_Notes', {
    headers: {
      Authorization: "Basic <%= encode(iparam.username + \":\" + iparam.password) %>"
    },
    body: JSON.stringify(textData)
  })
  .then(
    function(data) {
      console.log(data);
      showNotification('success', 'Page was created in OneNote')
    },
    function(error) {
      console.log(error);
      showNotification('error', 'Page was unable to be created')
    }
  );
}

// Function to handle notifications
function showNotification (status, message) {
	client.interface.trigger('showNotify', {
		type    : `${status}`,
		message : `${message}`
	});
}
