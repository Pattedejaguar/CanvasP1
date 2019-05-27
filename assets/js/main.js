var dessin = document.getElementById("maison");
var canvas = dessin.getContext("2d");

// carré maison
canvas.beginPath();
canvas.moveTo(200,200);
canvas.lineTo(200,300);
canvas.lineTo(300,300);
canvas.lineTo(300,200);
canvas.closePath();
canvas.fillStyle = "lightblue";
canvas.fill();

// toit
canvas.beginPath();
canvas.moveTo(200,200);
canvas.lineTo(250,150);
canvas.lineTo(300,200);
canvas.closePath();
canvas.fillStyle = "#cd853f";
canvas.fill();
canvas.stroke();

//cheminé
canvas.beginPath();
canvas.moveTo(220,180);
canvas.lineTo(220,150);
canvas.lineTo(240,150);
canvas.lineTo(240,160);
canvas.closePath();
canvas.fillStyle = "grey"
canvas.fill();
canvas.stroke();
// fenêtre gauche
canvas.beginPath();
canvas.moveTo(215,215);
canvas.lineTo(230,215);
canvas.lineTo(230,230);
canvas.lineTo(215,230);
canvas.closePath();
canvas.fillStyle = "grey"
canvas.fill();
// fenêtre droite
canvas.beginPath();
canvas.moveTo(260,210);
canvas.lineTo(290,210);
canvas.lineTo(290,245);
canvas.lineTo(260,245);
canvas.closePath();
canvas.fill();
// porte
canvas.beginPath();
canvas.moveTo(240,300);
canvas.lineTo(240,260);
canvas.lineTo(260,260);
canvas.lineTo(260,300);
canvas.stroke();
canvas.fill();
