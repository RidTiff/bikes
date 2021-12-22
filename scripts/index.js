// Покрытия

const pavement = [
    highway = {
        heading: 'Шоссе',
        text: `На шоссейном велосипеде можно 
        ездить по асфальту на разных градиентах: будь то горы 
        или равнины. Гонки проходят в командном пелотоне, но 
        тренироваться можно и самостоятельно.`,
        gradient: './images/highway.svg',
        image: './images/highway.png'
    },

    gravel = {
        heading: 'Грэвел',
        text: `Грэвел похож на шоссейный велосипед, 
        но конструкция рамы немного отличается, и на 
        нём стоят более широкие покрышки, всё для того 
        чтобы проехать по лёгкому бездорожью.`,
        gradient: './images/gravel.svg',
        image: './images/gravel.png'
    },

    tt = {
        heading: 'ТТ',
        text: `ТТ — это велосипед для триатлона или 
        раздельного старта, гооняют на таком велике только 
        по равнинному асфальту, велик очень быстрые и аэродинамичный.`,
        gradient: './images/tt.svg',
        image: './images/tt.png'
    }
]

const pavementSection = document.querySelector('.pavement');
const headingElement = pavementSection.querySelector('.pavement__heading')
const textElement = pavementSection.querySelector('.pavement__text')
const gradientElement = pavementSection.querySelector('.pavement__gradient-img')
const imageElements = pavementSection.querySelectorAll('.pavement__image')

const nextButton = pavementSection.querySelector('.pavement__switch_next')

const backButton = pavementSection.querySelector('.pavement__switch_back')

function identificationObj(title) {
    for (let i = 0; pavement.length > i; i++) {
        if (pavement[i].heading === title) {
            return i;
        }
    }
    return
}

let numObj = identificationObj(headingElement.textContent);

function changePavement(numObj) {
    headingElement.textContent = pavement[numObj].heading;
    textElement.textContent = pavement[numObj].text;
    gradientElement.src = pavement[numObj].gradient;
    for (let i = 0; 3 > i; i++) {
        imageElements.item(i).src = pavement[numObj].image;
        numObj++
        if (numObj === pavement.length) {
            numObj = 0;
        }
    }
}

function nextPavement() {
    numObj++;
    if (numObj === pavement.length) {
        numObj = 0;
    }
    changePavement(numObj);
}

function backPavement() {
    numObj--;
    if (numObj === -1) {
        numObj = 2;
    }
    changePavement(numObj);
}

nextButton.addEventListener('click', function() {
    nextPavement();
});

backButton.addEventListener('click', function() {
    backPavement();
});




// Темная тема

