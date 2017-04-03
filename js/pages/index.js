$(function() {
    var constellation = new Constellation({targetDiv: 'canvasdiv', pointSize: 2, screenBlur: 0.0, fpsDiv: 'fps', showFps: true, backgroundColor: '#2c3e50'});
    constellation.init();
    constellation.start();
});

$(".animsition").animsition();

var opener = document.querySelector(".opener");
var title = document.querySelector(".title");
var menu = document.querySelector(".menu");

opener.addEventListener('click', function () {
    opener.classList.toggle('is-active');
    title.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});