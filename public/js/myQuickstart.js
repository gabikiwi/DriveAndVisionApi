// Client ID and API key from the Developer Console
var CLIENT_ID = '232895216377-sim7jslc23prc6vsk3kidk6p5hcj96pi.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDsMsddPjDQzEd3o-xm4vy_SRXEZqO6tXE';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive';

var authorizeButton = document.getElementById('authorize-button');
var signoutButton   = document.getElementById('signout-button');
var retriveAllFiles = document.getElementById('retrive-all-files');
var clearAllFiles   = document.getElementById('clear-all-files');
var uploadAFile     = document.getElementById('upload-a-file');
var createAFolder   = document.getElementById('create-a-folder');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
    retriveAllFiles.onclick = handleRetriveAllFilesOnClick;
    clearAllFiles.onclick = handleClearAllFilesOnClick;
    uploadAFile.onclick   = handleUploadAFileOnClick;
    createAFolder.onclick = handleCreateAFolderOnClick;

  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display   = 'block';
    retriveAllFiles.style.display = 'block';
    clearAllFiles.style.display   = 'block';
   // createAFolder.style.display   = 'block';
    uploadAFile.style.display     = 'block';
    
    
    //listFiles();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display   = 'none';
    retriveAllFiles.style.display = 'none';
    clearAllFiles.style.display   = 'none';
    uploadAFile.style.display     = 'none';
    createAFolder.style.display   = 'none';
    
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

function handleClearAllFilesOnClick(event){
  removePre();
}

function handleRetriveAllFilesOnClick(event){
  listMyFiles();
}

function handleUploadAFileOnClick(event){
  uploadFile();
}

function handleCreateAFolderOnClick(event){
  createAFolder();
}