'use strict';

// Функция для изоляции переменных в своей области видимости

(function () {

    window.setupBlock = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');
    var setupUserName = document.querySelector('.setup-user-name');



    window.setup = {};
    
    window.setup.getRandomNumber = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };


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

})();


// Заметки
/* почему при клике на .setup-open-icon срабатывает код как на клике на .setup-open? */
/* пиздец непонятно че с сервером делаю */
/* ? почему иногда не получается прочитать name у wizard[i] в функции load ? */
/* херли редактор выдает ошибку необъявленной переменной? Как решить? wizard.colorEyes (80) ь*/
/* скрин 16 задание 7 учебный проект. Не понимаю возвращение об.екта, к которго можно подписаться на событие 
 * изменения цвета */