const container = document.querySelector('#container');

function generateDivs() {
    let number = document.getElementById('gridSize').value; //get input from text box 
    let divCount = container.childElementCount; // count the number of divs and store count in divCount

    if (divCount === 0) { //default grid to 16 on load
        number = 16;
    }

    if (number > 100) {
        return false;
    } else if (number * number > divCount) { // if input number higher than divCount then add differnece
        numberAdd = (number * number) - divCount;
        for (let i = 0; i < numberAdd; i++) {
            const divs = document.createElement('div');
            container.append(divs);
        }
    } else if (number * number < divCount) { // if input number is lower than div count than subtract difference
        numberSubtract = divCount - (number * number);
        for (let i = 0; i < numberSubtract; i++) {
            const divs = document.createElement('div');
            container.removeChild(container.firstChild);
        }
    }

    gridTemplateColumns = `repeat(${number}, 1fr)`;
    document.getElementById('container').style.gridTemplateColumns = gridTemplateColumns;

}

generateDivs();