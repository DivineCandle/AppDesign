const refresh = document.querySelector('.box3-1-2 img');//刷新图片
var assetElement = document.getElementById('asset');//资产空
var incomeElement = document.getElementById('income');//收入
var expensesElement = document.getElementById('expenses');//支出
var eyeClose = document.querySelector('.eyeClose');
var eyeOpen = document.querySelector('.eyeOpen');
var asset = 0;//资产
var income=0;//收入
var expenses=0;//支出
var cardIDs;
var cTime;
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
    localStorage.clear();
    location.href = '../index.html';
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
function updateCurrentTime() {
  var d = new Date();
  var currentTime = d.toLocaleString();
  var currentTimeElement = document.getElementById('cTime');

  if (currentTimeElement) {
      currentTimeElement.innerHTML = '当前时间: ' + currentTime;
  }
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);


function getaccountInfo() {
  var d = new Date();
  var currentTime = d.toLocaleString();
  var currentTimeElement = document.getElementById('currentTime');
  if (currentTimeElement) {
    currentTimeElement.innerHTML = currentTime;
  }

  let token = localStorage.getItem('token');


  var currentDate = new Date();
  var formattedCurrentDate = currentDate.toISOString().slice(0, 19);

  axios({
      url: 'http://47.113.198.244:8080/user/getRelatedCard',
      headers: {
        token
      }
    }).then(result => {
      console.log(result);
      if (result.data.code==200) {
        var optionsData =result.data.data;
        var start="2023-12-01T00:00:00";
        var startMoney=0;
        var endMoney=10000;
        asset=0;
        cardIDs = optionsData.map(option => option.cardID);
        for (var i = 0; i < optionsData.length; i++) {
              asset= optionsData[i].balance+asset;
          }       
        var eyeOpenStyle = window.getComputedStyle(eyeOpen);
        if (eyeOpenStyle.display === 'block') {
          assetElement.innerHTML = asset;

        } else {
          assetElement.innerHTML = "*******";
          incomeElement.innerHTML = "*******";
          expensesElement.innerHTML = "*******";      
        }

        axios({
          url: 'http://47.113.198.244:8080/user/getFinance',
          headers: {
            token
          },
          params:{
            listCard:cardIDs.join(','),
            end:formattedCurrentDate,
            start,
            startMoney,
            endMoney,
          },
        }).then(result => {
          console.log(result);
           if (result.data.code==200) {
            income=result.data.data.income;
            expenses=result.data.data.expense;
            var eyeOpenStyle = window.getComputedStyle(eyeOpen);
            if (eyeOpenStyle.display === 'block') {
              incomeElement.innerHTML = income;
              expensesElement.innerHTML = expenses;
            } else {
              assetElement.innerHTML = "*******";
              incomeElement.innerHTML = "*******";
              expensesElement.innerHTML = "*******";      
            }            
           } else {
              alert(result.data.message)
           }
      }) 

      } else {
        var eyeOpenStyle = window.getComputedStyle(eyeOpen);
        if (eyeOpenStyle.display === 'block') {
          assetElement.innerHTML = asset;
          incomeElement.innerHTML = income;
          expensesElement.innerHTML = expenses;
        } else {
          assetElement.innerHTML = "*******";
          incomeElement.innerHTML = "*******";
          expensesElement.innerHTML = "*******";      
        }
      }

      
    }).catch(error => {
      console.error('Network error or other issue:', error);
    });
  
}
getaccountInfo();

refresh.addEventListener('click', () => {
  getaccountInfo();
})//刷新按钮
function toggleVisibility() {
  if (eyeClose.style.display === 'none') {
      eyeClose.style.display = 'block';
      eyeOpen.style.display = 'none';
      assetElement.innerHTML = "*******";
      incomeElement.innerHTML = "*******";
      expensesElement.innerHTML = "*******";
  } else {
      eyeClose.style.display = 'none';
      eyeOpen.style.display = 'block';
      assetElement.innerHTML = asset;
      incomeElement.innerHTML = income;
      expensesElement.innerHTML = expenses;     
  }
}