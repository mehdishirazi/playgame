let run = document.getElementById('btnRun')
run.onclick = Run;


function Run(){
let countDown = setInterval(Counter, 1000);


function init(){
    for(i=1; i < 10; i++){
        id = 'btnNumber' + i;
        document.getElementById(id).onclick = RestNumber;
    }
}


function Counter() {
    for(i=1; i < 10; i++){
        id = 'btnNumber' + i;
        btnNumber = document.getElementById(id);

        btnNumber.value = btnNumber.value - 1;
        if(btnNumber.value <= 0){
            btnNumber.style.background = 'red';
            clearInterval(countDown);
        }
    } 
}


function RestNumber(e){
    document.getElementById(e.currentTarget.id).value= 10;
} 


init()
}

