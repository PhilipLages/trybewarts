const formBtn = document.getElementById('loginBtn');
const emailLogin = document.getElementById('email');
const password = document.getElementById('senha');
const mainData = document.getElementById('mainData');

function createNewTag(tag, element, value) {
  const createTag = document.createElement(tag);
  createTag.setAttribute(element, value);
  return createTag;
}

function checkLogin(e) {
  e.preventDefault();
  const emailValue = 'tryber@teste.com';
  const passwordValue = '123456';

  if (emailLogin.value === emailValue && password.value === passwordValue) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

formBtn.addEventListener('click', checkLogin);

const agreement = document.getElementById('agreement');
const submitBtn = document.querySelector('#submit-btn');

agreement.addEventListener('click', (e) => submitBtn.disabled = !e.target.checked);

const createFormOutput = () => {
  mainData.appendChild(createNewTag('form', 'id', 'form-data'));
  const formOutput = document.getElementById('form-data');
  formOutput.appendChild(createNewTag('p', 'id', 'form-name'));
  formOutput.appendChild(createNewTag('p', 'id', 'form-email'));
  formOutput.appendChild(createNewTag('p', 'id', 'form-house'));
  formOutput.appendChild(createNewTag('p', 'id', 'form-family'));
  formOutput.appendChild(createNewTag('p', 'id', 'form-subjects'));
  formOutput.appendChild(createNewTag('p', 'id', 'form-evaluation'));
  formOutput.appendChild(createNewTag('p', 'id', 'form-obs'));
};
createFormOutput();


// const email = document.getElementById('form-email');
// const house = document.getElementById('form-house');
// const family = document.getElementById('form-family');
// const subjects = document.getElementById('form-subjects');
// const evaluation = document.getElementById('form-evaluation');
// const obs = document.getElementById('form-obs');

// const showFormOutput = () => {
//   const inputName = document.querySelector('#input-name').value;
//   const inputLName = document.querySelector('#input-lastname').value;
//   const inputEmail = document.querySelector('#input-email').value;
//   const inputHouse = document.querySelector('#house').value;
//   const frontend = document.querySelector('#frontend').value;
//   const backend = document.querySelector('#backend').value;
//   const fullstack = document.querySelector('#fullstack').value;
//   const backend = document.querySelector('#backend').value;
// }

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('form-name');
  const form = document.querySelector('#evaluation-form')
  form.innerHTML = ' ';
  const formData = submitBtn.formTarget;
  name.innerText = formData;
});
