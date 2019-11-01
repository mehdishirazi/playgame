let second = document.getElementById('numberone').textContent;
let countdown = setInterval(count ,1000);
let clickone = document.getElementById('numberone');


function count() {
    second--;
    document.getElementById('numberone').textContent = second;
    if (second <= 0) {
        clearInterval(countdown);
    }
}


function restNumber(){
    document.getElementById('numberone').textContent = 10;
    second = document.getElementById('numberone').textContent;
} 


clickone.onclick = restNumber;
