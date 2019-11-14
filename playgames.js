let countDown = setInterval(Count ,1000);
let btnone = document.getElementById('btnOne'); 
let btntwo = document.getElementById('btnTwo');
let btnthree = document.getElementById('btnThree');
let btnfour = document.getElementById('btnFour');
let btnfive = document.getElementById('btnFive');
let btnsix = document.getElementById('btnSix');
let btnseven = document.getElementById('btnSeven');
let btneight = document.getElementById('btnEight');
let btnnine = document.getElementById('btnNine');


function Count() {

    for(let i = 0; i <= 10; i++){
        console.log(document.getElementById('btnOne'))
        --document.getElementById('btnOne').value; 
    }
    if(
        btnone <= 0 || 
        btntwo <= 0 || 
        btnthree <= 0 || 
        btnfour <= 0 || 
        btnfive <= 0 || 
        btnsix <=0 || 
        btnseven <= 0 || 
        btneight <= 0
    ){
        clearInterval(countDown);
    }
}


function RestNumber(e){
  debugger
    document.getElementById(e.currentTarget.id).textContent = 10;
} 


btnone.onclick = RestNumber;
btntwo.onclick = RestNumber;
btnthree.onclick = RestNumber;
btnfour.onclick = RestNumber;
btnfive.onclick = RestNumber;
btnsix.onclick = RestNumber;
btnseven.onclick = RestNumber;
btneight.onclick = RestNumber;
btnnine.onclick = RestNumber;

