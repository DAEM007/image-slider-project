// REFERENCES TO THE ELEMENTS TO BE MANIPULATED
const imgContainer = document.querySelector('.img-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// DOM MANIPULATION

let counter = 0;

nextButton.addEventListener('click', () => {
    if(counter === 09){
        counter = 00;
    }
    counter++;
    // console.log(counter);
    imgContainer.style.backgroundImage = `url('./images/0${counter}.jpeg')`;
    // image container animation
    imgContainer.animate({
        opacity: [0.1, 1.0],
    },
    {
        fill: 'forwards',
        duration: 1000
    }
    )
})



prevButton.addEventListener('click', () => {
    if(counter === 00){
        counter = 09;
    }
    counter--;
    // console.log(counter);
    imgContainer.style.backgroundImage = `url('./images/0${counter}.jpeg')`;
    // image container animation
    imgContainer.animate({
        opacity: [0.1, 1.0],
    },
    {
        fill: 'backwards',
        duration: 1000
    }
    )
})