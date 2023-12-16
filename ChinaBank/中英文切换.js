const chinese = ['短信登录', '请输入手机号码', '请输入验证码', '获取验证码', '登录',
  '账号登录', '请输入手机号码', '登录密码', '登录',
  '账户注册', '请输入手机号码', '请输入您的密码', '请确认您的密码', '要求8位以上，且包含数字和大小写字母', '注册'];
const english = ['SMS', 'Enter phone number', 'Enter verification code', 'Get CAPTCHA', 'Log in',
  'Account', 'Enter phone number', 'Password', 'Log in',
  'Register', 'Enter phone number', 'Enter your password', 'Confirm your password', '8 or more digits and letters', 'Register'];

const DXDL = document.querySelector('.login-app .m-btn');
const QSRSJHM1 = document.querySelector('.m-form .ttt');
const QSRYZM = document.querySelector('.m-form .tttt');
const HQYZM = document.querySelector('.m-form .get-btn');
const DL1 = document.querySelector('.m-form .login-btn');
const WYYDBTY = document.querySelector('.besure p');

const ZHDL = document.querySelector('.login-app .u-btn');
const QSRSJHM2 = document.querySelector('.u-form .txt001');
const DLMM = document.querySelector('.u-form .txt002');
const DL2 = document.querySelector('.u-form .login-btn');

const ZHZC = document.querySelector('.login-app .q-btn');
const QSRSJHM3 = document.querySelector('.q-form .ttt');
const QSRNDMM = document.querySelector('.q-form .pw1');
const QQRNDMM = document.querySelector('.q-form .pw2');
let flagOfSpecial = true;
const ZC = document.querySelector('.q-form .login-btn');

const CHINESE = document.querySelector('.box2 .cnn');
const ENGLISH = document.querySelector('.box2 .enn');

DXDL.addEventListener('click', () => {
  CHINESE.innerHTML = '简体中文 &nbsp |';
  ENGLISH.innerHTML = ' &nbsp English';
})
// ZHDL.addEventListener('click', () => {
//   CHINESE.innerHTML = '';
//   ENGLISH.innerHTML = '';
// })
// ZHZC.addEventListener('click', () => {
//   CHINESE.innerHTML = '';
//   ENGLISH.innerHTML = '';
// })


CHINESE.addEventListener('click', () => {
  DXDL.innerHTML = chinese[0];
  QSRSJHM1.setAttribute("placeholder", chinese[1]);
  QSRYZM.setAttribute("placeholder", chinese[2]);
  HQYZM.innerHTML = chinese[3];
  DL1.innerHTML = chinese[4];
  WYYDBTY.innerHTML = '我已阅读并同意<a class="s" href=""> 服务协议 </a>和<a class="ss" href=""> 隐私权条款</a>'

  ZHDL.innerHTML = chinese[5];
  QSRSJHM2.setAttribute("placeholder", chinese[6]);
  DLMM.setAttribute("placeholder", chinese[7]);
  DL2.innerHTML = chinese[8];

  ZHZC.innerHTML = chinese[9];
  QSRSJHM3.setAttribute("placeholder", chinese[10]);
  QSRNDMM.setAttribute("placeholder", chinese[11]);
  QQRNDMM.setAttribute("placeholder", chinese[12]);
  ZC.innerHTML = chinese[14];
  flagOfSpecial = true;
})

ENGLISH.addEventListener('click', () => {
  DXDL.innerHTML = english[0];
  QSRSJHM1.setAttribute("placeholder", english[1]);
  QSRYZM.setAttribute("placeholder", english[2]);
  HQYZM.innerHTML = english[3];
  DL1.innerHTML = english[4];
  WYYDBTY.innerHTML = 'I have agree to<a class="s" href=""> Agreement </a>and<a class="ss" href=""> Privacy</a>'

  ZHDL.innerHTML = english[5]
  QSRSJHM2.setAttribute("placeholder", english[6]);
  DLMM.setAttribute("placeholder", english[7]);
  DL2.innerHTML = english[8];

  ZHZC.innerHTML = english[9];
  QSRSJHM3.setAttribute("placeholder", english[10]);
  QSRNDMM.setAttribute("placeholder", english[11]);
  QQRNDMM.setAttribute("placeholder", english[12]);
  ZC.innerHTML = english[14];
  flagOfSpecial = false;
})