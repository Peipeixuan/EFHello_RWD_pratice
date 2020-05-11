//sticky nav
const nav = document.querySelector('.nav');

let topOfNav = nav.offsetTop;

function fixNav() {
    //console.log(window.scrollY);
    if (window.scrollY > topOfNav) {
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

//jumping card

const tryCard = document.querySelectorAll('.try-card');
const tryCardNodes = [...document.querySelectorAll('.try-card')]

window.addEventListener('scroll', jumpingCard);

function jumpingCard() {
    if (window.scrollY >= 220) {
        tryCardNodes[0].classList.add('jumping-card');
    }
    if (window.scrollY >= 270) {
        tryCardNodes[1].classList.add('jumping-card');
    }
    if (window.scrollY >= 300) {
        tryCardNodes[2].classList.add('jumping-card');
    }
}

//change face
const facesDiv = document.querySelector('.feedback-photo');
const facesNode = [...document.querySelectorAll('.feedback-face')]

const feeButton = document.querySelectorAll('.fee-button');
const buttonNode = [...document.querySelectorAll('.fee-button')];

const feeArrowLeft = document.querySelector('.feedback-left-angle');
const feeArrowRight = document.querySelector('.feedback-right-angle');


let state = 0; //the next index to handle
const xPosition = [-15, -90, -172, -254, -334];

setInterval(changeFace, 5000);

function changeFace() {
    console.log(state);
    facesDiv.style.setProperty('transform', `translateX(${xPosition[state]}px)`);
    facesNode.map(node => {
        node.classList.remove('active');
    })
    facesNode[state + 1].classList.add('active');

    buttonNode.map(node => {
        node.classList.remove('active');
    })

    buttonNode[state].classList.add('active');

    if (state == 4) {
        state = 0;
    } else {

        state += 1;
    }

}

function buttonChangeFace() {
    buttonNode.map(node => {
        node.classList.remove('active');
    })

    this.classList.add('active');

    console.log(this.innerText - 1);
    state = this.innerText - 1;
    changeFace();
}


buttonNode.forEach(a => a.addEventListener('click', buttonChangeFace));

//make arrow can be click
feeArrowLeft.addEventListener('click', () => {
    console.log(state);
    if (state == 0) {
        state = 3;
    } else if (state == 1) {
        state = 4;
    } else {
        state -= 2;
    }
    changeFace();
});
feeArrowRight.addEventListener('click', () => {
    changeFace();
});