'use strict';

// Функция для изоляции переменных в своей области видимости

(function () {

    window.setupBlock = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupOpenIcon = document.querySelector('.setup-open-icon');
    var setupClose = document.querySelector('.setup-close');
    var setupUserName = document.querySelector('.setup-user-name');
    var form = document.querySelector('.setup-wizard-form');
    var coatColor = document.querySelector('.setup-wizard .wizard-coat');
    var eyeColor = document.querySelector('.setup-wizard .wizard-eyes');
    var fireballColor = document.querySelector('.setup-fireball-wrap');
    var inputCoat = document.querySelector('input[name=coat-color]');
    var inputEye = document.querySelector('input[name=eyes-color]');
    var inputFireball = document.querySelector('input[name=fireball-color]');

    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
    /* долбанутая штука */

    var similarWizardsList = document.querySelector('.setup-similar-list');

    // var wizards = [];
    // /* Пустой массив для заполнения счетчиком */
    //
    // var names = [
    //     'Иван',
    //     'Хуан Себастьян',
    //     'Мария',
    //     'Кристофор',
    //     'Виктор',
    //     'Юлия',
    //     'Люпита',
    //     'Вашингтон'
    // ];
    //
    // var lastNames = [
    //     'да Марья',
    //     'Верон',
    //     'Мирабелла',
    //     'Вальц',
    //     'Онопко',
    //     'Топольницкая',
    //     'Нионго',
    //     'Ирвинг'
    // ];

    var fireballColors = [
        '#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'
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

    document.querySelector('.setup-similar').classList.remove('hidden');

    /* Создаем массив из четырех случайных объектов (волшебников) */

    // for (var i = 0; i < 4; i++) {
    //     wizards[i] = createObj();
    // }

    /* Создаем волшебника из верстки */

    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

        return wizardElement;
    };

    /* Создаем пустое "ведро" (document fragment) и прикрепляем к нему четырех СКАЧАННЫХ волшебников */

    window.load(function (wizards) {
        var documentFragment = document.createDocumentFragment();

        for (var i = 0; i < 4; i++) {
            documentFragment.appendChild(renderWizard(wizards[i]));
        }
        similarWizardsList.appendChild(documentFragment);
    });
    
    
    // var documentFragment = document.createDocumentFragment();
    // for (i = 0; i < wizards.length; i++) {
    //     documentFragment.appendChild(renderWizard(wizards[i]));
    // }

    /* Создаем DOM-элементы по шаблону */

    // var createDOMWizard = function (fragment) {
    //     similarWizardsList.appendChild(fragment);
    // };
    //
    // createDOMWizard(documentFragment);


    form.addEventListener('submit', function (evt) {
        window.upload(new FormData(form), function (response) {
            window.setupBlock.classList.add('hidden');
        });
        evt.preventDefault();
    });



// ДЗ 4     ДЗ 4     ДЗ 4     ДЗ 4     ДЗ 4     ДЗ 4
    
    /* Сначала опишем функции*/

    var onPopupEscPress = function (evt) {
        if (evt.keyCode === 27 && evt.target === setupUserName) {       /* если фокус на поле, то не закрываем */
            setupUserName.blur();
        } else if (evt.keyCode === 27) {       /* esc */
            closePopup();
        }
    };

    var onPopupEnterPress = function (evt) {
        if (evt.keyCode === 13 && !(setupBlock.classList.contains('hidden')) && !(evt.target === setupClose)) {
            console.log(evt.target);
            // form.submit();
        } else if (evt.keyCode === 13) {
        }
    };

    var openPopup = function () {
        setupBlock.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEnterPress, true);
        document.addEventListener('keydown', onPopupEscPress, true);
    };

    var closePopup = function () {
        setupBlock.style.top = '80px';
        setupBlock.style.left = '50%';
        setupBlock.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress, true);
        setupOpen.removeEventListener('click', closePopup);
    };

    /* Навешиваем обработчики на элементы */

    setupOpen.addEventListener('click', function () {
        openPopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 13) {       /* enter */
            openPopup();
        }
    });

    setupClose.addEventListener('click', function () {
        closePopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 13) {       /* enter */
            closePopup();
        }
    });


// Изменение цветов волшебника

    var changeCoatColor = function (evt) {
        evt.target.style.fill = coatColors[getRandomNumber(0, coatColors.length)];
        inputCoat = evt.target.style.fill;
    };

    coatColor.addEventListener('click', function (evt) {
        changeCoatColor(evt);
    });

    var changeEyeColor = function (evt) {
        evt.target.style.fill = eyesColors[getRandomNumber(0, eyesColors.length)];
        inputEye = evt.target.style.fill;
    };

    eyeColor.addEventListener('click', function (evt) {
        changeEyeColor(evt);
    });

    var changeFireballColor = function (evt) {
        var color = fireballColors[getRandomNumber(0, fireballColors.length)];
        /* для передачи корректного значения в форму */
        /* видимо setup-fireball-wrap сам ставит цвет в rgb */
        evt.currentTarget.style.backgroundColor = color;
        inputFireball.value = color;
    };

    fireballColor.addEventListener('click', function (evt) {
        changeFireballColor(evt);
    });
})();

// Заметки
/* почему при клике на .setup-open-icon срабатывает код как на клике на .setup-open? */
/* пиздец непонятно че с сервером делаю */