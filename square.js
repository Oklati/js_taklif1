function pow2(){
    const number = prompt("enter number") ;
    const ans = number * number ;
    console.log(ans) ;
}
const buttonSquare=document.querySelector(".btn-square")
buttonSquare.addEventListener("click",function(){
    pow2() ;
})