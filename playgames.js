let second = document.getElementById('numberone').textContent
let countdown = setInterval(Count(), 1000)
function Count() {
    second--;
    document.getElementById('numberone').textContent = second;
    if (second <= 0) {
        clearInterval(countdown);
    }
}
