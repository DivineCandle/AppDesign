const confirmButton = document.querySelector('.box3-5 button'); //筛选框的确认
const chooseBoard = document.querySelector('.box3');  //筛选板
const chooseButton = document.querySelector('.box1-3 img'); //漏斗按钮
const exitButton = document.querySelector('.box1-1 img');

const textYear = document.querySelector('#year');
const textYear1 = document.querySelector('#year1');
const textMonth = document.querySelector('#month');
const textMonth1 = document.querySelector('#month1');
const textDay = document.querySelector('#day');
const textDay1 = document.querySelector('#day1');
const moneyLeft = document.querySelector('.box3-4-2-1 input');
const moneyRight = document.querySelector('.box3-4-2-3 input');

let flagOfChoose = true;

let aliveDetector = setInterval(() => {
  if (textDay.value != '' && textDay1.value != '' && moneyLeft.value != '' && moneyRight.value != '') {
    //confirmButton.style.background = 'linear-gradient(129.12deg, #446dff, rgba(99, 125, 255, .75))';
    confirmButton.style.opacity = '1';
    confirmButton.disabled = false;
  } else {
    confirmButton.style.opacity = '0.5';
    confirmButton.disabled = true;
  }
}, 50);

function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

confirmButton.addEventListener('click', () => {
  // chooseBoard.classList.remove('slideUp');
  // chooseBoard.classList.add('slideDown');
  if (Number(textYear1.value) < Number(textYear.value)) {
    alert('请检查年份区间是否有误');
  } else if (Number(textYear1.value) === Number(textYear.value)) {
    if (Number(textMonth1.value) < Number(textMonth.value)) {
      alert('请检查月份区间是否有误');
    } else if (Number(textMonth1.value) === Number(textMonth.value)) {
      if (Number(textDay1.value) < Number(textDay.value)) {
        alert('请检查日期区间是否有误');
      } else {
        //同年同月同日的情况
        if (Number(moneyRight.value) < Number(moneyLeft.value)) {
          alert('请检查金额区间是否有误');
        } else {
          //传数据还没写
          chooseBoard.style.display = 'none';
        }
      }
    } else {
      //同年，后月份大的情况
      if (Number(moneyRight.value) < Number(moneyLeft.value)) {
        alert('请检查金额区间是否有误');
      } else {
        //传数据还没写
        chooseBoard.style.display = 'none';
      }
    }
  } else {
    //后年大
    if (Number(moneyRight.value) < Number(moneyLeft.value)) {
      alert('请检查金额区间是否有误');
    } else {
      //传数据还没写
      chooseBoard.style.display = 'none';
    }
  }

})

// console.log(chooseBoard.style.display);
// alert(chooseBoard.style.display);

chooseButton.addEventListener('click', () => {
  if (chooseBoard.style.display === '' || chooseBoard.style.display === 'none') {
    chooseBoard.classList.add('slideUp');
    chooseBoard.style.display = 'flex';
    console.log(222);
    console.log(chooseBoard.style.display)
  } else {
    chooseBoard.classList.remove('slideUp');
    chooseBoard.style.display = 'none';
    console.log(111);
    console.log(chooseBoard.style.display)
  }
})

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../首页/首页.html';
  }, 100);
})