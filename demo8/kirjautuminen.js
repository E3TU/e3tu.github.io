document.addEventListener("DOMContentLoaded", onkoKirjautunut);
function onkoKirjautunut(){
    let kirjautunut = "kyllä";
    if(localStorage.getItem("kirjautunut") === "kyllä"){
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjaudu_nappi").style.display = "none";
        document.getElementById("nimi").style.display = "none";
    }
    if(localStorage.getItem("kirjautunut") === null){
        document.getElementById("kirjauduulos").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä");
}
function kirjaudu_ulos(){
    localStorage.clear();
}