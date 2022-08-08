var counter=0;
function Finfo(foodId,foodName,type,price) {
    this.foodId = foodId;
    this.foodName = foodName;
    this.type= type;
    this.price = price;

           
  

  }

Finfo.prototype.printMenu=function(){
  const divEl=document.createElement('div');
  form.appendChild(divEl);

  const pE1=document.createElement('p');
pE1.textContent=`Food ID :${this.foodId} Food Name :${this.foodName}Food Type:${this.type}Food Price:${this.price}`; 

divEl.appendChild(pE1);

}
let formEl=document.getElementById('form');
formEl.addEventListener('submit',handleSumbit);
function handleSumbit(event){
  event.preventDefault();
// console.log(event);
let id=counter++;
let name =event.target.fname.value;
let type=event.target.food.value;
let price=event.target.Price.value;

console.log(name,type,price);


let newDrink=new Finfo(id,name,type,price);
newDrink.printMenu();
}





