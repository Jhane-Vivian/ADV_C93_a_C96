const firebaseConfig = {
  apiKey: "AIzaSyDyeWmsdW4ARmbJ75F3lzx-AfrAjo2XFZc",
  authDomain: "testebernardo-bed9d.firebaseapp.com",
  databaseURL: "https://testebernardo-bed9d-default-rtdb.firebaseio.com",
  projectId: "testebernardo-bed9d",
  storageBucket: "testebernardo-bed9d.appspot.com",
  messagingSenderId: "1083122845141",
  appId: "1:1083122845141:web:a3010d630bd1b0711ae95c"
};

firebase.initializeApp(firebaseConfig);



userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
function addRoom()
{
  roomName = document.getElementById("roomName").value;
//ref adiciona uma pasta principal no firebase child nomeia esta pasta
  firebase.database().ref("/").child(roomName).update({
    kwiterrbot : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
