
let formulario2 = document.getElementById("form2")
let msgUser = document.getElementById("msgUser")
let msgEmail = document.getElementById("msgEmail")
let userStr2, emailStr2, err 

formulario2.addEventListener("submit", function(event) {
    err = 0 
    msgUser.innerText = msgEmail.innerText = ""
    
    userStr2 = document.getElementById("user2")
    if (userStr2.value.length <= 3 || userStr2.value == false) { 
        msgUser.innerText = "* Nome e sobrenome inválidos..."
        err++  
    }

    emailStr2 = document.getElementById("email2").value;
    if (emailStr2.indexOf("@") < 0) { 
       msgEmail.innerText = "* E-mail inválido..."
       err++
    } 

    if (!err) { 
        formulario2.action="mailto:seuemail@dominio.com";
        formulario2.method="post";
        formulario2.enctype="text/plain";
    } 

    else {
        event.preventDefault()
    }   
}) 




dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

now = new Date
document.getElementById('dia').textContent="Hoje é " + dayName[now.getDay()] + ", " + now.getDate () + " de " + monName [now.getMonth()] + " de " + now.getFullYear() + "."



function time()
{
today=new Date();
h=zeros(today.getHours());
m=zeros(today.getMinutes());
s=zeros(today.getSeconds());
document.getElementById('hora').textContent=h+":"+m+":"+s;
setTimeout('time()',500);
}

function zeros(i) {
    if (i < 10) {
      return "0" + i;
    } else {
      return i;
    }
  }



  function clock() {
    const now = new Date();
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
  
    // Hour marks
    ctx.save();
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();
  
    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
  
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours() % 12;
  
    ctx.fillStyle = "black";
  
    // Write image description
    canvas.innerText = `The time is: ${hr}:${min}`;
  
    // Write Hours
    ctx.save();
    ctx.rotate(
      (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    );
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
  
    // Write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
  
    // Write seconds
    ctx.save();
    ctx.rotate((sec * Math.PI) / 30);
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = "#325FA2";
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
  
    ctx.restore();
  
    window.requestAnimationFrame(clock);
  }
  
  window.requestAnimationFrame(clock);