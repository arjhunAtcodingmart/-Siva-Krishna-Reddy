var modal = document.getElementById("myModalSignup");

var modalLogin = document.getElementById("myModalLogin");

var Signupbtn = document.getElementById("mySignUpBtn");

var Loginbtn = document.getElementById("myLoginBtn");

var span = document.getElementsByClassName("close")[0];
var spanl = document.getElementsByClassName("closel")[0];

Signupbtn.onclick = function() {
  modalLogin.style.display = "none";
  modal.style.display = "block";
};
Loginbtn.onclick = function() {
  modal.style.display = "none";
  modalLogin.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

spanl.onclick = function() {
  modalLogin.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  event.preventDefault();
};

function signup() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let repassword = document.getElementById("repassword").value;
  let tasks;
  if (localStorage.getItem("users") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("users"));
  }
  //   console.log(username, password);
  if (password == repassword) {
    tasks.push({ usr: username, pass: password });
    localStorage.setItem("users", JSON.stringify(tasks));
    alert("Signup Successful!");
  } else {
    alert("password didnt match!!");
  }

  username = "";
  password = "";
  repassword = "";
  modal.style.display = "none";
}

function login() {
  var usernamel = document.getElementById("usernameLogin").value;
  var passwordl = document.getElementById("passwordlogin").value;
  //   console.log(username);
  let tasks;
  if (localStorage.getItem("users") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("users"));
  }

  console.log(tasks.length);
  let userExit = false;
  let Valid = false;
  var i = 0;
  for (i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    if (tasks[i].usr == usernamel) {
      if (tasks[i].pass == passwordl) {
        userExit = true;
        Valid = true;
        alert("login Successful!!");
        window.location.assign("https://nodejs.org");
        break;
      } else {
        userExit = true;
        alert("Not Valid User!! or Wrong Password");
        break;
      }
    }
    if (!Valid && !userExit) {
      alert("please Register ");
    }
  }

  //   tasks.forEach(item => {
  //     if (task[i].usr == username) {
  //       if (task[i].pass == password) {
  //         alert("login Successful!!");
  //         window.location.assign("https://nodejs.org");
  //         return;
  //       } else {
  //         alert("Not Valid User!! or Wrong Password");
  //         break;
  //       }
  //     } else {
  //       alert("Invalid");
  //       break;
  //     }
  //   });
  usernamel = "";
  passwordl = "";

  if (!userExit) {
    alert("Please Register");
  }
  modalLogin.style.display = "none";
}
