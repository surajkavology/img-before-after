const imgCont = document.querySelector(".img-container")
const afterImg = document.querySelector(".after-img")

imgCont.addEventListener("mousemove", function(e){
// console.log(e.clientX)
afterImg.style.width = e.clientX - 50 + "px";
});