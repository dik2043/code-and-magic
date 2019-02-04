var setup = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');   /* долбанутая штука */

var similarWizardsList = document.querySelector('.setup-similar-list');

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
        'name': names[getRandomNumber(0, names.length - 1)] + ' ' + lastNames[getRandomNumber(0, lastNames.length - 1)],
        'coatColor': coatColors[getRandomNumber(0, coatColors.length - 1)],
        'eyesColors': eyesColors[getRandomNumber(0, eyesColors.length - 1)]
    };
    return obj;
};


// Начинаем действия

/* Показываем скрытые элементы */

setup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

/* Создаем массив из четырех случайных объектов (волшебников) */

for (var i = 0; i < 4; i++) {
    wizards[i] = createObj();
}


/* Создаем волшебника из верстки */

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;
    
    return wizardElement;
};

/* Создаем пустое "ведро" (document fragment) и прикрепляем к нему четырех генерируемых волшебников */

var documentFragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
    documentFragment.appendChild(renderWizard(wizards[i]));
}

/* Создаем DOM-элементы по шаблону */
var createDOMWizard = function (fragment) {
    similarWizardsList.appendChild(fragment);
};

createDOMWizard(documentFragment);