let firstName = document.getElementById('firstName')
let lastName  = document.getElementById('lastName')
let clientEmail  = document.getElementById('clientEmail')
let emailSubject  = document.getElementById('emailSubject')
let clientMessage = document.getElementById('message')

document.getElementById('sendMail').addEventListener('click', sendMail)

function sendMail(params){

    var templateParams = {
        from_name: `${firstName.value}  ${lastName.value}`,
        sender_email: clientEmail.value,
        subject: emailSubject.value,
        message: clientMessage.value,
    };
    emailjs.send('service_2ut9s5k', 'template_himc6hk', templateParams)
        .then(function(response) {
            alert('Email Successfully  Sent')
            console.log('SUCCESS!', response.status, response.text); 
        },
         function(error) {
            alert('Email not Sent')
            console.log('FAILED...', error);
        }),
        setTimeout(() => {
            // [firstName.value, lastName.value, clientEmail.value, clientMessage.value, emailSubject.value] = Array(5).fill('')
            window.location.reload();
          }, 3000)    
}







 



