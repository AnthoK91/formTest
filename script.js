const password = document.querySelector("#pass");
const passDiv = document.querySelector("#password")
const passConf = document.querySelector("#passConf");
const submit = document.querySelector("#submit");
const passwordError = document.createElement('div');



submit.addEventListener("click", (event) => {
    console.log('hello')
    if(password.value != passConf.value) {
        console.log('true')
        password.classList.toggle('input:invalid');
        passwordError.textContent = 'Passwords must match'
        passwordError.classList = 'passMatch';
        passDiv.appendChild(passwordError);
    }
})
