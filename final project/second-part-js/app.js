const damateba = document.querySelector('.damateba');
const box = document.querySelector('.box');
let a = 2;
damateba.addEventListener('click', function(){
    let label = document.createElement('label')
    label.setAttribute('for', 'ganatleba1'+a)
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'ganatleba1')
    input.setAttribute('name', 'ganatleba1')
    label.innerText=('სათაური ' + a)
    box.appendChild(label)
    box.appendChild(input)
    a++;
});