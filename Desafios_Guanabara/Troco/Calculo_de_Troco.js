function calcular(x, y, z){
    x = prompt('O que você comprou?')
    y = Number(prompt(`Qual o valor do produto ${x}`))
    z = Number(prompt(`Quanto você usou para pagar ${x}?`))
    alert(`Você comprou um ${x}, que custou R$${y}. Você deu R$${z} para pagar, o seu troco é R$${z-y}`)
}