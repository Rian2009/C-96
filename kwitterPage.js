const firebaseConfig = {
  apiKey: "AIzaSyDCZ9rJxWanmHLlY7vNpCTpAid7TvEguhU",
  authDomain: "whatsapp2-dcd3c.firebaseapp.com",
  databaseURL: "https://whatsapp2-dcd3c-default-rtdb.firebaseio.com",
  projectId: "whatsapp2-dcd3c",
  storageBucket: "whatsapp2-dcd3c.appspot.com",
  messagingSenderId: "359749076264",
  appId: "1:359749076264:web:a944f57cdac59788f4bc1d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);

    userName = localStorage.getItem("userName");
    console.log(userName);
    //document.getElementById("userName").innerHTML = "Bem-vindo(a)" + userName + "!";
 
  function addRoom()
  {
    roomName = document.getElementById("roomName").value;
  
    firebase.database().ref("/").child(roomName).update({
      purpose : "adicionar nome de sala"
    });
  
      localStorage.setItem("roomName", roomName);
      
      window.location = "whatsappRoom.html";
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
  
  function logout() 
  {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
      window.location = "index.html";
  }
  
  function send() 
  {
    msg= document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
      name:userName,
      message:msg,
      like:0
    })

    document.getElementById("msg").value = "";
  }