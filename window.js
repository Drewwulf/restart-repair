let closeW = document.getElementById("secClose");
function funcCloseWindow() {
    closeW.classList.add("animete2");
    setTimeout(()=>{ closeW.style.display = "none";},200)
   
}