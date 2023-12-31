const exitButton = document.querySelector('.box1-1 img');
const confirmButton = document.querySelector('.box3 button');
var selectElement = document.getElementById("account");
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

function showDiv() {
  document.getElementById("success").classList.add("show");
  document.getElementById("overlay").classList.add("show");
  setTimeout(() => {
    document.getElementById("success").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
  }, 1500)
}

confirmButton.addEventListener('click', () => {
  confirmButton.addEventListener('click', () => {
    var selectedValue = selectElement.value;
    let token = localStorage.getItem('token');

    axios({
      url: 'http://47.113.198.244:8080/user/reportLoss',
      method: 'PUT',
      headers: {
        token
      },
      params: {
        cardID: selectedValue
      }
    }).then(result => {
      console.log(result);
      if (result.data.code == 200) {
        //挂失成功提醒

        showDiv();
        getaccount();

      } else {
        alert(result.data.msg);
      }
    })
  })
})

function getaccount() {
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
    for (var i = 0; i < optionsData.length; i++) {
      var optionElement = document.createElement('option');
      optionElement.value = optionsData[i].cardID;
      let lastFourDigits = optionsData[i].cardID.slice(-4);
      optionElement.text = lastFourDigits;
      selectElement.appendChild(optionElement);
    }
  })
}
getaccount();