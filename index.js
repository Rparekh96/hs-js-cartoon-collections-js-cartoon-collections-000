var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
 function dwarfRollCall(dwarves) {
  var array =[]
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `)
   }
     return array.join("")
}

function summonCaptainPlanet(planeteerCalls) {
  var planeteerCalls2 = [];
   for (var i = 0; i < planeteerCalls.length; i++ ){
      planeteerCalls2.push(planeteerCalls[i].toUpperCase() + '!');
  }
      return planeteerCalls2
}
var words = ["wind", "fire"]
 function longPlaneteerCalls(words) {
    for(var i=0;i<words.length;i++){
      if (words[i].length>4){
      return true
    }
      return false
    }
  
}
function findTheCheese(cheddarCheese){
  if (cheddarCheese.includes("cheddar"))
  return "cheddar";
  else if(cheddarCheese.includes("gouda"))
  return"gouda";
  else if(cheddarCheese.includes("camembert"))
  return "camembert";
  else 
  return("no cheese!");
}
  