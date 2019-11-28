let run = document.getElementById('btnRun')
run.onclick = Run;
let a;


function CreateBtn(e){
     a = document.getElementById('dropdown').value;
     for(i = 1; i < a**2; i++){
         let btn = document.createElement("BUTTON");
         btn.id = "btnNumber" + i;
         btn.value = 10;
         btn.innerHTML = 10;
         document.getElementById('buttons').appendChild(btn); 
     } 
}


function Run(){
  debugger
let countDown = setInterval(Counter, 1000);


function init(){
    for(i=1; i < a**2; i++){
        id = 'btnNumber' + i;
        document.getElementById(id).onclick = RestNumber;
    }
}


function Counter() {
    for(i=1; i < a**2; i++){
        id = 'btnNumber' + i;
        btnNumber = document.getElementById(id);

        btnNumber.value = btnNumber.value - 1;
        if(btnNumber.value <= 0){
            btnNumber.style.background = 'red';
            clearInterval(countDown);
        }
      console.log(btnNumber.value, document.getElementById(id).value, document.getElementById(id).innerHTML)
    } 
}


function RestNumber(e){
    document.getElementById(e.currentTarget.id).value= 10;
} 


init()
}

