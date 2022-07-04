//<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
  function sendEmail(){
    Email.send({
      //secureToken: "8c6113b2-3d76-4357-b896-d133450a0035",
      Host : "smtp.gmail.com",
      Username : "suraj.netacad@gmail.com",
      Password : "73524Idea#",
      //secureToken: " 6a74a525-dea9-4f5c-8ba6-e49b259d1330",
      To : '11baklol2001@gmail.com',
      From : document.getElementById("email").value,
      Subject : "Contact via Portfolio",
      Body : "Name: "+document.getElementById("fname").value + " "+document.getElementById("lname").value
      +"<br> Email: "+document.getElementById("email").value
      +"<br> From: "+document.getElementById("country").value
      +"<br> Subect: <br>"+document.getElementById("subject").value
  }).then(
    message => alert("Message Sent Successfully.")
  );
  }
</script>