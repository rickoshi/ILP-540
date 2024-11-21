
let alt = document.getElementById("alt");
let pes = document.getElementById("pes");
let Calc = document.getElementById("Calc");

Calc.onclick = function () {
    console.log(alt.value)
    console.log(pes.value)

    let imc = pes.value / (alt.value ** 2)
    console.log(imc)
    
    switch (true) {
        case imc < 18.5:
            // console.log("Abaixo do peso")
            imcCalc.innerHTML = "Seu IMC é " + (imc.toFixed(2)) + " <br> Abaixo do peso";
            break;

        case imc >= 18.6 && imc < 24.9:
            // console.log("Peso ideal (Parabéns)")
            imcCalc.innerHTML = "Seu IMC é " + (imc.toFixed(2)) + " <br> Peso ideal (Parabéns)";
            break;

        case imc >= 25 && imc < 29.9:
            // console.log("Levemente acima do peso")
            imcCalc.innerHTML = "Seu IMC é " + (imc.toFixed(2))+ " <br> Levemente acima do peso";
            break;

        case imc >= 30 && imc < 34.9:
            // console.log("Obesidade grau I")
            imcCalc.innerHTML = "Seu IMC é " + (imc.toFixed(2))+ " <br> Obesidade grau I";
            break;

        case imc >= 35 && imc < 39.9:
            // console.log("Obesidade grau II (severa)")
            imcCalc.innerHTML = "Seu IMC é " + (imc.toFixed(2))+ " <br> Obesidade grau II (severa)";
            break;

        case imc >= 40:
            // console.log("Obesidade grau III (mórbida)")
            imcCalc.innerHTML = "Seu IMC é " + (imc.toFixed(2))+ " <br> Obesidade grau III (mórbida)";
            break;

        default:
            console.log("Erro")
            break;
    }
}