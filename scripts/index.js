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
const pavementHeadingElement = pavementSection.querySelector('.pavement__heading')
const pavementTextElement = pavementSection.querySelector('.pavement__text')
const pavementGradientElement = pavementSection.querySelector('.pavement__gradient-img')
const pavementImageElements = pavementSection.querySelectorAll('.pavement__image')

const nextButton = pavementSection.querySelector('.pavement__switch_next')

const backButton = pavementSection.querySelector('.pavement__switch_back')

function identificationPavementObj(title) {
    for (let i = 0; pavement.length > i; i++) {
        if (pavement[i].heading === title) {
            return i;
        }
    }
}

let numObj = identificationPavementObj(pavementHeadingElement.textContent);

function changePavement(numObj) {
    pavementHeadingElement.textContent = pavement[numObj].heading;
    pavementTextElement.textContent = pavement[numObj].text;
    pavementGradientElement.src = pavement[numObj].gradient;
    for (let i = 0; 3 > i; i++) {
        pavementImageElements.item(i).src = pavement[numObj].image;
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


// Велосипеды

const bikes = {
    highway: {
        bikeImage: [
            './images/Cervelo Caledonia-5.png',
            './images/Cannondale Systemsix Himod.png',
            './images/Trek Domane SL-7.png'
        ],
        bikeName: [
            'Cervelo Caledonia-5',
            'Cannondale Systemsix Himod',
            'Trek Domane SL-7'
        ],
        bikeHref: [
            'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',
            'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
            'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF'
        ]
    },
    gravel: {
        bikeImage: [
            './images/Cervelo Aspero GRX 810.png',
            './images/Specialized S-Works Diverge.png',
            './images/Cannondale Topstone Lefty 3.png'
        ],
        bikeName: [
            'Cervelo Aspero GRX 810',
            'Specialized S-Works Diverge',
            'Cannondale Topstone Lefty 3'
        ],
        bikeHref: [
            'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
            'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
            'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
        ]
    },
    tt: {
        bikeImage: [
            './images/Specialized S-Works Shiv.png',
            './images/BMC Timemachine 01 ONE.png',
            './images/Cervelo P-Series.png'
        ],
        bikeName: [
            'Specialized S-Works Shiv',
            'BMC Timemachine 01 ONE',
            'Cervelo P-Series'
        ],
        bikeHref: [
            'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9',
            'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
            'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
        ]
    }
}


const bikesSection = document.querySelector('.bikes');
const bikesLinkElements = bikesSection.querySelectorAll('.bikes__pavement');
const bikesImageElements = bikesSection.querySelectorAll('.bikes__image');
const bikesTextElements = bikesSection.querySelectorAll('.bikes__description');
let bikesLinkElement = bikesSection.querySelector('.bikes__pavement_active');
let nameObj;

function renderBikesImage() {
    bikesLinkElement = bikesSection.querySelector('.bikes__pavement_active');
    nameObj = bikesLinkElement.id;
    for (let i = 0; bikesImageElements.length > i; i++) {
        bikesImageElements.item(i).src = bikes[nameObj].bikeImage[i];
        bikesImageElements.item(i).alt = bikes[nameObj].bikeName[i];
        bikesImageElements.item(i).parentElement.parentElement.href = bikes[nameObj].bikeHref[i];
        bikesTextElements.item(i).textContent = bikes[nameObj].bikeName[i];
    }
}

renderBikesImage();

function changeBikesImage(link) {
    for (let i = 0; bikesLinkElements.length > i; i++) {
        bikesLinkElements.item(i).classList.remove('bikes__pavement_active');
    }
    link.classList.add('bikes__pavement_active');
    console.log(link);
    renderBikesImage();
}

const bikeHighwayLinkElement = bikesSection.querySelector('#highway');
const bikeGravelLinkElement = bikesSection.querySelector('#gravel');
const bikeTtLinkElement = bikesSection.querySelector('#tt');

bikeHighwayLinkElement.addEventListener('click', function() {
    changeBikesImage(bikeHighwayLinkElement);
});
bikeGravelLinkElement.addEventListener('click', function() {
    changeBikesImage(bikeGravelLinkElement);
});
bikeTtLinkElement.addEventListener('click', function() {
    changeBikesImage(bikeTtLinkElement);
});

//e-mail 

const emailForm = document.querySelector('.footer__form');
const emailInput = emailForm.querySelector('.footer__e-mail');
const emailSubmit = emailForm.querySelector('.footer__submit');

emailInput.onfocus = function() {
    emailSubmit.classList.remove('footer__submit_hidden');
}

emailInput.onblur = function() {
    if (emailInput.value === '') {
    emailSubmit.classList.add('footer__submit_hidden');
    }
}

emailSubmit.addEventListener('submit', function() {
    emailInput.placeholder = 'Круто!';
    emailInput.value = '';
    emailSubmit.classList.add('footer__submit_hidden');
})