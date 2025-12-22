function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

window.addEventListener("scroll",()=>{
  document.getElementById("header")
    .classList.toggle("shrink",window.scrollY>80);
});

