$(document).ready(function() {
    $("#loginForm").submit(function(event) {
      event.preventDefault();
      var username = $("#username").val();
      var password = $("#password").val();
      if (username === "admin" && password === "password") {
        console.log("yo");
        window.location.href = "/pages/home.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  });
  