const div1 = document.createElement('div')
div1.setAttribute('class', 'div')

// buttons
const shuffle = document.createElement('button');
shuffle.setAttribute('class', 'shuffle');
shuffle.innerText = 'Shuffle and start';

const stops = document.createElement('button')
stops.setAttribute('class', 'stops');
stops.innerText = 'Stop';

const save = document.createElement('button')
save.setAttribute('class', 'save');
save.innerText = 'Save';

const results = document.createElement('button')
results.setAttribute('class', 'results');
results.innerText = 'Results';

const pazzl = document.createElement('div')
pazzl.setAttribute('class', 'pazzl')

const body1 = document.querySelector('body');

body1.appendChild(div1);

div1.appendChild(shuffle);
div1.appendChild(stops);
div1.appendChild(save);
div1.appendChild(results);
div1.appendChild(pazzl);


const cellSize = 100;
const emptyCell = {
    value: 0,
    top: 0,
    left: 0
}
const cells = [];
cells.push(emptyCell);

function move(index) {
    const cell = cells[index]
    const leftDiff = Math.abs(emptyCell.left - cell.left);
    const topDiff = Math.abs(emptyCell.top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }

    cell.element.style.left = `${emptyCell.left * cellSize}px`;
    cell.element.style.top = `${emptyCell.top * cellSize}px`;

    const emptyLeft = emptyCell.left;
    const emptyTop = emptyCell.top;
    emptyCell.left = cell.left;
    emptyCell.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;
    const isEnd = cells.every(cell => {
        return cell.value === cell.top * 4 + cell.left
    });
    if (isEnd) {
        alert('You winner!')
    }
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.sort(() => Math.random() - 0.5);

for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div')
    cell.setAttribute('class', 'cell')
    const value = numbers[i - 1];
    cell.innerHTML = value;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        value: value,
        left: left,
        top: top,
        element: cell
    });

    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    pazzl.appendChild(cell);

    cell.addEventListener('click', () => {
        move(i);
    });   
}

shuffle.addEventListener('click', () => {
    location.reload();
})