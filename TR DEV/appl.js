// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDh62r-nevMrm4UIrakKMVcXQOU3G0Cubo",
    authDomain: "larch-7fc70.firebaseapp.com",
    databaseURL: "https://larch-7fc70.firebaseio.com",
    projectId: "larch-7fc70",
    storageBucket: "larch-7fc70.appspot.com",
    messagingSenderId: "777341845441",
    appId: "1:777341845441:web:37e8ccfa150b7b1291f940"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector("#registrationform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector('#subject').value;
    let msg = document.querySelector('#msg').value;
    console.log(name, email, subject, msg);
  
    saveContactInfo(name, email, subject, msg );
  
    document.querySelector("#registrationform").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, subject, msg) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      subject :  subject,
      msg: msg,
    });
  }