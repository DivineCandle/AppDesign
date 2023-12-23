const exitButton = document.querySelector('.box1-1 img');
const clearText = document.querySelector('.clear');
const searchLine = document.querySelector('.inp');
const commentBoard = document.querySelector('.box1-3 img');
const searchButton = document.querySelector('.icon img');
const ZhuanZhangButton = document.querySelector('.transMoney');
const ShouFuKuanButton = document.querySelector('.payCode');
const ZhangHuGuanLiButton = document.querySelector('.account');
const ChaKanLiuShuiButton = document.querySelector('.flow');

function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../三模登录页面/三模登录页面.html';
  }, 100);
})

searchButton.addEventListener('click', () => {
  if (searchLine.value !== '') {
    location.href = `../${searchLine.value}页面/${searchLine.value}页面.html`;
  }
})

searchLine.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && searchLine.value !== '') {
    location.href = `../${searchLine.value}页面/${searchLine.value}页面.html`;
  }
})

clearText.addEventListener('click', () => {
  searchLine.value = '';
})

commentBoard.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = './留言板页面/留言板页面.html';
  }, 100);
})

ZhuanZhangButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../转账页面/转账页面.html';
  }, 100);
})

ShouFuKuanButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../收付款页面/收付款页面.html';
  }, 100);

})

ZhangHuGuanLiButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../账户管理页面/账户管理页面.html';
  }, 100);

})

ChaKanLiuShuiButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../查看流水页面/查看流水页面.html';
  }, 100);

})