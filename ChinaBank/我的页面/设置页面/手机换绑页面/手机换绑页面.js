const exitButton = document.querySelector('.box1-1 img');
const getVarifyButton = document.querySelector('.box2-2 p');//获取验证码
const phoneNumber = document.querySelector('.box2-2 .ta');//新手机号
const confirmButton = document.querySelector('.box2-4 button');//确定按钮
const varifyNumber = document.querySelector('.box2-3 textarea')//输入的验证码

let varifyToBack;

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../设置页面.html';
  }, 100);
})
function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}
function getRandomVarify() {
  return (Math.floor(Math.random() * (999999 - 100000 + 1) + 100000));
}

getVarifyButton.addEventListener('click', () => {
  varifyToBack = +getRandomVarify();  //生成给后端的验证码
  console.log(varifyToBack);
  axios({
    url: 'http://47.113.198.244:8080/pre/send',
    method: 'POST',
    params: {
      phoneNumber: phoneNumber.value,
      code: varifyToBack
    }
  }).then(result => {
    console.log(result);
    if (result.data.data == "OK") {

    } else {
      alert(result.data.data);
    }

  })
})

confirmButton.addEventListener('click', () => {
  if (Number(varifyNumber.value) === varifyToBack) {//直接前端做验证
    let token = localStorage.getItem('token');
    axios({
      url: 'http://47.113.198.244:8080/user/modifyPhoneNumber',
      method: 'PUT',
      headers: {
        token
      },
      params: {
        newPhoneNumber: phoneNumber.value,
      }
    }).then(result => {
      if (result.data.code == 200) {
        console.log(result.data.msg);
        document.getElementById("success").classList.add("show");
        document.getElementById("overlay").classList.add("show");
        setTimeout(() => {
          document.getElementById("success").classList.remove("show");
          document.getElementById("overlay").classList.remove("show");
        }, 1500)
      } else {
        console.log(result);
        alert(result.data.msg);
      }
    })



  }

})



let aliveDetector = setInterval(() => {
  if (phoneNumber.value !== '') {
    getVarifyButton.disabled = false;
    getVarifyButton.style.color = 'blue';
  } else {
    getVarifyButton.disabled = true;
    getVarifyButton.style.color = 'grey';
  }

  if (phoneNumber.value !== '' && varifyNumber.value !== '') {
    getVarifyButton.disabled = false;
    confirmButton.style.opacity = "1";
  } else {
    getVarifyButton.disabled = true;
    confirmButton.style.opacity = "0.5";
  }



}, 50)
