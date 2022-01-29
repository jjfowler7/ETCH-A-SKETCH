const container = document.querySelector('#container');

function generateDivs(number = 16) {
    for(let i = 0; i < number * number; i++) {
        const divs = document.createElement('div');
        divs.textContent = `div # ${i}`;
        container.append(divs);
    }
    let gridTemplateColumns = `repeat(${number}, 1fr)`;
    document.getElementById('container').style.gridTemplateColumns = gridTemplateColumns;
}

generateDivs();