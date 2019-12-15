let run = document.getElementById('btnRun');
run.onclick = Start;
let timer;
let countDown = null; 


function CreateBtn(tableNumber){
  debugger
    for(i = 1; i <= tableNumber**2; i++){
        let btn = document.createElement("BUTTON");
        btn.id = "btnNumber" + i;
        btn.value = 10;
        btn.innerHTML = 10;
        document.getElementById('buttons').appendChild(btn); 
        document.getElementById(btn.id).onclick = RestNumber;
    }  
}


function ClearBtn(tableNumber){
  debugger
    for(i = 1; i <= tableNumber**2; i++){
        id = 'btnNumber' + i;
        BTN = document.getElementById(id);
        BTN.parentNode.removeChild(BTN);
    }
}


function Start(){
    timer = document.getElementById('Timer').innerHTML; 
    countDown = setInterval(Counter, 1000);
    let timeLeft = setInterval(Time, 1000);
    Time(timer);
    Counter();
}


function Time(timer){
  debugger
    timer = timer -1;
    document.getElementById('Timer').innerHTML = timer;
    if(timer < 0){
        clearInterval(timeLeft);
        alert ("You lOst");
        return;
    }
}
    
    
function Init(){
    tableNumber = document.getElementById('dropdown').value;
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

