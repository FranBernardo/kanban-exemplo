import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCXwoXIW57FGSCqpp9b1mXViHP57fXNyE4",
    authDomain: "login-foods-go.firebaseapp.com",
    projectId: "login-foods-go",
    storageBucket: "login-foods-go.appspot.com",
    messagingSenderId: "515990216040",
    appId: "1:515990216040:web:f97d8e0385ba02479c8add",
    measurementId: "G-0EQYY2FQ06"
  };
  firebase.initializeApp(config)
  const database = firebase.database()
  
  export default database