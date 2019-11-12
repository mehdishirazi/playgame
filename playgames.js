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
    if (one <= 0 || two <= 0 || three <= 0 || four <= 0 || five <= 0 || six <=0 || seven <= 0 || eight <= 0){
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

