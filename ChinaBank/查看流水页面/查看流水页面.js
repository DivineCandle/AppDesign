var selectElement = document.getElementById("account");
const table = document.getElementById('transactionTable');
/***********************************************/
/*  12月25日16:47增加 */
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


const leftDateSet = document.querySelectorAll('.box3-1-2-1 input');
const rightDateSet = document.querySelectorAll('.box3-1-2-3 input');
let tradeDateLeft = '';
let tradeDateRight = '';

const chooseTradeType = document.querySelectorAll('.box3-2-2 input');
let tradeType = 0;


function addZero(str) {
  if (Number(str) < 10) {
    str = '0' + str;
  }
  return str;
}

/***********************************************/
/*  12月25日16:47增加 */
const urlParams = new URLSearchParams(window.location.search);
const cardNumber=urlParams.get('cardID');
const ioe=urlParams.get('ioe');
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

  // console.log(leftDateSet[0].value);
  tradeDateLeft = `${leftDateSet[0].value}-${addZero(leftDateSet[1].value)}-${addZero(leftDateSet[2].value)}T00:00:00`;
  tradeDateRight = `${rightDateSet[0].value}-${addZero(rightDateSet[1].value)}-${addZero(rightDateSet[2].value)}T23:59:59`;
  // console.log(tradeDateLeft);
  // console.log(typeof (leftDateSet[0].value)); //string
  // console.log(tradeDateRight);

  // console.log(document.querySelector('.box3-2-2 input').checked);
  tradeType = (chooseTradeType[0].checked === true ? 0 : (chooseTradeType[1].checked === true ? 1 : 2));
  // console.log(tradeType);
  // console.log(chooseTradeType[2].checked == true);

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
          filter();
          chooseBoard.style.display = 'none';
        }
      }
    } else {
      //同年，后月份大的情况
      if (Number(moneyRight.value) < Number(moneyLeft.value)) {
        alert('请检查金额区间是否有误');
      } else {
        //传数据还没写
        filter();
        chooseBoard.style.display = 'none';
      }
    }
  } else {
    //后年大
    if (Number(moneyRight.value) < Number(moneyLeft.value)) {
      alert('请检查金额区间是否有误');
    } else {
      //传数据还没写
      filter();
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
    let token = localStorage.getItem('token');
    axios({
      url: 'http://47.113.198.244:8080/user/getRelatedCard',
    headers: {
      token
    }
  }).then(result => {
      console.log(result)
      var optionsData = result.data.data;
      selectElement.innerHTML = '';

      var allOption = document.createElement('option');
      allOption.value = '114514'; // 或者你可以使用一个特殊的值表示“全部”
      allOption.text = '全部';
      selectElement.appendChild(allOption);

      for (var i = 0; i < optionsData.length; i++) {
          var optionElement = document.createElement('option');
          optionElement.value = optionsData[i].cardID;
          let lastFourDigits = optionsData[i].cardID.slice(-4);
          optionElement.text = lastFourDigits;
          selectElement.appendChild(optionElement);
      }
  })
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
    if (cardNumber) {
      location.href = '../账户管理页面/账户管理页面.html';
    } else if(ioe){
      location.href = '../转账页面/转账页面.html';
    } else{
      location.href = '../首页/首页.html';
    }

  }, 100);
})

/***********************************************/
//下面是从转账进来
if(ioe){
  var start="2023-10-01T00:00:00";
  var startMoney=0;
  var endMoney=10000;
  let token = localStorage.getItem('token');
  var getwhat=2;
  var order=0;
  var currentDate = new Date();

    // 获取年、月、日、时、分、秒
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1
    var day = currentDate.getDate().toString().padStart(2, '0');
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    // 构建表示当前时间的字符串，格式为 YYYY-MM-DDTHH:mm:ss
    var formattedCurrentDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  axios({
    url: 'http://47.113.198.244:8080/user/getRelatedCard',
    headers: {
      token
    }
  }).then(result => {
    var optionsData1 =result.data.data;
    cardIDs = optionsData1.map(option => option.cardID);
axios({
  url: 'http://47.113.198.244:8080/user/getTradeRecord',
  headers: {
    token
  },
  params:{
    listCard:cardIDs.join(','),
    end:formattedCurrentDate,
    start,
    getwhat,
    order,
    startMoney,
    endMoney,
    cardIDII:''
  }
}).then(result => {
   console.log(result);
   if (result.data.code==200) {
      console.log(result);
      var optionsData2 =result.data.data;
      optionsData2.forEach(transaction => {
        // 创建新的表格行
        const row = table.insertRow();
    
          // 创建单元格并填充数据
          const timeCell = row.insertCell(0);
          const date = new Date(transaction.tradeDate);
          timeCell.textContent = `${date.getMonth() + 1}/${date.getDate()}`;
    
        const typeCell = row.insertCell(1);
        typeCell.textContent = transaction.tradeType === 0 ? '转出' : '转入';
    
        const cardCell = row.insertCell(2);
        const lastFourDigits = transaction.cardID.slice(-4);
        cardCell.textContent = `(${lastFourDigits})`;
    
        const amountCell = row.insertCell(3);
        amountCell.textContent = transaction.tradeMoney.toFixed(2); // 保留两位小数
    });   
   } else {
    alert(result.data.msg);
   }
}) 
})
}
/***********************************************/
//下面是从账户管理进来
if(cardNumber){
  var start="2023-10-01T00:00:00";
  var startMoney=0;
  var endMoney=10000;
  let token = localStorage.getItem('token');
  var getwhat=0;
  var order=0;
  var currentDate = new Date();

    // 获取年、月、日、时、分、秒
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1
    var day = currentDate.getDate().toString().padStart(2, '0');
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    // 构建表示当前时间的字符串，格式为 YYYY-MM-DDTHH:mm:ss
    var formattedCurrentDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  
  axios({
    url: 'http://47.113.198.244:8080/user/getTradeRecord',
    headers: {
      token
    },
    params:{
      listCard:cardNumber,
      end:formattedCurrentDate,
      start,
      getwhat,
      order,
      startMoney,
      endMoney,
      cardIDII:''
    }
  }).then(result => {
    console.log(result);
    if (result.data.code==200) {
        console.log(result);
        var optionsData2 =result.data.data;
        optionsData2.forEach(transaction => {
          // 创建新的表格行
          const row = table.insertRow();
      
          // 创建单元格并填充数据
          const timeCell = row.insertCell(0);
          const date = new Date(transaction.tradeDate);
          timeCell.textContent = `${date.getMonth() + 1}/${date.getDate()}`;
      
          const typeCell = row.insertCell(1);
          typeCell.textContent = transaction.tradeType === 0 ? '转出' : '转入';
      
          const cardCell = row.insertCell(2);
          const lastFourDigits = transaction.cardID.slice(-4);
          cardCell.textContent = `(${lastFourDigits})`;
      
          const amountCell = row.insertCell(3);
          amountCell.textContent = transaction.tradeMoney.toFixed(2); // 保留两位小数
      });   
    } else {
      alert(result.data.msg);
    }
  }) 
}




function filter(){
  var selectedValue = selectElement.value;
  var end=tradeDateRight;
  var start=tradeDateLeft;
  var getwhat=tradeType;
  var order=0;
  var startMoney=moneyLeft.value;
  var endMoney=moneyRight.value;
  var token = localStorage.getItem('token');
  if (selectedValue==114514) {

    axios({
      url: 'http://47.113.198.244:8080/user/getRelatedCard',
      headers: {
        token
      }
    }).then(result => {
      var optionsData1 =result.data.data;
      cardIDs = optionsData1.map(option => option.cardID);
        axios({
          url: 'http://47.113.198.244:8080/user/getTradeRecord',
          headers: {
            token
          },
          params:{
            listCard:cardIDs.join(','),
            end,
            start,
            getwhat,
            order,
            startMoney,
            endMoney,
            cardIDII:''
          }
        }).then(result => {
          console.log(result);
          if (result.data.code==200) {
              console.log(result);
              var optionsData2 =result.data.data;

              var rows = table.getElementsByTagName('tr');
              for (var i = rows.length - 1; i > 0; i--) {
                table.deleteRow(i);
            }
              optionsData2.forEach(transaction => {
                // 创建新的表格行
                const row = table.insertRow();
            
                  // 创建单元格并填充数据
                  const timeCell = row.insertCell(0);
                  const date = new Date(transaction.tradeDate);
                  timeCell.textContent = `${date.getMonth() + 1}/${date.getDate()}`;
            
                const typeCell = row.insertCell(1);
                typeCell.textContent = transaction.tradeType === 0 ? '转出' : '转入';
            
                const cardCell = row.insertCell(2);
                const lastFourDigits = transaction.cardID.slice(-4);
                cardCell.textContent = `(${lastFourDigits})`;
            
                const amountCell = row.insertCell(3);
                amountCell.textContent = transaction.tradeMoney.toFixed(2); // 保留两位小数
            });   
          } else {
            console.log(result);
            alert(result.data.msg);
          }
        }) 
  })
  } else {
    axios({
      url: 'http://47.113.198.244:8080/user/getTradeRecord',
      headers: {
        token
      },
      params:{
        listCard:selectedValue,
        end,
        start,
        getwhat,
        order,
        startMoney,
        endMoney,
        cardIDII:''
      }
    }).then(result => {
      console.log(result);
      if (result.data.code==200) {
          console.log(result);
          var optionsData2 =result.data.data;

          var rows = table.getElementsByTagName('tr');
          for (var i = rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
          optionsData2.forEach(transaction => {
            // 创建新的表格行
            const row = table.insertRow();
        
              // 创建单元格并填充数据
              const timeCell = row.insertCell(0);
              const date = new Date(transaction.tradeDate);
              timeCell.textContent = `${date.getMonth() + 1}/${date.getDate()}`;
        
            const typeCell = row.insertCell(1);
            typeCell.textContent = transaction.tradeType === 0 ? '转出' : '转入';
        
            const cardCell = row.insertCell(2);
            const lastFourDigits = transaction.cardID.slice(-4);
            cardCell.textContent = `(${lastFourDigits})`;
        
            const amountCell = row.insertCell(3);
            amountCell.textContent = transaction.tradeMoney.toFixed(2); // 保留两位小数
        });   
      } else {
        console.log(result);
        alert(result.data.msg);
      }
    })
  }
}
