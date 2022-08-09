
"use strict";
let formEl=document.getElementById('form');
let submit=document.getElementById("sumbit");
let table=document.getElementById('table');
var val=0;
function Finfo(val,name,type,price) {
    this.Id = val;
    this.Name = name;
    this.type= type;
    this.price = price;
this.render();
   }
Finfo.prototype.render=function(){

  let newRow=document.createElement('tr');
  table.appendChild(newRow);
  
  let newId=document.createElement('td');
  newId.textContent=this.Id;
  newRow.appendChild(newId);

  let newName=document.createElement('td');
  newName.textContent=this.Name;
  newRow.appendChild(newName);

  let newType=document.createElement('td');
  newType.textContent=this.type;
  newRow.appendChild(newType);

  let newPrice=document.createElement('td');
  newPrice.textContent=this.price ;
  newRow.appendChild(newPrice);

  newRow.classList.add('row');
}

Finfo.Id;
formEl.addEventListener('submit',handleSumbit);
function handleSumbit(event){
  event.preventDefault();

let id=uniqueId();
let name =event.target.fname.value;
let type=event.target.food.value;
let price=event.target.Price.value+"jd";
const newDrink=new Finfo(id,name,type,price);
}

function uniqueId(){
  val=Math.floor(1000+Math.random()*9000);
  return val;
}



