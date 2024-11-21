

dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

now = new Date()
document.getElementById('dia').textContent= periodo() + "! " + "Hoje é " + dayName[now.getDay()] + ", " + now.getDate () + " de " + monName [now.getMonth()] + " de " + now.getFullYear() + "- " + zeros(now.getHours()) + ":" + zeros(now.getMinutes()) + "hs."       

function periodo() {
switch (true) {
    case now.getHours() >= 0 && now.getHours() < 12:
        return "Bom dia"
        break;

    case now.getHours() >= 12 && now.getHours() < 18:
        return "Boa Tarde"
        break;

    case now.getHours() >= 18 && now.getHours() < 0:
        return "Boa Noite"
        break;

    default: return "Boa semana"
        break;
}
}

function time()
{
today=new Date();
h=zeros(today.getHours());
m=zeros(today.getMinutes());
s=zeros(today.getSeconds());
setTimeout('time()',500);
}

function zeros(i) {
    if (i < 10) {
      return "0" + i;
    } else {
      return i;
    }
  }