let countDown = setInterval(Count ,1000);
for(i=1; i < 10; i++){
    id = 'btnNumber' + i;
  document.getElementById(id).onclick = RestNumber;
}

function Count() {
    for(i=1; i < 10; i++){
        id = 'btnNumber' + i;
        document.getElementById(id).value = document.getElementById(id).value - 1;
        if(document.getElementById(id).value <= 0){
              if(document.getElementById(id).value === '0'){
                document.getElementById(id).style.background = 'red';
            }
            clearInterval(countDown);
        }
    } 
}


function RestNumber(e){
  debugger
    document.getElementById(e.currentTarget.id).value= 10;
} 


