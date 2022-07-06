console.log("Welcome to our travel website");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone = false;
// jquery used for the alert msg
$('#success').hide();
$('#failure').hide();

name.addEventListener('blur', ()=>{
    console.log("name is blurred!");
    let regx = /^[a-zA-Z]([_0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if(regx.test(str)){
        console.log("Your name is valid");
        name.classList.remove('is-invalid');
        validName = true;
    }
    else{
        console.log("Your name is not valid");
        name.classList.add('is-invalid');
        validName = false;
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blurred!");
    let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regx.test(str)){
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log("Your email is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred!");
    let regx = /^([0-9]){10}$/;
    let str = phone.value;
    if(regx.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{ 
    e.preventDefault();
    console.log("You clicked on Submit");

    //Submit your form here
    if(validEmail && validName && validPhone){
        console.log("Submitting the form!");
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');

        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();

    }
    else{
        console.log("Some error are in the fields. Try again");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }

})