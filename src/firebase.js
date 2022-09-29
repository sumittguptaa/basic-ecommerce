import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAnJqY84DUy6zmS6BoGrUd8WBHwd86oj58",
    authDomain: "d2mmall-1217c.firebaseapp.com",
    databaseURL: "https://d2mmall-1217c.firebaseio.com",
    projectId: "d2mmall-1217c",
    storageBucket: "d2mmall-1217c.appspot.com",
    messagingSenderId: "65540140427",
    appId: "1:65540140427:web:d74db1e2a9bf4a0bb6d38e",
    measurementId: "G-SZFL7C3HXY"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
