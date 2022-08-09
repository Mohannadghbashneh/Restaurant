
function Finfo(foodId,foodName,type,price) {
    this.foodId = foodId;
    this.foodName = foodName;
    this.type= type;
    this.price = price;
this.render();
           
  

  }

Finfo.prototype.render=function(){

  let newRow=document.createElement('tr');
  table.appendChild(newRow);
  
  let newId=document.createElement('td');
  newId.textContent=this.foodId;
  newRow.appendChild(newId);

  let newName=document.createElement('td');
  newName.textContent=this.foodName;
  newRow.appendChild(newName);

  let newType=document.createElement('td');
  newType.textContent=this.type;
  newRow.appendChild(newType);

  let newPrice=document.createElement('td');
  newPrice.textContent=this.price ;
  newRow.appendChild(newPrice);

  newRow.classList.add('row');
}
let formEl=document.getElementById('form');
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
  return val
}



