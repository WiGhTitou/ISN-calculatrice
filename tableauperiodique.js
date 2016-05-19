// Menu d'aide

// Afficher explication

var Help = function () 
{
var HelpZone = document.getElementById("HelpZone");
HelpZone.style.display="block";				
var Tab = document.getElementById("Tableau");
Tab.style.display= "none";						
}

var Close = function ()
{
var HelpZone = document.getElementById("HelpZone");
HelpZone.style.display="none";				
var Tab = document.getElementById("Tableau");
Tab.style.display= "block";

var Chimie = document.getElementById("Chimie");
Chimie.style.display="none";
var Tab = document.getElementById("Tableau");
Tab.style.display= "block";
}

var Aidechimie = function ()
{ 
var Chimie = document.getElementById("Chimie");
Chimie.style.display="block";
var Tab = document.getElementById("Tableau");
Tab.style.display="none";
}



//Voici nos fonctions pour la calculatrice


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

var Na = function () 
{
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value = ecran.concat("Na");
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value = Reel.concat("6.0221409*Math.pow(10,23)");
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





// Début du JS du tableau periodique

//Bouton hydrogène
var hydrogene = function() {
document.getElementById("affichage3").src="vignettes/h1.jpg";
}
var hydrogeneback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}

var hydrogenec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("1.008")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("1.008")
}

// Bouton Lithium
var lithium = function() {
document.getElementById("affichage1").src="vignettes/l1.jpg";

}
var lithiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var lithiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("6.94")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("6.94")
}

//Bouton Sodium
var sodium = function() {
document.getElementById("affichage1").src="vignettes/na1.jpg";
}
var sodiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var sodiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("22.99")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("22.99")
}

//Bouton Potassium
var potassium = function() {
document.getElementById("affichage1").src="vignettes/k1.jpg";
}
var potassiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var potassiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("39.10")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("39.10")
}

//Bouton Rubidium
var rubidium = function() {
document.getElementById("affichage1").src="vignettes/rb1.jpg";
}
var rubidiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var rubidiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("85.47")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("85.47")
}

// Bouton Césium
var cesium = function() {
document.getElementById("affichage1").src="vignettes/cs1.jpg";
}
var cesiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var cesiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("132.91")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("132.91")
}

//Bouton Francium
var francium = function() {
document.getElementById("affichage1").src="vignettes/fr1.jpg";
}
var franciumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var franciumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("223")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("223")
}

//Bouton Bérylium
var berylium = function() {
document.getElementById("affichage1").src="vignettes/be1.jpg";
}
var beryliumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var beryliumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("9.01")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("9.01")
}

//Bouton Magnésium
var magnesium = function() {
document.getElementById("affichage1").src="vignettes/mg1.jpg";
}
var magnesiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var magnesiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("24.31")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("24.31")
}

// Bouton Calcium
var calcium = function() {
document.getElementById("affichage1").src="vignettes/ca1.jpg";
}
var calciumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}

var calciumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("40.08")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("40.08")
}

//Bouton Strontium
var strontium = function() {
document.getElementById("affichage1").src="vignettes/sr1.jpg";
}
var strontiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var strontiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("87.62")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("87.62")
}

//Bouton Baryum
var baryum = function() {
document.getElementById("affichage1").src="vignettes/ba1.jpg";
}
var baryumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var baryumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("137.33")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("137.33")
}

//Bouton Radium
var radium = function() {
document.getElementById("affichage1").src="vignettes/ra1.jpg";
}
var radiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var radiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("226")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("226")
}

// Bouton Scandium
var scandium = function() {
document.getElementById("affichage1").src="vignettes/sc1.jpg";
}
var scandiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var scandiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("844.96")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("844.96")
}

//Bouton Yttrium
var yttrium = function() {
document.getElementById("affichage1").src="vignettes/y1.jpg";
}
var yttriumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var yttriumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("86.91")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("86.91")
}

//Bouton Lanthane
var lanthane = function() {
document.getElementById("affichage1").src="vignettes/la1.jpg";
}
var lanthaneback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var lanthanec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("138.91")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("138.91")
}
//Bouton Actinium
var actinium = function() {
document.getElementById("affichage2").src="vignettes/ac1.jpg";
}
var actiniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var strontiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("227")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("227")
}

//Bouton Titane
var titane = function() {
document.getElementById("affichage1").src="vignettes/ti1.jpg";
}
var titaneback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var titanec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("47.87")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("47.87")
}

// Bouton Zirconium
var zirconium = function() {
document.getElementById("affichage1").src="vignettes/zr1.jpg";
}
var zirconiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var zirconiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("91.22")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("91.22")
}

//Bouton Hafnium
var hafnium = function() {
document.getElementById("affichage1").src="vignettes/hf1.jpg";
}
var hafniumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var hafniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("178.49")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("178.49")
}

//Bouton Rutherfordium
var rutherfordium = function() {
document.getElementById("affichage1").src="vignettes/rf1.jpg";
}
var rutherfordiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var rutherfordiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("261")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("261")
}

//Bouton Cérium
var cerium = function() {
document.getElementById("affichage1").src="vignettes/ce1.jpg";
}
var ceriumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var ceriumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("140.12")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("140.12")
}

// Bouton Thorium
var thorium = function() {
document.getElementById("affichage2").src="vignettes/th1.jpg";
}
var thoriumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var thoriumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("232.04")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("232.04")
}

//Bouton Vanadium
var vanadium = function() {
document.getElementById("affichage1").src="vignettes/v1.jpg";
}
var vanadiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var vanadiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("50.94")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("50.94")
}

//Bouton Niobium
var niobium = function() {
document.getElementById("affichage1").src="vignettes/nb1.jpg";
}
var niobiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var niobiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("92.91")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("92.91")
}

//Bouton Tantale
var tantale = function() {
document.getElementById("affichage1").src="vignettes/ta1.jpg";
}
var tantaleback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var tantalec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("180.95")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("180.95")
}

// Bouton Dubnium
var dubnium = function() {
document.getElementById("affichage1").src="vignettes/db1.jpg";
}
var dubniumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var dubniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("262")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("262")
}

//Bouton Praseodyme
var praseodyme = function() {
document.getElementById("affichage1").src="vignettes/pr1.jpg";
}
var praseodymeback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var praseodymec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("140.91")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("140.91")
}

//Bouton Protactinium
var protactinium = function() {
document.getElementById("affichage2").src="vignettes/pa1.jpg";
}
var protactiniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var protactiniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("231.04")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("231.04")
}

//Bouton Chrome
var chrome = function() {
document.getElementById("affichage1").src="vignettes/cr1.jpg";
}
var chromeback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var chromec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("52.00")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("52.00")
}

// Bouton Molybdène
var molybdene = function() {
document.getElementById("affichage1").src="vignettes/mo1.jpg";
}
var molybdeneback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var molybdènec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("95.94")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("95.94")
}

//Bouton Tungstène
var tungstene = function() {
document.getElementById("affichage1").src="vignettes/w1.jpg";
}
var tungsteneback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var tungstenec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("183.84")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("183.84")
}

//Bouton Seaborgium
var seaborgium = function() {
document.getElementById("affichage1").src="vignettes/sg1.jpg";
}
var seaborgiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var seaborgiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("266")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("266")
}

//Bouton Néodyme
var neodyme = function() {
document.getElementById("affichage1").src="vignettes/nd1.jpg";
}
var neodymeback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var neodymec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("144.24")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("144.24")
}

// Bouton Uranium
var uranium = function() {
document.getElementById("affichage2").src="vignettes/u1.jpg";
}
var uraniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var uraniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("238.03")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("238.03")
}

//Bouton Manganèse
var manganese = function() {
document.getElementById("affichage1").src="vignettes/mn1.jpg";
}
var manganeseback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var manganesec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("54.94")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("54.94")
}

//Bouton Technétium
var technetium = function() {
document.getElementById("affichage1").src="vignettes/tc1.jpg";
}
var technetiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var technetiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("98")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("98")
}

//Bouton Rhénium
var rhenium = function() {
document.getElementById("affichage1").src="vignettes/re1.jpg";
}
var rheniumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var rheniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("186.21")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("186.21")
}

//Bouton Bohrium
var bohrium = function() {
document.getElementById("affichage1").src="vignettes/bh1.jpg";
}
var bohriumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var bohriumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("264")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("264")
}

// Bouton Prométhium
var promethium = function() {
document.getElementById("affichage1").src="vignettes/pm1.jpg";
}
var promethiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var promethiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("145")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("145")
}

//Bouton Neptunium
var neptunium = function() {
document.getElementById("affichage2").src="vignettes/np1.jpg";
}
var neptuniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var neptuniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("237")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("237")
}

//Bouton Fer
var fer = function() {
document.getElementById("affichage1").src="vignettes/fe1.jpg";
}
var ferback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var ferc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("55.85")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("55.85")
}

//Bouton Ruthénium
var ruthenium = function() {
document.getElementById("affichage1").src="vignettes/ru1.jpg";
}
var rutheniumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var rutheniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("101.07")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("101.07")
}

// Bouton Osmium
var osmium = function() {
document.getElementById("affichage1").src="vignettes/Os1.jpg";
}
var osmiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var osmiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("190.23")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("190.23")
}

//Bouton Hassium
var hassium = function() {
document.getElementById("affichage1").src="vignettes/hs1.jpg";
}
var hassiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var hassiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("277")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("277")
}

//Bouton Samarium
var samarium = function() {
document.getElementById("affichage1").src="vignettes/sm1.jpg";
}
var samariumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var samariumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("150.36")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("150.36")
}

//Bouton Plutonium
var plutonium = function() {
document.getElementById("affichage2").src="vignettes/pu1.jpg";
}
var plutoniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var plutoniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("244")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("244")
}

// Bouton Cobalt
var cobalt = function() {
document.getElementById("affichage1").src="vignettes/co1.jpg";
}
var cobaltback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var cobaltc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("58.93")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("58.93")
}

//Bouton Rhodium
var rhodium = function() {
document.getElementById("affichage1").src="vignettes/rh1.jpg";
}
var rhodiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var rhodiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("102.91")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("102.91")
}

//Bouton Iridium
var iridium = function() {
document.getElementById("affichage1").src="vignettes/ir1.jpg";
}
var iridiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var iridiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("192.22")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("192.22")
}

//Bouton Meitnerium
var meitnerium = function() {
document.getElementById("affichage1").src="vignettes/mt1.jpg";
}
var meitneriumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var meitneriumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("268")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("268")
}

//Bouton Europium
var europium = function() {
document.getElementById("affichage1").src="vignettes/eu1.jpg";
}
var europiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var europiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("151.96")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("151.96")
}

//Bouton Americum
var americum = function() {
document.getElementById("affichage2").src="vignettes/am1.jpg";
}
var americumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var americumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("243")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("243")
}

//Bouton Nickel
var nickel = function() {
document.getElementById("affichage1").src="vignettes/ni1.jpg";
}
var nickelback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var nickelc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("58.69")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("58.69")
}

//Bouton Palladium
var palladium = function() {
document.getElementById("affichage1").src="vignettes/pd1.jpg";
}
var palladiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var palladiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("106.42")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("106.42")
}

//Bouton Platine
var platine = function() {
document.getElementById("affichage1").src="vignettes/pt1.jpg";
}
var platineback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var platinemc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("195.08")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("195.08")
}

//Bouton Darmstadtium
var darmstadtium = function() {
document.getElementById("affichage1").src="vignettes/ds1.jpg";
}
var darmstadtiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var darmstadtiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("281")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("281")
}

//Bouton Gadolinium
var gadolinium = function() {
document.getElementById("affichage1").src="vignettes/gd1.jpg";
}
var gadoliniumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var gadoliniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("157.25")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("157.25")
}

//Bouton Curium
var curium = function() {
document.getElementById("affichage2").src="vignettes/cm1.jpg";
}
var curiumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var curiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("247")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("247")
}

//Bouton Cuivre
var cuivre = function() {
document.getElementById("affichage1").src="vignettes/cu1.jpg";
}
var cuivreback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var cuivrec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("112.41")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("112.41")
}

//Bouton Argent
var argent = function() {
document.getElementById("affichage1").src="vignettes/ag1.jpg";
}
var argentback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var argentc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("107.87")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("107.87")
}

//Bouton Or
var or = function() {
document.getElementById("affichage1").src="vignettes/au1.jpg";
}
var orback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var orc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("196.97")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("196.97")
}

//Bouton Roentgenium
var roentgenium = function() {
document.getElementById("affichage1").src="vignettes/rg1.jpg";
}
var roentgeniumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var roentgeniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("")
}

//Bouton Terbium
var terbium = function() {
document.getElementById("affichage1").src="vignettes/tb1.jpg";
}
var terbiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var terbiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("158.93")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("158.93")
}

//Bouton Berkelium
var berkelium = function() {
document.getElementById("affichage2").src="vignettes/bk1.jpg";
}
var berkeliumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var berkeliumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("247")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("247")
}

//Bouton Zinc
var zinc = function() {
document.getElementById("affichage1").src="vignettes/zn1.jpg";
}
var zincback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var zincc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("65.41")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("65.41")
}

//Bouton Cadmium
var cadmium = function() {
document.getElementById("affichage1").src="vignettes/cd1.jpg";
}
var cadmiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var cadmiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("112.41")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("112.41")
}

//Bouton Mercure
var mercure = function() {
document.getElementById("affichage1").src="vignettes/hg1.jpg";
}
var mercureback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var mercurec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("200.59")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("200.59")
}

//Bouton Copernium
var copemicium = function() {
document.getElementById("affichage1").src="vignettes/cn1.jpg";
}
var copemiciumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var copemiciumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("285")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("285")
}

//Bouton Dysprosium
var dysprosium = function() {
document.getElementById("affichage1").src="vignettes/dy1.jpg";
}
var dysprosiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var dysprosiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("162.5")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("162.5")
}

//Bouton Californium
var californium = function() {
document.getElementById("affichage2").src="vignettes/cf1.jpg";
}
var californiumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var californiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("251")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("251")
}

//Bouton Bore
var bore = function() {
document.getElementById("affichage2").src="vignettes/b1.jpg";
}
var boreback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var borec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("10.811")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("10.811")
}

//Bouton Aluminium
var aluminium = function() {
document.getElementById("affichage2").src="vignettes/al1.jpg";
}
var aluminiumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var aluminiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("26.98")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("26.98")
}

//Bouton Gallium
var gallium = function() {
document.getElementById("affichage2").src="vignettes/ga1.jpg";
}
var galliumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var galliumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("69.723")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("69.723")
}

//Bouton Indium
var indium = function() {
document.getElementById("affichage2").src="vignettes/in1.jpg";
}
var indiumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var indiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("114.818")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("114.818")
}

//Bouton Thallium
var thallium = function() {
document.getElementById("affichage2").src="vignettes/tl1.jpg";
}
var thalliumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var thalliumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("204.38")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("204.38")
}

//Bouton Ununtrium
var ununtrium = function() {
document.getElementById("affichage2").src="vignettes/uut1.jpg";
}
var ununtriumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var ununtriumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("284")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("284")
}

//Bouton Holmium
var holmium = function() {
document.getElementById("affichage1").src="vignettes/ho1.jpg";
}
var holmiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var holmiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("164.93")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("164.93")
}

//Bouton Einsteinium
var einsteinium = function() {
document.getElementById("affichage2").src="vignettes/es1.jpg";
}
var einsteiniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var einsteiniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("252")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("252")
}

//Bouton Carbone
var carbone = function() {
document.getElementById("affichage3").src="vignettes/c1.jpg";
}
var carboneback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var carbonec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("12")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("12")
}

//Bouton Sillicium
var sillicium = function() {
document.getElementById("affichage2").src="vignettes/si1.jpg";
}
var silliciumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var silliciumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("28")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("28")
}

//Bouton Germanium
var germanium = function() {
document.getElementById("affichage2").src="vignettes/ge1.jpg";
}
var germaniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var germaniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("72.64")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("72.64")
}

//Bouton Etain
var etain = function() {
document.getElementById("affichage2").src="vignettes/sn1.jpg";
}
var etainback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var etainc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("118.7")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("118.7")
}

//Bouton Plomb
var plomb = function() {
document.getElementById("affichage2").src="vignettes/pb1.jpg";
}
var plombback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var plombc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("207.2")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("207.2")
}

//Bouton Flerovium
var flerovium = function() {
document.getElementById("affichage2").src="vignettes/fl1.jpg";
}
var fleroviumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var fleroviumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("289")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("289")
}

//Bouton Erbium
var erbium = function() {
document.getElementById("affichage1").src="vignettes/er1.jpg";
}
var erbiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var erbiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("167.259")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("167.259")
}

//Bouton Fermium
var fermium = function() {
document.getElementById("affichage2").src="vignettes/fm1.jpg";
}
var fermiumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var fermiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("257")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("257")
}

//Bouton Azote
var azote = function() {
document.getElementById("affichage3").src="vignettes/n1.jpg";
}
var azoteback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var azotec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("14")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("14")
}

//Bouton Phosphore
var phosphore = function() {
document.getElementById("affichage3").src="vignettes/p1.jpg";
}
var phosphoreback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var phosphorec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("30.97")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("30.97")
}

//Bouton Arsenic
var arsenic = function() {
document.getElementById("affichage2").src="vignettes/as1.jpg";
}
var arsenicback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var arsenicc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("74.92")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("74.92")
}

//Bouton Antimoine
var antimoine = function() {
document.getElementById("affichage2").src="vignettes/sb1.jpg";
}
var antimoineback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var antimoinec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("121.7")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("121.7")
}

//Bouton Bismuth
var bismuth = function() {
document.getElementById("affichage2").src="vignettes/bi1.jpg";
}
var bismuthback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var bismuthc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("208.98")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("208.98")
}

//Bouton Ununpentium
var ununpentium = function() {
document.getElementById("affichage2").src="vignettes/uup1.jpg";
}
var ununpentiumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var ununpentiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("288")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("288")
}

//Bouton Thulium
var thulium = function() {
document.getElementById("affichage1").src="vignettes/tm1.jpg";
}
var thuliumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var antimoinec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("168.93")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("168.93")
}

//Bouton Mendélévium
var mendelevium = function() {
document.getElementById("affichage2").src="vignettes/md1.jpg";
}
var mendeleviumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var mendeleviumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("258")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("258")
}

//Bouton Oxygène
var oxygene = function() {
document.getElementById("affichage3").src="vignettes/o1.jpg";
}
var oxygeneback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var oxygenec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("15.999")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("15.999")
}

//Bouton Soufre
var soufre = function() {
document.getElementById("affichage3").src="vignettes/s1.jpg";
}
var soufreback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var soufrec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("32.065")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("32.065")
}

//Bouton Sélénium
var selenium = function() {
document.getElementById("affichage3").src="vignettes/se1.jpg";
}
var seleniumback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var seleniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("78.96")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("78.96")
}

//Bouton Tellure
var tellure = function() {
document.getElementById("affichage2").src="vignettes/te1.jpg";
}
var tellureback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var tellurec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("127.60")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("127.60")
}

//Bouton Polonium
var polonium = function() {
document.getElementById("affichage2").src="vignettes/po1.jpg";
}
var poloniumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var poloniumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("209")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("209")
}

//Livermorium
var livermorium = function() {
document.getElementById("affichage2").src="vignettes/lv1.jpg";
}
var livermoriumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var livermoriumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("292")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("292")
}

//Ytterbium
var ytterbium = function() {
document.getElementById("affichage1").src="vignettes/yb1.jpg";
}
var ytterbiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var ytterbiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("173.04")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("173.04")
}

//Nobélium
var nobelium = function() {
document.getElementById("affichage2").src="vignettes/no1.jpg";
}
var nobeliumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var nobeliumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("259")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("259")
}

//Bouton Fluor
var fluor = function() {
document.getElementById("affichage3").src="vignettes/f1.jpg";
}
var fluorback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var fluorc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("19.0")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("19.0")
}

//Bouton Chlore
var chlore = function() {
document.getElementById("affichage3").src="vignettes/cl1.jpg";
}
var chloreback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var chlorec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("35.45")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("35.45")
}

//Bouton Brome
var brome = function() {
document.getElementById("affichage3").src="vignettes/br1.jpg";
}
var bromeback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var bromec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("79.90")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("79.90")
}

//Bouton Iode
var iode = function() {
document.getElementById("affichage3").src="vignettes/i1.jpg";
}
var iodeback = function() {
document.getElementById("affichage3").src="Img/legende32.png";
}
var iodec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("126.96")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("126.96")
}

//Bouton Astate
var astate = function() {
document.getElementById("affichage3").src="vignettes/at1.jpg";
}
var astateback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var astatec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("210")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("210")
}

//Bouton Ununseptium
var ununseptium = function() {
document.getElementById("affichage3").src="vignettes/uus1.jpg";
}
var ununseptiumback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var ununseptiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("294")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("294")
}

//Lutétium
var lutetium = function() {
document.getElementById("affichage1").src="vignettes/lu1.jpg";
}
var lutetiumback = function() {
document.getElementById("affichage1").src="Img/legende1.png";
}
var lutetiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("174.97")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("174.97")
}

//Lawrencium
var lawrencium = function() {
document.getElementById("affichage2").src="vignettes/lr1.jpg";
}
var lawrenciumback = function() {
document.getElementById("affichage2").src="Img/legende2.png";
}
var lawrenciumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("262")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("262")
}

//Hélium
var helium = function() {
document.getElementById("affichage3").src="vignettes/he1.jpg";
}
var heliumback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var heliumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("4.0")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("4.0")
}

//Néon
var neon = function() {
document.getElementById("affichage3").src="vignettes/ne1.jpg";
}
var neonback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var neonec = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("20.18")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("20.18")
}

//Argon
var argon = function() {
document.getElementById("affichage3").src="vignettes/ar1.jpg";
}
var argonback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var argonc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("39.95")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("39.95")
}

//Krypton
var krypton = function() {
document.getElementById("affichage3").src="vignettes/kr1.jpg";
}
var kryptonback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var kryptonc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("83.80")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("83.80")
}

//Xénon
var xenon = function() {
document.getElementById("affichage3").src="vignettes/xe1.jpg";
}
var xenonback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var xenonc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("131.29")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("131.29")
}

//Radon
var radon = function() {
document.getElementById("affichage3").src="vignettes/rn1.jpg";
}
var radonback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var radonc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("222")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("222")
}

//Ununoctium
var ununoctium = function() {
document.getElementById("affichage3").src="vignettes/uuo1.jpg";
}
var ununoctiumback = function() {
document.getElementById("affichage3").src="Img/legende3.png";
}
var ununoctiumc = function() {
ecran=""+document.getElementById("affichage").value+"";
document.getElementById("affichage").value= ecran.concat("294")
Reel=""+document.getElementById("Calc").value+"";
document.getElementById("Calc").value= ecran.concat("294")
}