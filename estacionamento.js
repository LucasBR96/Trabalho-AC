var modal = document.getElementById("popup");

function modal_show(lugar){
    var par = window.document.getElementById("local");
    par.innerHTML = `Você está em: ${lugar}?`
    modal.style.display = "block";
}

function modal_close(){
    modal.style.display = "none";
}
