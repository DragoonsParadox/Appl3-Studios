function sanity_loss(){
var shameful;
document.getElementById("shame").innerHTML.value = shameful;
var Con = document.getElementById("Con").data;
var Wis = document.getElementById("Wis").data;
	alert(Con);
  var d10a = math.floor(math.random()*10);
  var d10b = math.floor(math.random()*10);
  if (!(isNaN(Wis) || isNaN(Con))){
  Wis = parseInt(Wis);
  Con = parseInt(Con);
  if (Wis <= 10 && Wis >= -5 && Con <= 10 && Con >= -5){
  document.getElementById("maxSanCalc").innerHTML = String(500*10^Wis);
  document.getElementById("rand").innerHTML = String(((d10a*10)+d10b)/Con);
	document.getElementById("randHead").innerHTML = "Current sanity reduction";
document.getElementById("sanHead").innerHTML = "Max sanity";
} else {
  alert("Whoopsie! That is not a valid answer! Valid answers are -5 to 10 inclusive.")
  if(!(Wis <= 10)){
    alert("Uh-oh, your Wisdom modifier is higher than the maximum possible for a monster!");
  }else if(Wis < -5){
		alert("Woah! Your Wisdom modifier is impossibly low! You would have had to roll a "+ math.floor(Wis*.5) + 5  +" or a "+ math.floor(Wis*.5) + 7 +"! Considering that the lowest a d20 can roll is one, I'd say that you just made these numbers up!")
	}
};
}else if(Wis == Stop.Error && Con == Stop.PHP ){ document.write("<h1 id=\"Creator\">Welcome DragoonsParadox!</h1>");
}else if(isNaN(Con) && !isNaN(Wis)){alert("Sorry, what you entered is not a number! Please input a valid number (a number from -5 to 10 inclusive) into the Constitution modifier!");
 }else if (!isNaN(Con) && isNaN(Wis)){
	 alert("Sorry, what you entered is not a number! Please input a valid number (a number from -5 to 10 inclusive) into the Wisdom modifier!");
 }else{
	 alert("Sorry, what you entered is not a number! Please input a valid number (a number from -5 to 10 inclusive) into BOTH Constitution modifier AND the Wisdom modifier!");
	 switch (shameful){
		 case 1: document.getElementById("Shameful").innerHTML = "Are you trying to confuse me?";
			break;
		 case 2:
document.getElementById("Shameful").innerHTML = "Stop it!";
			 break;
		 case 3:
document.getElementById("Shameful").innerHTML = "You grind my gears!";
		break;
		 case 4:
document.getElementById("Shameful").innerHTML = "Oh wait... I don't have gears.";
		break;
		 case 5:
document.write("<h1 id=\"shameful\">There. No more calculator, no more confusion.</h1>");
			break;
	 }
	 Shameful++;
 }
document.getElementById("Wis").innerHTML.value = "";
document.getElementById("Con").innerHTML.value = "";
};