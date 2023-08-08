import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = "feedback-form-state";
const formEl = document.querySelector("form")
const inputEl = document.querySelector("input")
const messageEl = document.querySelector("textarea")
const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)) || {
  email: "",
  message: ""
} ;

fillsForm ()

document.addEventListener("input", throttle(inputHandler, 500))
formEl.addEventListener('submit', submitHandler)

function fillsForm (){
  inputEl.value = formData.email;
  messageEl.value = formData.message;
}

function inputHandler (evt) {
  formData[evt.target.name] = evt.target.value
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData))
}

function submitHandler (evt) {
  evt.preventDefault();
  console.log(formData)
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE)
}



