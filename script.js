const formBtn = document.getElementById('loginBtn');
const email = document.getElementById('email');
const password = document.getElementById('senha');

function checkLogin(e) {
  e.preventDefault();
  const emailValue = 'tryber@teste.com';
  const passwordValue = '123456';

  if (email.value === emailValue && password.value === passwordValue) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

formBtn.addEventListener('click', checkLogin);

const agreement = document.getElementById('agreement');

agreement.addEventListener('click', (e) => {
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.disabled = !e.target.checked;
});

let textArea = document.getElementById("textarea");

textArea.addEventListener("input", function(){
  let MaxCaracter = textArea.maxLength;
  let typing = textArea.value.length;
  document.getElementById("counter").innerHTML = (MaxCaracter - typing);
});

