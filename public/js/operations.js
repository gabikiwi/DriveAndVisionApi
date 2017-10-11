// list all the file from gdrive

var listMyFiles = function listFiles() {
  gapi.client.drive.files.list({
    'pageSize': 500,
    'fields': "nextPageToken, files(id, name)"
  }).then(function (response) {
    appendPre('Files:');
    var files = response.result.files;
    if (files && files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        appendPre(file.name + ' (' + file.id + ')');
      }
    } else {
      appendPre('No files found.');
    }
  });
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {

  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);

}

function removePre() {
  document.getElementById('content').innerHTML = "";
}



// create a Folder
var createAFolder = function createAFolder() {
  var service = google.drive('v3');
  var fileMetadata = {
    'name': 'Invoices',
    'mimeType': 'application/vnd.google-apps.folder'
  };
  service.files.create({
    resource: fileMetadata,
    fields: 'id'
  }, function (err, file) {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log('Folder Id: ', file.id);
    }
  });

};


// upload a File
// resursa https://stackoverflow.com/questions/34905363/create-file-with-google-drive-api-v3-javascript
// https://developers.google.com/drive/v3/web/mime-types
// https://gist.github.com/mkaminsky11/8624150

var uploadFile = function UploadFile() {
  // var service = google.drive('v3');

  var folderId = '0B66UiY7IOpr-b2c0M2VlUnpCaTA';
  var fileMetadata = {
    'name': 'Ana Iubita',
    'mimeType': 'application/vnd.google-apps.folder',
    // 'name': 'photoTest1.jpg',
    parents: [folderId]
  };

<<<<<<< HEAD

  // var media = {
  //    mimeType: 'image/jpeg',
  //     body: fs.createReadStream('./files/photo.jpg')
  // };
  gapi.client.drive.files.create({
    resource: fileMetadata
    //  media: media,
    // fields: 'id'
  }).then(function (response) {
    switch (response.status) {
      case 200:
        var file = response.result;
        console.log('Created Folder Id: ', file.id);
        break;
      default:
        console.log('Error creating the folder, ' + response);
        break;
    }
  });
}
=======
var uploadFileNew = function UploadFileNew(){
  
      let service = google.drive('v3');
      var folderId = '0B66UiY7IOpr-b2c0M2VlUnpCaTA';
      var fileMetadata = {
          'name': 'photoTest1.jpg',
          parents: [folderId]
        };
      
  
      var media = {
          mimeType: 'image/jpeg',
          body: fs.createReadStream('./img/photo.jpg')
      };
      service.files.create({
          auth: auth,
          resource: fileMetadata,
          media: media,
          fields: 'id'
      }, function (err, file) {
          if (err) {
              // Handle error
              console.error(err);
          } else {
              console.log('File Id: ', file.id);
          }
      });
};
>>>>>>> my_working_project
