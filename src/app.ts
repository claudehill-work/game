import { getRandomInt } from './utils';

let squares: NodeListOf<HTMLDivElement>;

export function runApp() {
    // find all squares
    squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;
    const secret = getSecretNumber();

    squares.forEach((sq, index) => {
        if (index === secret) {
            sq.dataset.secret = 'true';
        }
        sq.addEventListener('click', handleClick);
    });

    // pick one as secret square and mark it
    // make it so when player clicks square
    //

}

// e.target
function handleClick() {
    const clickedSquare = this as HTMLDivElement;
    if (clickedSquare.dataset.secret === 'true') {
        clickedSquare.classList.add('winner');
        const message = document.getElementById('message') as HTMLElement;
        message.innerText = 'Whoa! Awesome!'
        squares.forEach(s => {
            if (s !== clickedSquare) {
                s.classList.add('loser');
            }
        });
    } else  {
        clickedSquare.classList.add('loser');
    }
}


function getSecretNumber() {
    // return 2;
    return getRandomInt(0, 5);
}
