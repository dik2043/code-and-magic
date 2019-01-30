var setup = document.querySelector('.setup');
var template = document.querySelector('#similar-wizard-template');

var wizards = [];   /* Пустой массив для заполнения счетчиком */

var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристофор',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
];

var lastNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
];

var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

/* Получить случайное число */

var getRandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

/* Создать случайный объект (волшебника) */

var createObj = function () {
    var obj = {
        'name': names[getRandomNumber(0, names.length)] + ' ' + lastNames[getRandomNumber(0, lastNames.length - 1)],
        'coatColor': coatColors[getRandomNumber(0, coatColors.length - 1)],
        'eyesColors': eyesColors[getRandomNumber(0, eyesColors.length - 1)]
    }
    return obj;
};

// Начинаем действия

setup.classList.remove('hidden');

/* Создаем массив из четырех случайных объектов (волшебников) */

for (var i = 0; i < 4; i++) {
    wizards[i] = createObj();
} 
console.log(wizards);


