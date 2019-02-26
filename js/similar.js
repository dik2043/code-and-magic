'use strict';

(function () {
    
    
    var coatColor;
    var eyesColor;
    var fireballColor;
    var wizards = [];
    
    var getRank = function (wizard) {
        var rank = 0;
        if (wizard.colorCoat === coatColor) {
            rank += 2;
        }
        if (wizard.colorEyes === eyesColor) {
            rank += 1;
        } 
        if (wizard.colorFireball === fireballColor) {
            rank += 1;
        }
        return rank;
    };

    var nameComparator = function (left, right) {
        if (left > right) {
            return 1;
        } else if (left < right) {
            return -1;
        } else {
            return 0;
        }
    };
    
    var updateWizards = function () {
        window.similar.render(wizards.sort(function (left, right) {
            var rankDif = getRank(right) - getRank(left);
            if (rankDif === 0) {
                rankDif = nameComparator(left.name, right.name);
            } 
            return rankDif;
        }));
        console.log(wizards);
    };


    
    window.wizard.onEyesChange = function (color) {
        eyesColor = color;
        updateWizards();
    };

    window.wizard.onCoatChange = function (color) {
        coatColor = color;
        updateWizards();
    };

    window.wizard.onFireballChange = function (color) {
        fireballColor = color;
        updateWizards();
    };
    
    
    var successHandler = function (data) {
        wizards = data;
        window.similar.render(wizards);
        console.log(wizards);
    };
    
    var errorHandler = function (error) {
        var errorFragment = document.createDocumentFragment();
        var errorMessage = document.createElement('div');
        errorMessage.style.position = 'absolute';
        errorMessage.style.backgroundColor = 'white';
        errorMessage.style.width = '200px';
        errorMessage.style.height = '200px';
        errorMessage.style.top = '50%';
        errorMessage.style.left = '50%';
        errorMessage.style.color = 'black';
        errorMessage.style.zIndex = '200';
        errorMessage.textContent = error;
        errorFragment.appendChild(errorMessage);
    };
    
    // var URL = 'https://js.dump.academy/code-and-magick/data';
    window.backend.load(successHandler, errorHandler);
    
    
    
    // window.backend.load(function (wizards) {
    //     var documentFragment = document.createDocumentFragment();
    //
    //     var randomCounter = window.setup.getRandomNumber(0, wizards.length);
    //
    //     for (var i = randomCounter; i < randomCounter + 4; i++) {
    //         documentFragment.appendChild(window.similar.renderWizard(wizards[i]));
    //     }
    //     similarWizardsList.appendChild(documentFragment);
    // }, function (message) {
    //     document.querySelector('body').insertBefore(errorFragment, document.querySelector('.overlay'));
    //     errorMessage.textContent = message;
    // });


    var form = document.querySelector('.setup-wizard-form');
    
    form.addEventListener('submit', function (evt) {
        window.backend.save(new FormData(form) /*это data из save*/, function (response) {
            window.setupBlock.classList.add('hidden');
        });
        evt.preventDefault();
    } /* а это onLoad из save */);

})();