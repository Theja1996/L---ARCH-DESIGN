// Initialize Firebase(2)
var firebaseConfig = {
  apiKey: "AIzaSyALbPiQwhXSZIX0UHJtwFyAe6FsWTMyhQQ",
  authDomain: "l---arch-design-eca6c.firebaseapp.com",
  databaseURL: "https://l---arch-design-eca6c.firebaseio.com",
  projectId: "l---arch-design-eca6c",
  storageBucket: "l---arch-design-eca6c.appspot.com",
  messagingSenderId: "942858239914",
  appId: "1:942858239914:web:24f64267280c6bafbc35d3",
  measurementId: "G-7QDB2ND5S9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  var messagesRef = firebase.database().ref('message');

document.getElementById('registrationform').addEventListener('submit', formSubmit);


function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    var name = getInputVal('#name').value;
   var email = getInputVal('#email').value;
    var subject = getInputVal('#subject').value;
    var msg = getInputVal('#msg').value;
  

    saveMessage(name, email, subject, msg);



document.querySelector('.alert').style.display = 'block';

setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);


  document.getElementById('registrationform').reset();
}


function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, subject, msg) {
    let newmessageRef = messageRef.push();
    newmessageRef.set({
      name: name,
      email: email,
      subject: subject,
      msg:  msg,
     
    });
  }