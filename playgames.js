let run = document.getElementById('btnRun');
run.onclick = Run;
let tableNumber = null;
let timer;


function CreateBtn(){
        tableNumber = document.getElementById('dropdown').value;
            for(i = 1; i < tableNumber**2; i++){
                let btn = document.createElement("BUTTON");
                btn.id = "btnNumber" + i;
                btn.value = 10;
                btn.innerHTML = 10;
                document.getElementById('buttons').appendChild(btn); 
            }  
}


function ClearBtn(){
    for(i = 1; i < tableNumber**2; i++){
        id = 'btnNumber' + i;
        BTN = document.getElementById(id);
        BTN.parentNode.removeChild(BTN);
    }
          tableNumber = null;
          CreateBtn();
}


function Run(){
    let countDown = setInterval(Counter, 10000);
    let timeLeft = setInterval(Time, 10000);
    Time();
    init();
    Counter(btnNumber);
    RestNumber(e);
}


function Time(){
    timer = document.getElementById('Timer').innerHTML; 
    timer = timer -1;
    document.getElementById('Timer').innerHTML = timer;
    if(timer < 0){
        clearInterval(timeLeft);
        alert ("You lOst");
        return;
    }
}
    
    
function init(){
    for(i=1; i < tableNumber**2; i++){
    id = 'btnNumber' + i;
    document.getElementById(id).onclick = RestNumber;
    }
}
    
    
function Counter(btnNumber) {
    for(i=1; i < tableNumber**2; i++){
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
    btnNumber = document.getElementById(e.currentTarget.id);
    return btnNumber;
} 

