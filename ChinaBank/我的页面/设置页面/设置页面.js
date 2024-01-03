const exitButton = document.querySelector('.box1-1 img');
const ShouJiHuanBangButton = document.querySelector('.box2-2-1');
const XiuGaiMiMaButton = document.querySelector('.box2-2-2');
const XiuGaiMoRenKaButton = document.querySelector('.box3-2-1');
const YinHangKaGuaShiButton = document.querySelector('.box3-2-2');
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

ShouJiHuanBangButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = './手机换绑页面/安全验证页面.html';
  }, 100);
})

XiuGaiMiMaButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = './修改密码页面/安全验证页面.html';
  }, 100);
})

XiuGaiMoRenKaButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = './修改默认银行卡/修改默认银行卡.html';
  }, 100);
})

YinHangKaGuaShiButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = './银行卡挂失/银行卡挂失.html';
  }, 100);
})

TuiChuDengLuButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    localStorage.clear();
    location.href = '../../index.html';
  }, 100);
})