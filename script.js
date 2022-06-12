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

const formOutput = document.getElementById('form-data');
const createFormOutput = () => {
  const ids = ['output-name', 'output-email', 'output-house', 'output-family', 'output-subjects',
    'output-evaluation', 'output-obs'];
  for (let id = 0; id < ids.length; id += 1) {
    const setId = ids[id];
    formOutput.appendChild(createNewTag('p', 'id', setId));
  }
};
createFormOutput();

function printName() {
  const nameOutput = document.querySelector('#input-name').value;
  const lNameOutput = document.querySelector('#input-lastname').value;
  const name = document.getElementById('output-name');
  name.innerText = `Nome: ${nameOutput} ${lNameOutput}`;
}

function printEmail() {
  const emailOutput = document.querySelector('#input-email').value;
  const email = document.getElementById('output-email');
  email.innerText = `Email: ${emailOutput}`;
}

function printHouse() {
  const house = document.querySelector('#house').value;
  const outputHouse = document.getElementById('output-house');
  outputHouse.innerText = `Casa: ${house}`;
}

function printFamily() {
  const frontend = document.querySelector('#frontend');
  const backend = document.querySelector('#backend');
  const fullstack = document.querySelector('#fullstack');
  const family = document.getElementById('output-family');
  if (frontend.checked) {
    family.innerText = `Família: ${frontend.value}`;
  } else if (backend.checked) {
    family.innerText = `Família: ${backend.value}`;
  } else if (fullstack.checked) {
    family.innerText = `Família: ${fullstack.value}`;
  }
}

function printSubjects() {
  const subjects = document.querySelectorAll('.subject');
  const outputSubjects = document.getElementById('output-subjects');
  let checked = '';
  for (let subject = 0; subject < subjects.length; subject += 1) {
    const whichSubject = subjects[subject];
    if (whichSubject.checked) {
      checked += `${whichSubject.value}, `;
    }
  }
  const slicedChecked = checked.slice(0, -2);
  outputSubjects.innerText = `Matérias: ${slicedChecked}`;
}

function printEvaluation() {
  const evaluation = document.querySelectorAll('.rate');
  const outputEvaluation = document.getElementById('output-evaluation');
  for (let rate = 0; rate < evaluation.length; rate += 1) {
    const whichRate = evaluation[rate];
    if (whichRate.checked) {
      outputEvaluation.innerText = `Avaliação: ${whichRate.value}`;
    }
  }
}

function printObs() {
  const obs = document.querySelector('#textarea').value;
  const outputObs = document.getElementById('output-obs');
  outputObs.innerText = `Observações: ${obs}`;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const outputLetter = document.querySelector('#form-data');
  const form = document.querySelector('#evaluation-form');
  form.style.display = 'none';
  outputLetter.style.display = 'block';
  printName(); printEmail(); printHouse(); printFamily();
  printSubjects(); printEvaluation(); printObs();
});
