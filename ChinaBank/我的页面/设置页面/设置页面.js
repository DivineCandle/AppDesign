const exitButton = document.querySelector('.box1-1 img');
const ShouJiHuanBangButton = document.querySelector('.box2-2-1 img');
const XiuGaiMiMa = document.querySelector('.box2-2-2 img');
const TuiChuDengLuButton = document.querySelector('.box3-2-3');

function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../我的页面.html';
  }, 100);
})

TuiChuDengLuButton.addEventListener('click', () => {
  /*
      加个“确认退出”的弹窗
  */
  // location.href = '../../三模登录页面/三模登录页面.html';
})