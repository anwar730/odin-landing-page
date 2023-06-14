const menuBtn=document.getElementsByClassName("fa-bars")[0]
const navLinks=document.getElementsByClassName("navlinks")[0]
// console.log(menuBtn)
menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active")
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }