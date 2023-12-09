// Step 1: Add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address from the input field
    const emailField = document.getElementById('user-email');
    // Always remember to use .value to get the text from input
    const email = emailField.value;
    // Step 3: to get the password   
    // a. set id on the html
    // b. get the element;
    // c. get the value from element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Danger: do not verfiy email-password on the client side

    if(email == 'salman@khan.com' && password == 'secret')
    {
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid user, your password is wrong!!!');
    }
})