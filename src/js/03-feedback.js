import throttle from 'lodash.throttle';
import '../css/03-feedback.css'
// const formData={}; 
const refs={ 
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input[type=email]"),
     message: document.querySelector("textarea"),}


     const savedObject=localStorage.getItem("feedback-form-state");
    const parsedObject = JSON.parse(savedObject)||{};
    if (savedObject){ 
    refs.email.value=parsedObject.email??"";
    refs.message.value=parsedObject.message??"";
}

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(parsedObject);
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(e=>{
    parsedObject[e.target.name]=e.target.value;
    console.log(parsedObject);
    localStorage.setItem("feedback-form-state", JSON.stringify(parsedObject))
}, 1000));






