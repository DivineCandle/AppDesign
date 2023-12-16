const sjhm2 = document.querySelector('.u-form .txt001');//手机号码输入框
const sjmm2 = document.querySelector('.u-form .txt002');
const login1 = document.querySelector('.u-form .login-btn');
const ts4 = document.querySelector('.u-form .hidden-text');
const yj3 = document.querySelector('.u-form .yanjing1');
const yj4 = document.querySelector('.u-form .yanjing2');

let aliveDetector2 = setInterval(function () {
  if (!(/^1[0-9]{10}$/.test(Number(sjhm2.value))) && sjhm2.value !== '' && flagOfSpecial === true) {
    ts4.innerHTML = '请输入正确的手机号！';
    ts4.style.color = 'red';
  }
  else if (!(/^1[0-9]{10}$/.test(Number(sjhm2.value))) && sjhm2.value !== '' && flagOfSpecial === false) {
    ts4.innerHTML = 'Enter the correct phone number!';
    ts4.style.color = 'red';
  }
  else if (sjhm2.value === '') {
    ts4.innerHTML = '';
  } else {
    ts4.innerHTML = '';
  }

  if (ts4.innerHTML !== '' || sjhm2.value === '' || sjmm2.value === '') {
    login1.disabled = true;
    login1.style.background = 'linear-gradient(129.12deg, #9BB3FF, rgba(69, 95, 225, .25))';
  } else {
    login1.disabled = false;
    login1.style.background = 'linear-gradient(129.12deg, #446dff, rgba(99, 125, 255, .75))';
  }
}, 50)

yj3.addEventListener('click', () => {
  yj3.style.display = 'none';
  yj4.style.display = 'block';
  sjmm2.type = 'text';
})

yj4.addEventListener('click', () => {
  yj4.style.display = 'none';
  yj3.style.display = 'block';
  sjmm2.type = 'password';
})

login1.addEventListener('click', (e) => {
  axios({
    url: 'http://hmajax.itheima.net/api/login',
    method: 'POST',
    data: {
      username: sjhm2.value,
      password: sjmm2.value
    }
  }).then(result => {
    console.log(result)
    console.log(result.data.message)
    alert(result.data.message)
  }).catch(error => {
    console.log(error)
    console.log(error.response.data.message)
    alert(error.response.data.message)
  })
}
)