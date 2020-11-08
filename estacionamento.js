function modal_show(md){
    my_modal = window.document.getElementById(md)
    my_modal.style.display = "block"

}

function modal_close(md){
    my_modal = window.document.getElementById(md)
    my_modal.style.display = "none";
}

function vaga_get(){
    var andar = window.document.getElementById("vaga_andar")
    var num = window.document.getElementById("vaga_num")

    andar.innerHTML = '<strong>G3</strong>'
    num.innerHTML = '<strong>32</strong>'

    window.document.getElementById("vaga").style.display = "block"

}

function estacionado(){
    var btn = window.document.getElementById("btn_estacionado")

    if (btn.innerHTML == 'Estacionado!'){
        btn.innerHTML = 'Confirmar Saída'
    }else{
        btn.innerHTML = 'Estacionado!'
    }

}
