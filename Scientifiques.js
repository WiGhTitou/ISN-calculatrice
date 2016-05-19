//Voici nos fonctions


//La fonction valeur associée à chaque bouton "nombres"


var zero = function ()
{
ecran=""+document.getElementById("affichage").value+"";   		// L'affichage du calcul esthetique prend le nom écran
document.getElementById("affichage").value = ecran.concat("0"); // La fonction ajoute un 0 au calcul sur l'écran esthétique
Reel=""+document.getElementById("Calc").value+"";         		// L'affichage du calcul avec la syntaxe réel prend le nom Reel
document.getElementById("Calc").value = Reel.concat("0"); 	 	// La fonction ajoute un 0 au calcul sur l'écran Reel
}

var un = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("1");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("1");
}

var deux = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("2");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("2");
}

var trois = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("3");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("3");
}

var quatre = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("4");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("4");
}

var cinq = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("5");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("5");
}

var six = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("6");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("6");
}

var sept = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("7");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("7");
}

var huit = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("8");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("8");
}

var neuf = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("9");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("9");
}

var MathPi = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("π");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.PI");
}

var inconnue = function ()
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("x");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("x");
}

// Fonctions usuelles


//La fonction valeur associée à chaque bouton "fonction"



var DixPow = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("10^(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.pow(10,");
}

var Pow = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Math.pow(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.pow(");
}

var Log = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("log(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.log(");
}

var abs = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("abs(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.abs(");
}

var Racine = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("√(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.sqrt(");
}

var exp = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("℮(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.exp(");
}

var Sin = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Sin(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.sin(");
}

var Arcsin = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Arcsin(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.asin(");
}

var Cos = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Cos(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.cos(");
}

var Arccos = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Arccos(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.acos(");
}

var Tan = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Tan(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.tan(");
}

var Arctan = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Arctan(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("Math.atan(");
}



// Opérateurs

//La fonction valeur associée à chaque bouton "opérateurs"

var Division = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("/");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("/");
}

var multiplication = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("*");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("*");
}

var addition = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("+");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("+");
}

var soustraction = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("-");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("-");
}

var resultat = function () 
{
ecran=""+document.getElementById("affichage").value+"";
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("affichage").value = eval(Reel);
document.getElementById("Calc").value = eval(Reel);
}




// Parenthèses et virgule

var Pouverte = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("(");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("(");
}

var Pfermee = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat(")");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat(")");
}

var Virgule = function () // Virgule mathématique
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat(".");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat(".");
}

var Vir = function ()   // Virgule littérale, utile pour la syntaxe des puissances
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat(",");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat(",");
}


// Effaceurs

var C = function ()
{
document.getElementById("affichage").value = "";
document.getElementById("Calc").value = "";
}

var Suppr = function () 
{
ecran=""+document.getElementById("affichage").value+"";
n= ecran.length;
document.getElementById("affichage").value = ecran.substring(0,n-1);
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.substring(0,n-1);
}


// Aide 

var Help = function ()
{

var Helping = document.getElementById("HelpZone");
Helping.style.marginLeft = "7%";					// La zone d'aide viens se placer dans l'écran
Helping.style.visibility = "visible";				// La zone d'aide apparait
var Tab = document.getElementById("Tableau");
Tab.style.marginLeft= "55%";						// La calculatrice se déplace sur la droite
}


// Graph

// Fonction pour afficher le graph

var Affich = function () 
{
var Graph = document.getElementById("Graph");
Graph.style.display="inline";				// Le graph apparait
var Tab = document.getElementById("Tableau");
Tab.style.marginTop= "2%";						// La calcularice se déplace vers le haut
}

var Cacher = function () 
{

var Graph = document.getElementById("Graph");
Graph.style.display="none";  				// Le graph disparait
var Tab = document.getElementById("Tableau");
Tab.style.marginTop= "4%"; 						// La caltulatrice reprend sa position initiale
Tab.style.marginLeft= "0%";
var Helping = document.getElementById("HelpZone");
Helping.style.visibility = "hidden";			// La zone d'aide disparait et se replace hors de l'écran
Helping.style.marginLeft = "-40%";
}


// nb de pixels pour une unité
var sc=20;



// fonction pour dessiner
function draw(f) { 

 // Largeur et hauteur en pixels
  var W=800, H=400
  var canvas = document.getElementById("Graphe");
  canvas.width=W; canvas.height=H;
  var ctx = canvas.getContext("2d");
  
  
  // Tracé des axes
 
ctx.strokeStyle = "#130686";
ctx.moveTo(0,H/2);
ctx.lineTo(W,H/2);
ctx.moveTo(W/2,0);
ctx.lineTo(W/2,H);
ctx.stroke();

  // tracé du quadrillage
  ctx.strokeStyle = "#4F1C16";
  ctx.beginPath();
  ctx.lineWidth=0.5;
  // lignes horizontales
  for(var i=0; i<=H/sc; i++) {
    ctx.moveTo(0, H-sc*i)
    ctx.lineTo(W, H-sc*i)
  }
  // lignes verticales
  for(var i=0; i<=W/sc; i++) {
    ctx.moveTo(sc*i,H-0)
    ctx.lineTo(sc*i, H-H)
  }
  ctx.stroke();
  // tracé de la fonction
  var x;
  with(Math) { 
    ctx.strokeStyle = "red";
    ctx.lineWidth=1.5;
    ctx.beginPath();
    x=0
    var u=eval(f)
    ctx.moveTo(-W/2, H-u*sc)
    for(x=-W/(2*sc); x<=W/(2*sc); x+=1/sc) {
      u=eval(f)
      ctx.lineTo(W/2+x*sc, H-u*sc)
    }
  }
  //ctx.closePath();
  ctx.stroke();
}


function trace()
{
var b = document.getElementById("Calc").value;
if (b !="") {var f = "(H/sc)/2+" + b;}
else {var f = "0"};
draw(f);
}



window.addEventListener("load",draw);
