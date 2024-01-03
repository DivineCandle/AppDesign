const passWordOne = document.querySelector('.box2-3 .t');//输入密码
const passWordTwo = document.querySelector('.box2-3 .tt');//重复代码
const confirmButton = document.querySelector('.box2-4 button');
const exitButton = document.querySelector('.box1-1 img');


function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../设置页面.html';
  }, 100);
})

confirmButton.addEventListener('click', () => {
  if (passWordOne.value === passWordTwo.value) {
    let token = localStorage.getItem('token');
    axios({
      url: 'http://47.113.198.244:8080/user/modifyPassword',
      method: 'PUT',
      headers: {
        token
      },
      params: {
        newPassword: passWordOne.value,
      }
    }).then(result => {
      console.log(result);
      if (result.data.code == 200) {
        console.log(result.data.msg);
        document.getElementById("success").classList.add("show");
        document.getElementById("overlay").classList.add("show");
        setTimeout(() => {
          document.getElementById("success").classList.remove("show");
          document.getElementById("overlay").classList.remove("show");
        }, 1500)
        setTimeout(() => {
          document.body.style.marginRight = "-15%";
          document.body.style.opacity = "0";
          setTimeout(function () {
            location.href = '../设置页面.html';
          }, 100);
        }, 3000)
      } else {
        console.log(result);
        alert(result.data.msg);
      }
    })
    console.log(11);
    //成功动画



  } else {
    alert('两次密码输入有误，请重新输入！');
  }
  console.log(222);
})

let aliveDetector = setInterval(() => {
  if (passWordOne.value !== '' && passWordTwo.value !== '') {
    confirmButton.disabled = false;
    confirmButton.style.opacity = '1';
  } else {
    confirmButton.disabled = true;
    confirmButton.style.opacity = '0.5';
  }
}, 50)