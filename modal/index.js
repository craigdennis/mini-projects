const modal1 = {
  title: 'Modal Title',
  text:
    "This is my modal life. I am living it good and living it well. Don't you want want you modal life to look like me. Modal.",
};

const modal2 = {
  title: 'Modal Life',
  text:
    'I am a modal man who comes from modal life, what does he say, he says your a modal. Modal, modal, modal. yes please',
};

const modal3 = {
  title: 'Modal Help',
  text:
    'One day i was a modal man. It was a challenging life. It was all that i did and nothing could help me. I was helpless for this modal life.',
};

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var modal1 = document.getElementById('modal-1');
var modal1 = document.getElementById('modal-2');
var modal1 = document.getElementById('modal-3');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};



