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



username = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
function sand(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
    name:username,
    manssagem:msg,
    like:0
    });
    document.getElementById("msg").value ="";
}
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
        window.location = "index.html";
    }
    function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;
    
    
    //Início do código
    console.log(firebaseMessageId);
    console.log(messageData);
    name=messageData['name'];
    message=messageData['manssagem'];
    like=messageData['like'];
        nameWithTag="<h4> "+name+"<img class='user_tick'src='tick.png'></h4>";
        messageWithTag="<h4 class='message_h4'>"+message+"</h4>";
        like_button="<button class='btn btn-warning' id=" +firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
        spanWithTag="<span class='glyphicon glyphicon-thumbs-up'>like"+like+"</span></button>";

        row=nameWithTag+messageWithTag+like_button+spanWithTag;
        document.getElementById("output").innerHTML+=row;
    //Fim do código
     } });  }); }
    getData();

    function updateLike(messageId){
        console.log("botão like pressionado -" + messageId);
        buttonId=messageId;
        like=document.getElementById(buttonId).value;
        update_like=Number(like)+1;
        console.log(update_like);
        firebase.database().ref(roomName).child(messageId).update({
            like:update_like
        });
    }