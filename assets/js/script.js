let count = 1;
const totalSlides = 8;

document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImg();
}, 6000);

function nextImg() {
  const radioSelecionado = document.querySelector('input[name="radio-btn"]:checked');

  if (!radioSelecionado || parseInt(radioSelecionado.id.replace('radio', '')) === totalSlides) {
      count = 1;
  } else {
      count = parseInt(radioSelecionado.id.replace('radio', '')) + 1;
  }


    document.getElementById("radio" + count).checked = true;
    updateLabelBackground();
}

function updateLabelBackground() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var manualLabels = document.querySelectorAll('.manual_btn');

    radioButtons.forEach(function (radio, index) {
      if (radio.checked) {
        manualLabels[index].classList.add('checked');
      } else {
        manualLabels[index].classList.remove('checked');
      }
    });
}

updateLabelBackground();

document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
    radio.addEventListener('change', updateLabelBackground);
});

let dark = document.getElementById("darkmode")

dark.addEventListener('click', () =>{
  if (dark.classList.contains('active')) {
    dark.classList.remove('active');
    dark.classList.add('reverse');
} else {
    dark.classList.remove('reverse');
    dark.classList.add('active');
}
      document.body.classList.toggle('dark')
      
  })

  let popup = document.getElementById('popup')

  function showPopup(imageSrc) {
    document.getElementById('popupImg').src = imageSrc;
    popup.style.display = 'flex';
    document.body.classList.add('no-scroll');
    popup.style.transition = "1s";
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('no-scroll');
}
