var counter=0;
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

  newRow.classList.add('row')

//   const divEl=document.createElement('div');
//   form.appendChild(divEl);

//   const pE1=document.createElement('p');
// pE1.textContent=`Food ID :${this.foodId} Food Name :${this.foodName}Food Type:${this.type}Food Price:${this.price}`; 

// divEl.appendChild(pE1);

}
let formEl=document.getElementById('form');
formEl.addEventListener('submit',handleSumbit);
function handleSumbit(event){
  event.preventDefault();
// console.log(event);
let id=uniqueId();
let name =event.target.fname.value+ "        ";
let type=event.target.food.value+"        ";
let price=event.target.Price.value+"jd";

console.log(name,type,price);


let newDrink=new Finfo(id,name,type,price);
newDrink.printMenu();
}

function uniqueId(){
  val=Math.floor(1000+Math.random()*9000);
  return val
}



