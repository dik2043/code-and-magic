'use strict';

// Файл отвечает за получение данных с сервера

(function () {

    var URL = 'https://js.dump.academy/code-and-magick/data';

    window.load = function (onSuccess, onError) {
        var xhr = new XMLHttpRequest();     /* почему new? */

        xhr.responseType = 'json';
        
        xhr.open('GET', URL);
        
        xhr.addEventListener('load', function () {
            onSuccess(xhr.response);
        });
        
        xhr.send();
    };

})();