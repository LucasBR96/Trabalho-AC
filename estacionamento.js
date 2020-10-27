var modal = document.getElementById("popup");

var btn = document.getElementById("popup_local");

btn.onclick = function() {
  modal.style.display = "block";
}

function modal_close(){
    modal.style.display = "none";
}
