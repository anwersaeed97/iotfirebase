// Import the firebase package downloaded to this project folder through npm
import firebase from "firebase";

// Define a variable of the project name, which is used in the config parameters for firebase
const firebaseProjectName = "server-57b2d"

// Parameters required by the initializeApp used below
const config = {
  apiKey: "AIzaSyBOTd5BkIxontH8qJNoGnyZHP53eC48jaE",
  authDomain: 'server-57b2d.firebaseapp.com',
  databaseURL: 'https://server-57b2d.firebaseio.com',
  projectId: 'server-57b2d'
};

firebase.initializeApp(config);

export default firebase;