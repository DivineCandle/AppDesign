const sjhm1 = document.querySelector('.q-form .ttt');//手机号码输入框
const ts1 = document.querySelector('.q-form .hidden-text1');//手机号正则验证
const ts2 = document.querySelector('.q-form .hidden-text2');//请输入您的密码验证
const ts3 = document.querySelector('.q-form .hidden-text3');//重复输入密码验证
const password1 = document.querySelector('.q-form .pw1');//密码
const password2 = document.querySelector('.q-form .pw2');//确认密码
const sign = document.querySelector('.q-form .login-btn');//注册按钮
const yj1 = document.querySelector('.q-form .yanjing1');//睁眼
const yj2 = document.querySelector('.q-form .yanjing2');//闭眼

yj1.addEventListener('click', () => {
  yj1.style.display = 'none';
  yj2.style.display = 'block';
  password1.type = 'text';
})

yj2.addEventListener('click', () => {
  yj2.style.display = 'none';
  yj1.style.display = 'block';
  password1.type = 'password';
})

let aliveDetector1 = setInterval(function () {
  if (!(/^1[0-9]{10}$/.test(Number(sjhm1.value))) && sjhm1.value !== '' && flagOfSpecial === true) {
    ts1.innerHTML = '请输入正确的手机号！';
    ts1.style.color = 'red';
  } else if (!(/^1[0-9]{10}$/.test(Number(sjhm1.value))) && sjhm1.value !== '' && flagOfSpecial === false) {
    ts1.innerHTML = 'Please enter correct phone number!';
    ts1.style.color = 'red';
  } else if (sjhm1.value === '') {
    ts1.innerHTML = '';
  } else {
    ts1.innerHTML = '';
  }

  if (password1.value === '' && flagOfSpecial === true) {
    ts2.innerHTML = '要求8位以上，且包含数字和大小写字母';
    ts2.style.color = 'rgb(38, 29, 203)';
  }
  else if (password1.value === '' && flagOfSpecial === false) {
    ts2.innerHTML = '8 or more digits and letters';
    ts2.style.color = 'rgb(38, 29, 203)';
  }
  else if (!(/^[a-zA-Z0-9]{8,}$/.test(password1.value)) && password1.value !== '' && flagOfSpecial === true) {
    ts2.innerHTML = '请至少输入8位符合要求的密码！';
    ts2.style.color = 'red';
  }
  else if (!(/^[a-zA-Z0-9]{8,}$/.test(password1.value)) && password1.value !== '' && flagOfSpecial === false) {
    ts2.innerHTML = 'At least 8 compliant!';
    ts2.style.color = 'red';
  }
  else if (!(/[A-Z]/.test(password1.value)) && password1.value !== '' && flagOfSpecial === true) {
    ts2.innerHTML = '请至少包含一个大写字母！';
    ts2.style.color = 'red';
  }
  else if (!(/[A-Z]/.test(password1.value)) && password1.value !== '' && flagOfSpecial === false) {
    ts2.innerHTML = 'At least one capital letter!';
    ts2.style.color = 'red';
  }
  else if (!(/[a-z]/.test(password1.value)) && password1.value !== '' && flagOfSpecial === true) {
    ts2.innerHTML = '请至少包含一个小写字母！';
    ts2.style.color = 'red';
  }
  else if (!(/[a-z]/.test(password1.value)) && password1.value !== '' && flagOfSpecial === false) {
    ts2.innerHTML = 'At least one lowercase letter!';
    ts2.style.color = 'red';
  }
  else if (!(/[0-9]/.test(password1.value)) && password1.value !== '' && flagOfSpecial === true) {
    ts2.innerHTML = '请至少包含一个数字！';
    ts2.style.color = 'red';
  }
  else if (!(/[0-9]/.test(password1.value)) && password1.value !== '' && flagOfSpecial === false) {
    ts2.innerHTML = 'At least one digit!';
    ts2.style.color = 'red';
  }
  else {
    ts2.innerHTML = '';
  }

  // if (sjhm.value !== '' && password1.value != '' && password2 != '') {
  //     sign.disabled = true;
  //     sign.style.background = 'red';
  // } else {
  //     sign.disabled = false;
  //     sign.style.background = 'grey'
  // }

  if (password1.value === '' && password2.value !== '' && flagOfSpecial === true) {
    ts3.innerHTML = '请先输入密码！';
    ts3.style.color = 'red';
  }
  else if (password1.value === '' && password2.value !== '' && flagOfSpecial === false) {
    ts3.innerHTML = 'Please enter password first!';
    ts3.style.color = 'red';
  }
  else if (password1.value !== password2.value && password2.value !== '' && flagOfSpecial === true) {
    ts3.innerHTML = '请确保两次输入的密码一致！';
    ts3.style.color = 'red';
  }
  else if (password1.value !== password2.value && password2.value !== '' && flagOfSpecial === false) {
    ts3.innerHTML = 'Make sure you enter the same password twice!';
    ts3.style.color = 'red';
  } else {
    ts3.innerHTML = '';
  }

  if (ts1.innerHTML !== '' || ts2.innerHTML !== '' || ts3.innerHTML !== '' || sjhm1.value === '' || password1.value === '' || password2.value === '') {
    sign.disabled = true;
    sign.style.background = 'linear-gradient(129.12deg, #9BB3FF, rgba(69, 95, 225, .25))';
  } else {
    sign.disabled = false;
    sign.style.background = 'linear-gradient(129.12deg, #446dff, rgba(99, 125, 255, .75))';
  }
}, 50)

sign.addEventListener('click', (e) => {
  /**********************************
                  拿数据
  **********************************/
  // function validatePassword(password) {
  //   var minLength = 8;
  //   var minCharTypes = 2;

  //   if (password.length < minLength || countCharTypes(password) < minCharTypes) {
  //     alert("密码长度大于等于8且包含至少2种字符");
  //     return true;
  //   }
  //   return false;
  // }

  // function countCharTypes(password) {
  //   var charTypes = 0;
  //   var regexArr = [/([a-z])/, /([A-Z])/, /([0-9])/, /([^a-zA-Z0-9])/];

  //   for (var i = 0; i < regexArr.length; i++) {
  //     if (regexArr[i].test(password)) {
  //       charTypes++;
  //     }
  //   }

  //   return charTypes;
  // }


  // if (validatePassword(pw1.value)) {
  //   return;
  // }


  axios({
    url: 'http://hmajax.itheima.net/api/register',
    method: 'post',
    data: {
      username: sjhm1.value,
      password: password1.value
    }
  }).then(result => {
    // 成功
    console.log(result)
    console.log(result.data.message)
    alert(result.data.message)
  }).catch(error => {
    // 失败
    // 处理错误信息
    console.log(error)
    console.log(error.response.data.message)
    alert(error.response.data.message)
  })
})