function bukaPelan(tempat){

document.getElementById("homePage").style.display="none";

document.getElementById("mapPage").style.display="block";

document.getElementById("tajukDestinasi").innerHTML=
"Destinasi : " + tempat;

}

function kembali(){

document.getElementById("mapPage").style.display="none";

document.getElementById("homePage").style.display="flex";

}
