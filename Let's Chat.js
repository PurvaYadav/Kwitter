function adduser() {
   user_name = document.getElementById("user_name").value;
   
   localStorage.setItem("user_name",user_name);
   
   window.location="Let's Chat_room.html";
}

function Logout() {
   window.location="index.html";
}

