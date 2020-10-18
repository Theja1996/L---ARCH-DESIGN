// Initialize Firebase(2)
var firebaseConfig = {
    apiKey: "AIzaSyCuWSe3y07JsZXyvPSWp7bMI4dpplQPR2w",
    authDomain: "l---arch-design.firebaseapp.com",
    databaseURL: "https://l---arch-design.firebaseio.com",
    projectId: "l---arch-design",
    storageBucket: "l---arch-design.appspot.com",
    messagingSenderId: "1042620924809",
    appId: "1:1042620924809:web:8eed806a304781e7c65758",
    measurementId: "G-S46F1TVXF2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //Reference for form collection(3)
  var formMessage = firebase.database().ref("register");
  
  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    var name = document.querySelector('#name').value;
   var email = document.querySelector('#email').value;
    var Subject = document.querySelector('#Subject').value;
    var msg = document.querySelector('#msg').value;
    
    sendMessage(name, email, Subject, msg);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, Subject, msg) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      Subject: Subject,
      msg:  msg,
     
    });
  }