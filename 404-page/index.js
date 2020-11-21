(function (window, document, undefined) {
  'use strict';
  var init = function () {
    var canvas = document.querySelector('#x');
    var icon_template = document.querySelector('#template');
    var icon_width = 64;
    var icon_height = 64;
    var the_images = [
      './img/gingerbread-man.png',
      './img/penguin.png',
      './img/polar-bear.png',
      './img/reindeer.png',
      './img/santa-claus.png',
      './img/snowman.png',
    ];
    let image = [];
    let newImage = [];
    var total_number_of_images = the_images.length;
    var max_height = canvas.offsetHeight - icon_height;
    var max_width = canvas.offsetWidth - icon_width;

    var randomCoordinate = function () {
      let x = Math.floor(Math.random() * max_width);
      let y = Math.floor(Math.random() * max_height);
      newImage.push([x, y]);
    };
    var createImage = function (index) {
      var node = icon_template.cloneNode(true);
      node.removeAttribute('id');
      node.removeAttribute('hidden');
      node.style.top = newImage[i][1] + 'px';
      node.style.left = newImage[i][0] + 'px';
      node.setAttribute('src', the_images[index]);
      canvas.appendChild(node);
    };
    for (var i = 0; i < total_number_of_images; i++) {
      randomCoordinate();
      createImage(i);
    }

    var flashlight = document.getElementById('flashlight');

    flashlight.onmousemove = function (event) {
      this.style.backgroundPosition =
        event.clientX - 120 + 'px ' + (event.clientY - 310) + 'px';
    };
  };
  window.addEventListener('load', init);
})(window, document);
