var div=document.createElement("div");
div.classList.add("containerDiv");
var input=document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("placeholder","Enter Id (e.g.  1)");
input.setAttribute("id","number");

var search=document.createElement("button");
search.setAttribute("type","button");
search.classList.add("btn","btn-primary");
search.innerHTML="search";
search.addEventListener("click",foo);


var weight=document.createElement("div");
weight.setAttribute("id","weight");

var pokemonName =document.createElement("div");
pokemonName.setAttribute("id","name"); 

var Abilities=document.createElement("div");
Abilities.setAttribute("id","Abilities");

var Moves=document.createElement("div");
Moves.setAttribute("id","Move");

div.append(input,search,weight,pokemonName,Abilities,Moves);
document.body.append(div); 

var table=document.createElement("table");
var trHead=document.createElement("tr");

var th1=document.createElement("th")
th1.innerHTML="Name";
trHead.appendChild(th1);

var th2=document.createElement("th");
th2.innerHTML="Weight";
trHead.appendChild(th2);

var th3=document.createElement("th");
th3.innerHTML="Abilities";
trHead.appendChild(th3);

var th4=document.createElement("th");
th4.innerHTML="Moves";
trHead.appendChild(th4);

table.appendChild(trHead);
document.body.append(table);

async function foo(){
    var res=document.getElementById("number").value;  
    console.log(res); 
    var res1= await fetch(`https://pokeapi.co/api/v2/pokemon/${res}`);
   var res2=await res1.json();
 console.log(res2);
 
 //clearing previous results
   pokemonName.innerHTML="";
   weight.innerHTML="";
   Abilities.innerHTML="";
   Moves.innerHTML="";
   
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerHTML=res2.name;
  tr.appendChild(td1);

  var td2 = document.createElement("td");
  td2.innerHTML=res2.weight;
  tr.appendChild(td2);
 
  var td3 = document.createElement("td");
  td3.innerHTML=res2.abilities.map (abilities=>abilities.ability.name).join(",");
  tr.appendChild(td3);

  var td4 = document.createElement("td");
  td4.innerHTML=res2.moves.map(moves=>moves.move.name).join(",");
  tr.appendChild(td4);

  table.appendChild(tr);
 
}



