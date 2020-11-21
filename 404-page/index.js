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

    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      TweenMax.to($bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      TweenMax.to($smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    }

    // Hover an element
    function onMouseHover(e) {
      TweenMax.to($bigBall, 0.3, {
        scale: 4,
      });
      e.setAttribute('class', 'hidden')
    }
    function onMouseHoverOut(e) {
      TweenMax.to($bigBall, 0.3, {
        scale: 1,
      });
      e.setAttribute('class', 'appear')
    }
    
  };
  window.addEventListener('load', init);
})(window, document);
