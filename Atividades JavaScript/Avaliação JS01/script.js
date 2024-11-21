
let hoje = new(Date)

let ferias = parseInt((new Date("06/30/2023") - hoje) /1000 /60 /60 /24)
let niver = parseInt((new Date("08/11/2023") - hoje) /1000 /60 /60 /24)

mostraFerias.innerHTML = "Faltam " + (ferias) + " dias para as Férias" 
mostraNiver.textContent = "Faltam " + (niver) + " dias para meu aniversário"

