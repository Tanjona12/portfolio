document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

emailjs.init("1D9E7hfXYzvbNwOTK");

    var templateParams = {
        from_name: document.getElementById("name").value,
        to_name: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_731zoml', 'template_y3r4rcy', templateParams)
        .then(function(response) {
           console.log('Email sent successfully!', response);
           alert("Email envoyer");
        }, function(error) {
           console.error('Error sending email:', error);
        });
});
