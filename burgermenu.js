const bugermenuButton =document.querySelector(".burgerMenuButton")
const navBar =document.querySelector(".navigation")
console.log(bugermenuButton)
//nu adder jeg en eventlistener
bugermenuButton.addEventListener("click", burgermenu)


function burgermenu(){
    console.log(navBar.classList[1])
    if(navBar.classList[1] !== undefined){
        navBar.classList.toggle("navigation--foldout")
    }else{
        navBar.classList.toggle("navigation--foldout")
    }
    if(bugermenuButton.classList[1] == "fa-bars"){
        bugermenuButton.classList.toggle("fa-bars")
        bugermenuButton.classList.toggle("fa-x")

    }else{
        bugermenuButton.classList.toggle("fa-bars")
        bugermenuButton.classList.toggle("fa-x")

    }
   
   
   

}

