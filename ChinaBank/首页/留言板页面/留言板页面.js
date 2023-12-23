const exitButton = document.querySelector('.box1-1 img');
const submitButton = document.querySelector('.box2-2 button');
const commentArea = document.querySelector('.box2-1 textarea');


let aliveDetector = setInterval(() => {
  if (commentArea.value !== '') {
    submitButton.style.opacity = '1';
    submitButton.disabled = false;
  } else {
    submitButton.style.opacity = '0.5';
    submitButton.disabled = true;
  }
}, 50)

function showDiv() {
  document.getElementById("success").classList.add("show");
  document.getElementById("overlay").classList.add("show");
  setTimeout(() => {
    document.getElementById("success").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
    commentArea.value = '';
  }, 1500)
}

function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../首页.html';
  }, 100);
})