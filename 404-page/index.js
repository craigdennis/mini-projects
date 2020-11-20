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

    var total_number_of_images = the_images.length;
    var max_height = canvas.offsetHeight - icon_height;
    var max_width = canvas.offsetWidth - icon_width;
    var randomCoordinate = function () {
      var r = [];
      var x = Math.floor(Math.random() * max_width);
      var y = Math.floor(Math.random() * max_height);
      r = [x, y];
      return r;
    };
    var createImage = function (index) {
      var node = icon_template.cloneNode(true);
      var xy = randomCoordinate();
      node.removeAttribute('id');
      node.removeAttribute('hidden');
      node.style.top = xy[1] + 'px';
      node.style.left = xy[0] + 'px';
      node.setAttribute('src', the_images[index]);
      canvas.appendChild(node);
    };
    for (var i = 0; i < total_number_of_images; i++) {
      createImage(i);
    }
  };
  window.addEventListener('load', init);
})(window, document);
