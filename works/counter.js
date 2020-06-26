let count = 0;
function countUp(){
    count++;
    const countElement = document.querySelector('#count');
    countElement.innerText = '回数: ' + count;
}