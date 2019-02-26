'use strict';

// Функция для изоляции переменных в своей области видимости

(function () {

    window.setupBlock = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    // var setupOpenIcon = document.querySelector('.setup-open-icon');
    var setupClose = document.querySelector('.setup-close');
    var setupUserName = document.querySelector('.setup-user-name');


    
    // var fireballColors = [
    //     '#ee4830',
    //     '#30a8ee',
    //     '#5ce6c0',
    //     '#e848d5',
    //     '#e6e848'
    // ];
    //
    // var coatColors = [
    //     'rgb(101, 137, 164)',
    //     'rgb(241, 43, 107)',
    //     'rgb(146, 100, 161)',
    //     'rgb(56, 159, 117)',
    //     'rgb(215, 210, 55)',
    //     'rgb(0, 0, 0)'
    // ];
    //
    // var eyesColors = [
    //     'black',
    //     'red',
    //     'blue',
    //     'yellow',
    //     'green'
    // ];

    /* Получить случайное число */

    window.setup = {};
    
    window.setup.getRandomNumber = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };

    /* Создать случайный объект (волшебника) */

    // var createObj = function () {
    //     return {
    //         'name': names[getRandomNumber(0, names.length - 1)] + ' ' + lastNames[getRandomNumber(0, lastNames.length - 1)],
    //         'coatColor': coatColors[getRandomNumber(0, coatColors.length - 1)],
    //         'eyesColors': eyesColors[getRandomNumber(0, eyesColors.length - 1)]
    //     };
    // };


// Начинаем действия

    /* Показываем скрытые элементы */
    //
    // document.querySelector('.setup-similar').classList.remove('hidden');
    //
    // /* Создать волшебника для списка похожих */
    //
    // var renderWizard = function (wizard) {
    //     var wizardElement = similarWizardTemplate.cloneNode(true);
    //     wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    //     wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    //     wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    //
    //     return wizardElement;
    // };
    //
    // var errorFragment = document.createDocumentFragment();
    // var errorMessage = document.createElement('div');
    // errorMessage.style.position = 'absolute';
    // errorMessage.style.backgroundColor = 'white';
    // errorMessage.style.width = '200px';
    // errorMessage.style.height = '200px';
    // errorMessage.style.top = '50%';
    // errorMessage.style.left = '50%';
    // errorMessage.style.color = 'black';
    // errorMessage.style.zIndex = '200';
    // errorFragment.appendChild(errorMessage);

    /* Создаем пустое "ведро" (document fragment) и прикрепляем к нему СКАЧАННЫХ волшебников */
    //
    // window.backend.load(function (wizards) {
    //     var documentFragment = document.createDocumentFragment();
    //
    //     var randomCounter = getRandomNumber(0, wizards.length);
    //
    //     for (var i = randomCounter; i < randomCounter + 4; i++) {
    //         documentFragment.appendChild(renderWizard(wizards[i]));
    //     }
    //     similarWizardsList.appendChild(documentFragment);
    // }, function (message) {
    //     document.querySelector('body').insertBefore(errorFragment, document.querySelector('.overlay'));
    //     errorMessage.textContent = message;
    // });
    //
    //
    //
    // form.addEventListener('submit', function (evt) {
    //     window.backend.save(new FormData(form) /*это data из save*/, function (response) {
    //         window.setupBlock.classList.add('hidden');
    //     });
    //     evt.preventDefault();
    // } /* а это onLoad из save */);



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

    // var changeCoatColor = function (evt) {
    //     evt.target.style.fill = coatColors[window.setup.getRandomNumber(0, coatColors.length)];
    //     inputCoat = evt.target.style.fill;
    // };
    //
    // coatColor.addEventListener('click', function (evt) {
    //     changeCoatColor(evt);
    // });
    //
    // var changeEyeColor = function (evt) {
    //     evt.target.style.fill = eyesColors[window.setup.getRandomNumber(0, eyesColors.length)];
    //     inputEye = evt.target.style.fill;
    // };
    //
    // eyeColor.addEventListener('click', function (evt) {
    //     changeEyeColor(evt);
    // });
    //
    // var changeFireballColor = function (evt) {
    //     var color = fireballColors[window.setup.getRandomNumber(0, fireballColors.length)];
    //     /* для передачи корректного значения в форму */
    //     /* видимо setup-fireball-wrap сам ставит цвет в rgb */
    //     evt.currentTarget.style.backgroundColor = color;
    //     inputFireball.value = color;
    // };
    //
    // fireballColor.addEventListener('click', function (evt) {
    //     changeFireballColor(evt);
    // });
})();


// Заметки
/* почему при клике на .setup-open-icon срабатывает код как на клике на .setup-open? */
/* пиздец непонятно че с сервером делаю */
/* ? почему иногда не получается прочитать name у wizard[i] в функции load ? */
/* херли редактор выдает ошибку необъявленной переменной? Как решить? wizard.colorEyes (80) ь*/