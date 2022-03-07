document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    let kirjautunut = "kyllä";
    let kirjautunut2 = "ei";
    if(localStorage.getItem("kirjautunut") === "kyllä"){
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
    }
    if(localStorage.getItem("kirjautunut") === "ei"){
        document.getElementById("kirjauduulos").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä");
}
function kirjaudu_ulos(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut2", "ei");
}