const modal1 = {
  title: 'Looking to increase your brain?',
  text:
    'Looking for ways to age your brain in the good way? Sign up for my newsletter. We deliver you once a week tips that in 15 minutes add points to your IQ, EQ and your SexyQ. Drop you email below!  ',
  secret: 'We have conducted a retina scan and can see that there is NO way we will be able to help you. We will NOT be signing you up for '
};

const modal2 = {
  title: 'DISCOUNT ON BUG FREE CODE',
  text: `OMG! It's discount. We never run discounts unless its Easter, Halloween, Black Friday, Cyber Monday, Christmas... Get your discount code for between 5% and 95% off. Enter your email below`,
  secret: 'AH CRAP! The discount has now expired. Please enjoy your bug filled code in the future'
};

const modal3 = {
  title: 'Get Your Free E-book',
  text:
    'We are giving away all of our secrets in our free Ebook. If you are looking to learn JavaScript in 30 minutes then, then download your FREE ebook now!',
  secret: 'We have limited the amount of downloads due to too much demand. Good Luck with your JavaScript in the future!'
};

const title = document.querySelector('.modal-title');
const text = document.querySelector('.modal-text');
const submitBtn = document.querySelector('.submit-btn');
const modal = document.getElementById('myModal');

const modal1Btn = document.getElementById('modal-1');
const modal2Btn = document.getElementById('modal-2');
const modal3Btn = document.getElementById('modal-3');

const secretTitle = "Oh No!";
let modalNumber;

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

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
modal1Btn.onclick = function () {
  modal.style.display = 'block';
  changeUI(modal1, title, text);
  modalNumber = modal1;
};

modal2Btn.onclick = function () {
  modal.style.display = 'block';
  changeUI(modal2, title, text);
  modalNumber = modal2;
};

modal3Btn.onclick = function () {
  modal.style.display = 'block';
  changeUI(modal3, title, text);
  modalNumber = modal3;
};

//action when click the submit button
submitBtn.onclick = function () {
  title.textContent = secretTitle;
  text.textContent = modalNumber.secret;
}

// making esc dismiss modal
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === 'Escape') {
    modal.style.display = 'none';
  }
});

function changeUI(modal, title, text) {
  title.textContent = modal.title;
  text.textContent = modal.text;
}