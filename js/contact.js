function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "palashpatil9000@gmail.com",
        Password : "Palash@999@",
        To : 'paltilpd_1@rknec.edu',
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "Name: " + document.getElementById("name").value
              + "<br> Email: " + document.getElementById("email").value
              + "<br> Phone No: " + document.getElementById("phone").value
              + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}