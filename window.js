let closeW = document.getElementById("secClose");
function funcCloseWindow() {
    closeW.classList.add("animete2");
    setTimeout(()=>{ closeW.style.display = "none";},200)
   
}

function opnWindow() {
    document.getElementById("secClose").style.display = "flex";
    closeW.classList.remove("animete2");
    closeW.classList.add("animete1");
}