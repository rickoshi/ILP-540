
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