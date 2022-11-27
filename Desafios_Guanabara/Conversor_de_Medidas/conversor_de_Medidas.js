function converter(){
    var metros
    var Km
    var Hm
    var Dam
    var dm
    var cm
    var mm
    metros = Number(prompt('Informe uma medida em metros'))
    Km = Number(metros / 1000)
    Hm = Number(metros / 100)
    Dam = Number(metros / 10)
    dm = Number(metros * 10)
    cm = Number(metros * 100)
    mm = Number(metros * 1000)
    document.getElementById('Km').innerText += `A medida em Km é: ${Km} Km`
    document.getElementById('Hm').innerText += `A medida em Hm é: ${Hm} Hm`
    document.getElementById('Dam').innerText += `A medida em Dam é: ${Dam} Dam`
    document.getElementById('dm').innerText += `A medida em dm é: ${dm} dm`
    document.getElementById('cm').innerText += `A medida em cm é: ${cm} cm`
    document.getElementById('mm').innerText += `A medida em mm é: ${mm} mm`
}