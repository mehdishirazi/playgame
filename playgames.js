let one = document.getElementById('numberOne').textContent
let two = document.getElementById('numberTwo').textContent
let three = document.getElementById('numberThree').textContent
let four = document.getElementById('numberFour').textContent
let five = document.getElementById('numberFive').textContent
let countDown = setInterval(count ,1000);
let clickone = document.getElementById('numberOne'); 


function count() {
    one--; 
    two--; 
    document.getElementById('numberOne').textContent = one; 
    document.getElementById('numberTwo').textContent = two; 
    if (one <= 0 || two <= 0) {
        clearInterval(countDown);
    }
}


function restNumber(){
    document.getElementById('numberOne').textContent = 10;
    one = document.getElementById('numberOne').textContent;
} 


clickone.onclick = restNumber;
