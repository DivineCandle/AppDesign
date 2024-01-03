//alert('1');
const getbtn = document.querySelector('.m-form .get-btn');//获取验证码按钮
const form = document.querySelector('.m-form');//验证码上级表单
const sjhm = document.querySelector('.m-form .ttt');//手机号码输入框
const yzm = document.querySelector('.m-form .tttt');//验证码输入框
const login = document.querySelector('.m-form .login-btn');//登录按钮
const ts = document.querySelector('.m-form .hidden-text');//正则验证
const yhxz = document.querySelector('.m-form #sure');//用户须知按钮


let varifyToBack; //给后端的验证码
let flag = false;
let yzmflag = false;
//getbtn.style.color = 'grey';
//login.disabled = true;
//test
//11
//12345

let aliveDetector = setInterval(function () {
  if (yhxz.checked === true) {
    flag = true;
  } else {
    flag = false;
  }
  //console.log(yhxz.checked);

  if (!(/^1[0-9]{10}$/.test(Number(sjhm.value))) && sjhm.value !== '' && flagOfSpecial === true) {
    ts.innerHTML = '请输入正确的手机号！'
    ts.style.color = 'red';
    getbtn.style.color = 'grey';
    getbtn.disabled = true;
  }
  else if (!(/^1[0-9]{10}$/.test(Number(sjhm.value))) && sjhm.value !== '' && flagOfSpecial === false) {
    ts.innerHTML = 'Enter the correct phone number!'
    ts.style.color = 'red';
    getbtn.style.color = 'grey';
    getbtn.disabled = true;
  }
  else if (sjhm.value === '') {
    ts.innerHTML = '';
    getbtn.style.color = 'grey';
    getbtn.disabled = true;
  } else {
    ts.innerHTML = '';
    ts.style.color = 'rgb(240,248,255)';
    getbtn.style.color = '#637dff';
    getbtn.disabled = false;
  }
  //console.log(yzmflag);

  if (sjhm.value !== '' && yzm.value !== '' && yhxz.checked === false) {
    login.disabled = true;
  } else {
    login.disabled = false;
  }
}, 50)

// form.addEventListener('click', (e) => {
//     e.preventDefault();
// })
//console.log(getbtn);
//getbtn.disabled = true;
function getRandomVarify() {
  return (Math.floor(Math.random() * (999999 - 100000 + 1) + 100000));
}




getbtn.addEventListener('click', (e) => {
  varifyToBack = +getRandomVarify();  //生成给后端的验证码
  console.log(varifyToBack);
  axios({
    url: 'http://47.113.198.244:8080/pre/send',
    method: 'POST',
    params: {
      phoneNumber: sjhm.value,
      code: varifyToBack
    }
  }).then(result => {
    console.log(result);
    if (result.data.data == "OK") {

    } else {
      alert(result.data.data);
    }

  })
  getbtn.disabled = true;
  let tmp = 10;
  //十秒内不能重新获取验证码
  if (flagOfSpecial === false) {
    getbtn.innerHTML = `Wait ${tmp}s try again`;
    let num2 = setInterval(() => {
      tmp--;
      getbtn.innerHTML = `Wait ${tmp}s try again`;
      if (tmp === 0) {
        clearInterval(num2);
        getbtn.style.color = '#637dff';
        getbtn.disabled = false;
        getbtn.innerHTML = 'Get CAPTCHA';
      }
    }, 1000)
  }
  else {
    getbtn.innerHTML = `请${tmp}秒后重试`;
    let num2 = setInterval(() => {
      tmp--;
      getbtn.innerHTML = `请${tmp}秒后重试`;
      if (tmp === 0) {
        clearInterval(num2);
        getbtn.style.color = '#637dff';
        getbtn.disabled = false;
        getbtn.innerHTML = '获取验证码';
      }
    }, 1000)
  }

  /*
  *
  *   关于前端怎么检测用户输入的验证码是否正确，其实直接拿yzm.value和varifyToBack比就行，短信只是给张磊看看
  *   这个校验是写在登录按钮里的，我看你写了要经过后端的，其实可以直接改简单，你看看
  * 
  */





  /*
  *     注释掉alert弹验证码，用不上
  */
  // if (flagOfSpecial === false) {
  //   let num1 = setInterval(() => {
  //     alert(`【China Bank】CAPTCHA ${varify}，used for login, please do not disclose.`);
  //     clearInterval(num1);
  //   }, 3000)
  // } else {
  //   let num1 = setInterval(() => {
  //     alert(`【中国银行】验证码${varify}，用于手机验证码登录，请勿泄露。`);
  //     clearInterval(num1);
  //   }, 3000)
  // }

})

// let aliveDetector2 = setInterval(function () {
//     if ((/^1[0-9]{10}$/.test(Number(sjhm.value))) && yzm.value == varify ){

//     }
// }, 50)
login.addEventListener('click', (e) => {
  console.log(yzm.value);
  console.log(varifyToBack);
  if ((flag === true && sjhm.value === '' || ts.style.color === 'red') && flagOfSpecial === true) {
    alert('请输入正确的手机号！');
  }
  else if ((flag === true && sjhm.value === '' || ts.style.color === 'red') && flagOfSpecial === false) {
    alert('Please enter the correct phone number!');
  }
  else if (yzm.value == varifyToBack && flag === true && flagOfSpecial === true) {
    login.disabled = false;
    axios({
      url: 'http://47.113.198.244:8080/pre/checkLogin',
      params: {
        phoneNumber: sjhm.value,
        code: yzm.value
      }
    }).then(result => {
      console.log(result);
      if (result.data.code == 200) {
        localStorage.setItem('token', result.data.data.token);
        localStorage.setItem('sjhm', sjhm.value);
        alert(result.data.msg);
        location.href = './首页/首页.html';
      } else {
        alert(result.data.msg);
      }
    })
  }
  else if (yzm.value == varifyToBack && flag === true && flagOfSpecial === false) {
    login.disabled = false;

    axios({
      url: 'http://47.113.198.244:8080/pre/checkLogin',
      params: {
        phoneNumber: sjhm.value,
        code: yzm.value
      }
    }).then(result => {
      console.log(result);
      if (result.data.code == 200) {
        localStorage.setItem('token', result.data.data.token);
        localStorage.setItem('sjhm', sjhm.value);
        alert(result.data.msg);
        location.href = './首页/首页.html';
      } else {
        alert(result.data.msg);
      }
    })
  }
  else if (yzm.value != varifyToBack && yzm.value != '' && flagOfSpecial === true) {
    alert('验证码错误，请重新输入');
  }
  else if (yzm.value != varifyToBack && yzm.value != '' && flagOfSpecial === false) {
    alert('The verification code is wrong, please re-enter!');
  }
})
