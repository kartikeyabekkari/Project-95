var firebaseConfig = {
    apiKey: "AIzaSyDSSYKncO8NP26zq4JoxiFcnD-McujD7Pw",
    authDomain: "practice-b4fe3.firebaseapp.com",
    databaseURL: "https://practice-b4fe3-default-rtdb.firebaseio.com",
    projectId: "practice-b4fe3",
    storageBucket: "practice-b4fe3.appspot.com",
    messagingSenderId: "669884842564",
    appId: "1:669884842564:web:dd45b7dbcbb3596fc07211"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = 'Room_names +' onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}