let one = document.getElementById('numberOne').textContent
let two = document.getElementById('numberTwo').textContent
let three = document.getElementById('numberThree').textContent
let four = document.getElementById('numberFour').textContent
let five = document.getElementById('numberFive').textContent
let six = document.getElementById('numberSix').textContent
let seven = document.getElementById('numberSeven').textContent
let eight = document.getElementById('numberEight').textContent
let countDown = setInterval(count ,1000);
let clickone = document.getElementById('numberOne'); 


function count() {
    one--; 
    two--; 
    three--;
    four--;
    five--; 
    six--;
    seven--;
    eight--;
    document.getElementById('numberOne').textContent = one; 
    document.getElementById('numberTwo').textContent = two; 
    document.getElementById('numberThree').textContent = three; 
    document.getElementById('numberFour').textContent = four; 
    document.getElementById('numberFive').textContent = five; 
    document.getElementById('numberSix').textContent = six; 
    document.getElementById('numberSeven').textContent = seven; 
    document.getElementById('numberEight').textContent = eight; 
    if (one <= 0 || two <= 0 || three <= 0 || four <= 0 || five <= 0 || six <=0 || seven <= 0 || eight <= 0){
        clearInterval(countDown);
    }
}


function restNumber(){
    document.getElementById('numberOne').textContent = 10;
    one = document.getElementById('numberOne').textContent;
} 


clickone.onclick = restNumber;
