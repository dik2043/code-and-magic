var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_Y = 255;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;
var BAR_HEIGHT = 20;
var BAR_WIDTH = 40;
var TIME_Y = 80;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

/* Отрисовать облако по параметрам */

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

/* Получить максимальный элемент массива перебором */

var getMaxElem = function (arr) {
    var maxElem = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElem) {
            maxElem = arr[i];
        }
    }
    return maxElem;
};


/* Отрисовать статистику при попадании в забор */

var renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgb(0, 0, 0, 0.7');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';   /* черный */
    ctx.textBaseline = 'hanging';   /* отсчет координат от верха текста */
    ctx.fillText('Ура, вы победили!', CLOUD_X + FONT_GAP * 1, CLOUD_Y + FONT_GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP * 1, CLOUD_Y + FONT_GAP * 3);

    ctx.fillStyle = '#000';   /* черный */

    var playerIndex = 0;
    var playerName = 'Вы';

    var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

    var maxTime = getMaxElem(times);  /* times приходит из game.js */
    // var TIME_Y = BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime) - GAP;

    for (var i = 0; i < players.length; i++) {
        ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, TIME_Y + (BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime));
        ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + GAP);
        ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, - (BAR_MAX_HEIGHT * times[i]) / maxTime);
    }
};
