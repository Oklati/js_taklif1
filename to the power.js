function power(){
    const base= prompt("enter base number") ;
    const power= prompt("enter power number") ;
    console.log(base ** power) ;
}

const buttonPower=document.querySelector(".btn-power")
buttonPower.addEventListener("click",function(){
    power() ;
})