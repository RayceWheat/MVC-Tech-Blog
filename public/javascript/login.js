async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('the button as clicked');
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);


async function signUpInsteadFormHandler(event) {
    event.preventDefault();
    
    if (event) {
        document.location.replace('/signup');
    }
   
}

document.querySelector('#sign-up').addEventListener('click', signUpInsteadFormHandler);
