let countDown = setInterval(count ,1000);
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
    let buttonList = [btnone.value, btntwo.value];
    for (let i = 10; i < 0; i--){
            
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


txtone.onclick = RestNumber;
txttwo.onclick = RestNumber;
txtthree.onclick = RestNumber;
txtfour.onclick = RestNumber;
txtfive.onclick = RestNumber;
txtsix.onclick = RestNumber;
txtseven.onclick = RestNumber;
txteight.onclick = RestNumber;
txtNine.onclick = RestNumber;

