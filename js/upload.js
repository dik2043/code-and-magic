'use strict';

// Файл отвечает за отправку данных из формы на сервер

(function () {

    var URL = 'https://js.dump.academy/code-and-magick';

    window.upload = function (data, onSuccess) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            onSuccess(xhr.response);
        });

        xhr.open('POST', URL);
        xhr.send(data);
    };

})();