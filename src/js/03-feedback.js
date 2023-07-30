import throttle from 'lodash.throttle';
import '../css/03-feedback.css'
const formData={}; 
const refs={ 
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input[type=email]"),
     message: document.querySelector("textarea"),}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(e=>{
    formData[e.target.name]=e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 1000));

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}


const savedObject=localStorage.getItem("feedback-form-state");
    const parsedObject = JSON.parse(savedObject);
   if (savedObject){ 
  refs.email.value=parsedObject.email;
  refs.message.value=parsedObject.message;}
