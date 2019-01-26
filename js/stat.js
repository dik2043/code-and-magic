var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElem = function (arr) {
    var maxElem = arr[0];
    // return maxElem;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElem) {
            maxElem = arr[i];
        }
    }
    return maxElem;
};


var renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgb(0, 0, 0, 0.3');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    ctx.font = '27px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
    ctx.fillText('Список результатов:', 150, 80);

    ctx.fillStyle = '#000';

    var playerIndex = 0;
    var playerName = 'Вы';

    var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

    var maxTime = getMaxElem(times);

    // for (var i = 0; i < players.length; i++) {
    //     ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * i);
    //     ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
    // }
};



// ctx.font = '27px PT Mono';
    // ctx.fillText('Ура вы победили!', 150, 50);
    // ctx.fillText('Список результатов:', 150, 80);
