const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const addition = document.getElementById('plus');
const subtracion = document.getElementById('sub');
const multiplication = document.getElementById('mul');
const division = document.getElementById('div');
const ans = document.getElementById('answer')
let result;
addition.addEventListener('click',() =>{
    result = parseInt(num1.value) + parseInt(num2.value);
   ans.innerHTML = result
},false)

  
subtracion.addEventListener('click',()=>{
   result = parseInt(num1.value) - parseInt(num2.value);
   ans.innerHTML = result;
},false)

multiplication.addEventListener('click',()=>{
    result = parseInt(num1.value) * parseInt(num2.value);
    ans.innerHTML = result;
},false)

division.addEventListener('click',()=>{
    result = parseInt(num1.value) / parseInt(num2.value);
    ans.innerHTML = result;
},false)