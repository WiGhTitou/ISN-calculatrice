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