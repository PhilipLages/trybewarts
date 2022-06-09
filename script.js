const formBtn = document.getElementById('loginBtn');
const emailLogin = document.getElementById('email');
const password = document.getElementById('senha');

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

agreement.addEventListener('click', (e) => { submitBtn.disabled = !e.target.checked; });

const textArea = document.getElementById('textarea');
textArea.addEventListener('input', () => {
  const MaxCaracter = textArea.maxLength;
  const typing = textArea.value.length;
  document.getElementById('counter').innerText = `Caracteres restantes: ${MaxCaracter - typing}`;
});

const createFormOutput = () => {
  const ids = ['output-name', 'output-email', 'output-house', 'output-family', 'output-subjects',
    'output-evaluation', 'output-obs'];
  for (let id = 0; id < ids.length; id += 1) {
    const formOutput = document.getElementById('form-data');
    const setId = ids[id];
    formOutput.appendChild(createNewTag('p', 'id', setId));
  }
};
createFormOutput();

// const house = document.getElementById('output-house');
// const family = document.getElementById('output-family');
// const subjects = document.getElementById('output-subjects');
// const evaluation = document.getElementById('output-evaluation');
// const obs = document.getElementById('output-obs');

// const showFormOutput = () => {

//   const inputHouse = document.querySelector('#house').value;
//   const frontend = document.querySelector('#frontend').value;
//   const backend = document.querySelector('#backend').value;
//   const fullstack = document.querySelector('#fullstack').value;
//   const backend = document.querySelector('#backend').value;
// }

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.querySelector('#evaluation-form');
  form.style.display = 'none';
  const nameOutput = document.querySelector('#input-name').value;
  const lNameOutput = document.querySelector('#input-lastname').value;
  const name = document.getElementById('output-name');
  name.innerText = `Nome: -${nameOutput}- -${lNameOutput}-`;
  const emailOutput = document.querySelector('#input-email').value;
  const email = document.getElementById('output-email');
  email.innerText = `Email: -${emailOutput}-`;
});
