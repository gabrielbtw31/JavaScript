document.write("<h3>Més gran</h3>")

var n1 = prompt("Escriu un número");
var n2 = prompt("Escriu un altre número");
if (n1 > n2) {
document.write(n1);
} else if (n2 > n1) {
document.write(n2);
}
document.write("<h3>Mes petit</h3>")

if (n1 < n2) {
document.write(n1);
} else if (n2 < n1) {
document.write(n2);
}

document.write("<h3>Son iguals</h3>")
if (n1 == n2) {
document.write(n1+ " es igual a " +n2);
}


document.write("<h3>Taula de multiplicar corresponent</h3>")

var y = window.prompt("¿Quina taula de multiplicar vols generar?")
var z = 0;

 for (z = 1; z <= 10; z++){
	variable = y * z;
        document.write(+y+" x "+z+" = "+ variable + "<br>");
}

document.write("<h3>Presentació</h3>")

var n3 = prompt("Introdueix el nom");
var n4 = prompt("Introdueix l'edat");
var n5 = prompt("Introdueix el correu electrònic");
{
document.write("Hola "+n3+"</br><br>Moltes gràcies per presentar-te, i dir-me que tens "+n4+" anys.<br>Em guardaré el teu correu electrònic ("+n5+") per si mai et vull enviar un missatge.</br><br>A reveure!</br>");
}
