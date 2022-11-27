var contador_de_clicks = 0

Number(contador_de_clicks)

function contarClick(){
    contador_de_clicks++
    atualizar_documento(contador_de_clicks)
}

function atualizar_documento(val){
    document.getElementById("display").innerText = `Clicou ${val} vezes!`

}

function resetarContador(){
    contador_de_clicks = 0
    atualizar_documento(contador_de_clicks)
}