let timer;
let countDown = null; 
let timeLeft = null;
let tableNumber = null;


function CreateBtn(tableNumber){
    for(i = 1; i <= tableNumber**2; i++){
        let btn = document.createElement('BUTTON');
        btn.id = "btnNumber" + i;
        btn.value = 10;
        btn.innerHTML = 10;
        btn.onclick = RestNumber;
        document.getElementById('buttons').appendChild(btn); 
    }
}


function ClearBtn(tableNumber){
    for(i = 1; i <= tableNumber**2; i++){
        id = 'btnNumber' + i;
        BTN = document.getElementById(id);
        BTN.parentNode.removeChild(BTN);
    }
    document.getElementById('dropdown').disabled = false;
    document.getElementById('Timer').innerHTML = 45;
    clearInterval(timeLeft);
    clearInterval(countDown);
}


function Start(){
    countDown = setInterval(Counter, 1000);
    timeLeft = setInterval(Time, 1000);
}


function Time(){
    timer = document.getElementById('Timer'); 
    timer.innerHTML = timer.innerHTML -1;
    if(timer.innerHTML <= 0){
        clearInterval(timeLeft);
        alert ("You lOst");
        return;
    }
}
    
    
function Init(){
    tableNumber = document.getElementById('dropdown').value;
    if(tableNumber !== null){
        document.getElementById('dropdown').disabled = true;
    }
    CreateBtn(tableNumber);
}
    
    
function Counter() {
    for(i=1; i <= tableNumber**2; i++){
        id = 'btnNumber' + i;
        btnNumber = document.getElementById(id);
    
        btnNumber.value = btnNumber.value - 1;
        document.getElementById(id).innerHTML = btnNumber.value;
        if(btnNumber.value <= 0){
            btnNumber.style.background = 'red';
            clearInterval(countDown);
        }
    } 
}
    
    
function RestNumber(e){
    document.getElementById(e.currentTarget.id).innerHTML = 10;
    document.getElementById(e.currentTarget.id).value = 10;
} 

