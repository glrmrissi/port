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
