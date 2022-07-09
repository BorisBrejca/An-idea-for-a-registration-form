const signIn = document.querySelector('.signIn');
const signUp = document.querySelector('.signUp');
const formBox = document.querySelector('.form-block');
const body = document.body;

signUp.addEventListener('click', function () {
    formBox.classList.add('active');
    body.classList.add('active');
})

signIn.addEventListener('click', function () {
    formBox.classList.remove('active');
    body.classList.remove('active');
})