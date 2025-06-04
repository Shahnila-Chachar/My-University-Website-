let nameError = document.getElementById('name_Error');
let phoneError = document.getElementById('phone_Error');
let emailError = document.getElementById('email_Error');
let passwordError = document.getElementById('password_Error');
let messageError = document.getElementById('message_Error');
let submitError = document.getElementById('submit_Error');



function validateName() {
    let name = document.getElementById('myName').value;
    if (name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validatePhone() {
    let phone = document.getElementById('myPhone').value;
    
    if (phone.length == 0){
        phoneError.innerHTML = "Phone no. is required";
        return false;
    }
    if (phone.length !== 10){
        phoneError.innerHTML = "Phone must be 10 digits";
        return false;
    }
    //if (!phone.match(/^[0-9]{10}*$/)){
     //   phoneError.innerHTML = "Only digits";return false;
//}
    if (!/^\d{10}$/.test(phone)) {
    phoneError.innerHTML = "Invalid Phone";
    return false;
}
    phoneError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validateEmail() {
    let email = document.getElementById('myEmail').value;
    
    if (email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}/)){
       emailError.innerHTML = "Invalid Email";
        return false;
}
    
    emailError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validatePassword() {
    let password = document.getElementById('myPassword').value;

    if (password.length < 8) {
        passwordError.innerHTML = "Minimum 8 characters";
        return false;
    }

    
    let strongPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPattern.test(password)) {
        passwordError.innerHTML = "choose strong password";
        return false;
    }

    passwordError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}



function validateMessage() {
    let message = document.getElementById('myMessage').value;
    let required = 30;
    let left = required - message.length;
    
    if (left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateMessage()){
    submitError.style.display = "block";
    submitError.innerHTML = 'Please fill all input fields';
        setTimeout(function(){
            submitError.style.display = "none";
        }, 3000)
        return false;
    }
    if (validateName() && validatePhone() && validateEmail() && validatePassword() && validateMessage()){
    submitError.style.display = "block";
        submitError.style.color = "green";
    submitError.innerHTML = 'Form Submitted Successfully';
        return true;
    }
}