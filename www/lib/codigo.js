// This is a JavaScript file

var click = 0;
function Checar(letra)
{

  var caracter = letra.innerHTML;

  if(click == 0)
  {
    document.getElementById("texto").innerHTML = "";

    document.getElementById("texto").insertAdjacentHTML("beforeend",caracter);
    click++;
    //navigator.notification.beep(1);
    
  }
  else
  {
    document.getElementById("texto").insertAdjacentHTML("beforeend",caracter);
  }
  
}

function Final()
{
  var resultado = document.getElementById("texto").innerHTML;
  if(resultado == "ARMA")
  {
    //navigator.notification.alert("Parabéns você ganhou!", null,["Vitoria"], ["ok"]);
    document.getElementById("texto").innerHTML = "";

    document.getElementById("texto").insertAdjacentHTML("afterbegin","ACERTOU!!");
  }
  else
  {
    document.getElementById("texto").innerHTML = "";

    document.getElementById("texto").insertAdjacentHTML("afterbegin","ERROU!!");
    navigator.vibrate(2000);
  }
}

function Reset()
{
  click = 0;
  document.getElementById("texto").innerHTML = "";
}