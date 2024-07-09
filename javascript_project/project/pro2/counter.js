let count = 10;

function updateCount() {
    document.getElementById('count').textContent = count;
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    if (count > 0) {
        count--;
        updateCount();
    }
}
// function reset() {
//     count(10);
//     updateCount();
// }



updateCount();