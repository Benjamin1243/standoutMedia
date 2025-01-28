//først tager jeg fat i form, jeg senere kan give den en eventlistener
const form  = document.querySelector("form")
//nu adder jeg en eventlistener
form.addEventListener("submit", submitHandler)

console.log(form)

function submitHandler(evt){
//sørger for at siden ikke bliver opdateret, når man submitter
evt.preventDefault()
const formdata = new FormData(evt.target)
console.log(...formdata)
}