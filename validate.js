
let tjek = [] 
const phoneInput = document.querySelector("#phone")
//først tager jeg fat i form, jeg senere kan give den en eventlistener
const form = document.querySelector("form")
//nu adder jeg en eventlistener
form.addEventListener("submit", submitHandler)

console.log(form)

function submitHandler(evt) {
    //sørger for at siden ikke bliver opdateret, når man submitter
    evt.preventDefault()
    //her bruger jeg Formdata objektet til at tage fat i min form, og får alle values ud
    const formdata = new FormData(evt.target)
    //Dette deconstructer alle formdata og sætter den ind i et array 
    const formsvalues = [...formdata];


    //nu kører jeg en foreach som tjekke at de alle er udfyldte
    formsvalues.forEach((data, index) => {
        
        //her tager jeg fat i fail tekst elementet så jeg senere kan style den
        const element = document.querySelector(`#${data[0]}__fail`)

        console.log(element)



        //her tjekker jeg om det overhovedet er et felt der skal valideres
        //hvad at tjkke o det overhovdet har nogen fejl boks

        if (element !== null) {

            //her tjekker jeg om der er skrevet noget i hvert element
            if (data[1] == "") {



                element.textContent = "Du skal skrive noget her"
                element.style.display = "block"
                tjek[index] = false


            } else {
                element.style.display = "none"
                if (data[0] == "email") {
                    console.log(!emailtjek(data[1], element))
                    if (!emailtjek(data[1], element)) {
                        tjek[index] = false
                    }else{
                        tjek[index] = true
                    }
                }else{
                    tjek[index] = true
                }
        
                
            
            }
       
        console.log(tjek)
       
            
        } 








        //her laver jeg specifike validates til de forskellige ting
    })
    
    //her opretter jeg en ny variablel 
    // jeg bruger every array method til at tjekke hele tjek arrayet igennem og returne false, hvis bare
    //en af dem er false
   const nyTjek = tjek.every((element)=>{
    console.log(element)
    if(element !== undefined || element !== null){
        if (element == true){
            return true
        }
    }
    
   })
  
       
    console.log(formsvalues[0])
    if (nyTjek) {
        alert("Hej "+formsvalues[0][1]+", mange tak, du er nu signet op")
    }
}



function emailtjek(email, element) {
    //det her er  en reg ex, der validere email
    const REGEXEMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (REGEXEMAIL.test(email)) {
        return true


    } else {
       
        element.style.display = "block"
        element.textContent = "Din email skal indeholde 'tegn+ @ tegn+ . + tegn  "
        return false
    }
}


//er en funktion til phone, som gør at man kun kan skrive numre
phoneInput.addEventListener("input",numberOnly)
const regEx = /^[a-zA-Z]+$/
function numberOnly(){
val =this.value
valSplit = val.split("")

const valueOutNumber =valSplit.filter((element,index) =>{
    //tjekker om det er et bogstav
if(!regEx.test(element)){
 return element
}
})
//grundet det output vi får array
//skal vi joine det, så der ikke er koamma
this.value = valueOutNumber.join("")

}