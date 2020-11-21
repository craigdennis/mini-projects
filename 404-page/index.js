(function (window, document, undefined) {
  'use strict';
  var init = function () {
    var canvas = document.querySelector('#x');
    var icon_template = document.querySelector('#template');
    var icon_width = 200;
    var icon_height = 200;
    var the_images = [
      './img/gingerbread-man.png',
      './img/penguin.png',
      './img/polar-bear.png',
      './img/reindeer.png',
      './img/santa-claus.png',
      './img/snowman.png',
    ];

    let image = {};
    let newImage = {};

    var total_number_of_images = the_images.length;
    var max_height = canvas.offsetHeight - icon_height;
    var max_width = canvas.offsetWidth - icon_width;

    var randomCoordinate = function () {
      image.x = Math.floor(Math.random() * max_width);
      image.y = Math.floor(Math.random() * max_height);
    };
    var createImage = function (index, x, y) {
      var node = icon_template.cloneNode(true);
      node.removeAttribute('id');
      node.removeAttribute('hidden');
      node.style.top = y + 'px';
      node.style.left = x + 'px';
      node.setAttribute('src', the_images[index]);
      canvas.appendChild(node);
    };
    for (var i = 0; i < total_number_of_images; i++) {
      randomCoordinate()
      createImage(i, image.x, image.y);
    }
  };
  window.addEventListener('load', init);
})(window, document);
