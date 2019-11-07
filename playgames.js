let countDown = setInterval(count ,1000);
let txtone = document.getElementById('btnOne'); 
let txttwo = document.getElementById('btnTwo');
let txtthree = document.getElementById('btnThree');
let txtfour = document.getElementById('btnFour');
let txtfive = document.getElementById('btnFive');
let txtsix = document.getElementById('btnSix');
let txtseven = document.getElementById('btnSeven');
let txteight = document.getElementById('btnEight');
let txtNine = document.getElementById('btnNine');


function count() {
    let buttonList = [txtone.value, txttwo.value];
    for (let i = 10; i < 0; i--){
            
    }
    if (one <= 0 || two <= 0 || three <= 0 || four <= 0 || five <= 0 || six <=0 || seven <= 0 || eight <= 0){
        clearInterval(countDown);
    }
}


function restNumber(e){
  debugger
    document.getElementById(e.currentTarget.id).textContent = 10;
} 


txtone.onclick = restNumber;
txttwo.onclick = restNumber;
txtthree.onclick = restNumber;
txtfour.onclick = restNumber;
txtfive.onclick = restNumber;
txtsix.onclick = restNumber;
txtseven.onclick = restNumber;
txteight.onclick = restNumber;
txtNine.onclick = restNumber;

