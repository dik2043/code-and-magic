'use strict';

(function () {
    
    var wizard = {
        onEyesChange: function (color) {
            return color;
        },
        onCoatChange: function (color) {
            return color;
        },
        onFireballChange: function (color) {
            return color;
        }
    };

    var inputCoat = document.querySelector('input[name=coat-color]');
    var inputEye = document.querySelector('input[name=eyes-color]');
    var inputFireball = document.querySelector('input[name=fireball-color]');

    var FIREBALL_COLORS = [
        '#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'
    ];

    var COAT_COLORS = [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
    ];

    var EYES_COLORS = [
        'black',
        'red',
        'blue',
        'yellow',
        'green'
    ];


    var getRandomElement = function (arr) {
        var randomElementIndex = Math.floor(Math.random() * arr.length);
        return arr[randomElementIndex];
    };
    


    var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
    wizardCoatElement.addEventListener('click', function (evt) {
        var newColor = getRandomElement(COAT_COLORS);
        evt.target.style.fill = newColor;
        inputCoat = evt.target.style.fill;
        wizard.onCoatChange(newColor);
    });


    var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
    wizardEyesElement.addEventListener('click', function (evt) {
        var newColor = getRandomElement(EYES_COLORS);
        evt.target.style.fill = newColor;
        inputEye = evt.target.style.fill;
        wizard.onEyesChange(newColor);
    });


    var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
    wizardFireballElement.addEventListener('click', function (evt) {
        var newColor = getRandomElement(FIREBALL_COLORS);
        /* для передачи корректного значения в форму */
        /* видимо setup-fireball-wrap сам ставит цвет в rgb */
        evt.currentTarget.style.backgroundColor = newColor;
        inputFireball.value = newColor;
        wizard.onFireballChange(newColor);
    });



    window.wizard = wizard;
})();