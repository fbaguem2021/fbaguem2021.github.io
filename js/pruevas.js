const btnGuardar    = document.getElementById("guardar");
const btnBuscar     = document.getElementById("buscar");
const success       = document.getElementById("success");
const info          = document.getElementById("info");
const danger        = document.getElementById("danger");
const cookieguardar = document.getElementById("cookieguardar");
const cookiebuscar  = document.getElementById("cookiebuscar");

btnGuardar.onclick = function() {
    if (cookieguardar.value == "") {
        alert("primero introduce un valor!");
    } else {

    }
}
btnBuscar.onclick = function() {
    if (cookiebuscar.value == "") {
        alert("primero introduce un valor!");
    } else {
        let cookie = RecuperarCookie(cookiebuscar.value);
        if (cookie != "") {
            info.style.display = block;
        }
    }
}

function EnmagatzemaCookie() {
 	var cvalue = prompt("Please enter your name:", "");
  if (cvalue != null && cvalue != "") {
    var exdays = 10;
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "nombre" + "=" + cvalue + ";" + expires + ";path=/";
  } else {
  	console.log("No name was written");
  }
}

function RecuperarCookie(cookiename) {
    let name = cookiename + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookiedata = decodedCookie.split(";");
    for (let i = 0; i < cookiedata.length; i++) {
        let cookie = cookiedata[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length)
        }
    }
    return "";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//checkCookie();