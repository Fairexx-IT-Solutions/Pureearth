// let Navshow = document.getElementsByClassName("nav-show");
// let Navhide = document.getElementsByClassName("nav-hide");
// let NavItems = document.getElementsByClassName("myNav")

// function showMenu() {
//   var x = document.getElementsByClassName("myNav")[0];
//   // var y = document.getElementById("nav-show");
//   x.classList.toggle("mynavshow")
// }
let p = 2;
let kad = document.getElementsByClassName("mission-card")[0];
let icon = document.getElementsByClassName("mission-img")[0]; 
kad.addEventListener("onmouseover", changeBackground);
function changeBackground(){
    icon.classList.toggle('mission-img2');
    console.log(p);
    
};

// function showMenu() {
//       var x = document.getElementsByClassName("mission-img")[0];
//       // var y = document.getElementById("nav-show");
//       x.classList.toggle("mission-img2")
//     };

