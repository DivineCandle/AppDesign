const refresh = document.querySelector('.box3-1-2 img');//刷新图片
var assetElement = document.getElementById('asset');//资产空
const creator = '老张';//实验

/***********************************************/
/*  12月22日23:24增加基本事件*/

const exitButton = document.querySelector('.box1-1 img');//退出按钮
const settingButton = document.querySelector('.box1-3 img');//设置按钮
const searchButton = document.querySelector('.icon img');//放大镜按钮
const textInput = document.querySelector('.textInput input');//搜索框
const clearButton = document.querySelector('.textInput .clear');//清空按钮

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../三模登录页面/三模登录页面.html'
  }, 100);
})

settingButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = './设置页面/设置页面.html';
  }, 100);
})

searchButton.addEventListener('click', () => {
  if (textInput.value !== '') {
    location.href = `../${textInput.value}页面/${textInput.value}页面.html`;
  }
})

textInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && textInput.value !== '') {
    location.href = `../${textInput.value}页面/${textInput.value}页面.html`;
  }
})

clearButton.addEventListener('click', () => {
  textInput.value = '';
})

/***********************************************/

function getaccountInfo() {
  var d = new Date();
  var currentTime = d.toLocaleString();
  var currentTimeElement = document.getElementById('currentTime');
  if (currentTimeElement) {
    currentTimeElement.innerHTML = currentTime;
  }

  var asset = 0;
  /*axios({
      url: '',
      Headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(result => {
      var optionsData =result.data.data;
      for (var i = 0; i < optionsData.length; i++) {
          asset= optionsData[i].balance+asset;
      }       
      if (assetElement) {
          assetElement.innerHTML = asset;
      }
    })*///正式调用
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      creator
    }
  }).then(result => {
    console.log(result)
    var optionsData = result.data.data;
    for (var i = 0; i < optionsData.length; i++) {
      asset = optionsData[i].id + asset;
    }
    if (assetElement) {
      assetElement.innerHTML = asset;
    }
  })//实验调用
}//获取资产金额以及刷新时间修改

getaccountInfo();

refresh.addEventListener('click', () => {
  getaccountInfo();
})//刷新按钮