
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let Calc = document.getElementById("Calc")


Calc.onclick = function() {
    console.log(p1.value)
    console.log(p2.value)

    let media = (parseFloat(p1.value) + parseFloat(p2.value)) / 2
    console.log(media)

    switch (true) {
        case media >= 9.5 && media <= 10:
            mediaNotas.innerHTML = "Excelente - nota: " + (media.toFixed(2))
            break;

        case media >= 8.5 && media < 9.5:
            mediaNotas.innerHTML = "Ótimo - nota: " + (media.toFixed(2))
            break;

        case media >= 7.5 && media < 8.5:
            mediaNotas.innerHTML = "Bom - nota: " + (media.toFixed(2))
            break;

        case media >= 6.0 && media < 7.5:
            mediaNotas.innerHTML = "Regular - nota: " + (media.toFixed(2))
            break;

        case media < 6.0:
            mediaNotas.innerHTML = "Insuficiente - nota: " + (media.toFixed(2))
            break;

        default:
            mediaNotas.innerHTML = "Erro" 
            break;
    }





}