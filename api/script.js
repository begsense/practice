const apiUrl = 'https://random-data-api.com/api/';

const rowElement = document.querySelector('.row');
console.log('row', rowElement);
let out = '';

function setRandomColor() {
    const colorArr = [];

    for(let i = 0; i < 3; i++) {
        const rand = ~~(Math.random() * 255);
        colorArr.push(rand);
    }

    return `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}`;
}

const render = (data) => {
    console.log('All data', data);
    for(let i = 0; i < data.length; i++) {
        const {brand, buzzword, id, health_benefit} = data[i];
        const randomColor = setRandomColor();
        console.log('single data', data[i]);
        
        out += `
        <div class="article">
            <div class="article__imgbox" style="background: ${randomColor}">
                ${id}
            </div>
            <h3 class="article__title">${brand}</h3>
            <p class="article__description">${buzzword} ${health_benefit}</p>
        </div>   
        `;
    }

    console.log('out', rowElement);
    rowElement.innerHTML = out;
}

const req = fetch(`${apiUrl}/cannabis/random_cannabis?size=30`)
    .then(res => res.json())
    .then(render)
    .finally(() => console.log('zdarova'));