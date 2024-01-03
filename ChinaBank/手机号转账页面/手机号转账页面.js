var selectElement = document.getElementById("account");
/***********************************************/
/*  12月24日0:52增加*/
const exitButton = document.querySelector('.box1-1 img');//退出按钮
const confirmButton = document.querySelector('.box4 button');//转账按钮
const ShouKuanRen = document.querySelector('.box2-2 input');//收款人
const ShouKuanShouJiHao = document.querySelector('.box2-3 input');//收款手机号
const ZhuanZhangJinE = document.querySelector('.box3-2 input');//转账金额
const payButton = document.querySelector('.payPassword3 .payBtn');//密码按钮
const clear1 = document.querySelector('.box2-2 img');
const clear2 = document.querySelector('.box2-3 img');
const clear3 = document.querySelector('.box3-2 .actNumCancel');
const QueRenXinXiTanChuang = document.querySelector('.tranferInformation');//确认信息大窗体
const QueDingButton = document.querySelector('.information5 .yesBtn');
const QuXiaoButton = document.querySelector('.information5 .noBtn');
// QueRenXinXiTanChuang.style.visibility = 'visible';
const selecttt = document.querySelector('select');
const MiMaTanChuang = document.querySelector('.payPassword');//确认密码大窗体
const closeMiMaTanChuang = document.querySelector('.payPassword1 img');//关密码窗口
const passwordInput = document.querySelector('.payPassword2 input');//弹窗密码框
const confirmPasswordButton = document.querySelector('.payPassword3 button');//确认密码
const hint = document.querySelector('.payPassword p');//提示密码错误

clear1.addEventListener('click', () => {
    document.querySelector('.box2-2 input').value = '';
})

clear2.addEventListener('click', () => {
    document.querySelector('.box2-3 .phoneNum').value = '';
})

clear3.addEventListener('click', () => {
    document.querySelector('.box3-2 .actNum').value = '';
})

function slideMe() {
    document.body.style.marginRight = "0"
    document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
    document.body.style.marginRight = "-15%";
    document.body.style.opacity = "0";
    setTimeout(function () {
        location.href = '../转账页面/转账页面.html';
    }, 100);
})

// function showDiv() {
//     document.getElementById("success").classList.add("show");
//     document.getElementById("overlay").classList.add("show");
//     setTimeout(() => {
//       document.getElementById("success").classList.remove("show");
//       document.getElementById("overlay").classList.remove("show");
//       commentArea.value = '';
//     }, 1500)
//   }

confirmButton.addEventListener('click', () => {
    QueRenXinXiTanChuang.style.visibility = 'visible';
    document.getElementById("overlay").classList.add("show");

    //渲染确认信息文字
    document.querySelector('.information1 p').innerHTML = document.querySelector('.box2-2 input').value;
    document.querySelector('.information2 p').innerHTML = document.querySelector('.box2-3 input').value;
    document.querySelector('.information3 p').innerHTML = document.querySelector('.box3-2 input').value;
    document.querySelector('.information4 p').innerHTML = selecttt.options[selecttt.selectedIndex].text;

})

QueDingButton.addEventListener('click', () => {
    QueRenXinXiTanChuang.style.visibility = 'hidden';
    MiMaTanChuang.style.visibility = 'visible';
})

QuXiaoButton.addEventListener('click', () => {
    QueRenXinXiTanChuang.style.visibility = 'hidden';
    document.getElementById("overlay").classList.remove("show");
})

closeMiMaTanChuang.addEventListener('click', () => {
    MiMaTanChuang.style.visibility = 'hidden';
    passwordInput.value = '';
    document.getElementById("overlay").classList.remove("show");
})

confirmPasswordButton.addEventListener('click', () => {
    pipei();
})

/***********************************************/

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

function pipei() {
    var customerName = ShouKuanRen.value;
    var phoneNumber = ShouKuanShouJiHao.value;
    var token = localStorage.getItem('token');
    axios({
        url: 'http://47.113.198.244:8080/user/verifyConnection2',
        headers: {
            token
        },
        params: {
            customerName,
            phoneNumber
        }
    }).then(result => {
        if (result.data.code == 200) {
            console.log(result);
            console.log(result.data.msg);
            mima();
        } else {
            console.log(result);
            console.log(result.data.msg);
            alert(result.data.msg);
        }
    })
}
function mima() {
    var password = passwordInput.value;
    var selectedValue = selectElement.value;
    var token = localStorage.getItem('token');
    axios({
        url: 'http://47.113.198.244:8080/user/getPaymentPassword',
        headers: {
            token
        },
        params: {
            cardID: selectedValue,
            password
        }
    }).then(result => {
        if (result.data.code == 200) {
            console.log(result.data.msg);
            hint.style.visibility = 'hidden';
            transfer();
        } else {
            console.log(result);
            console.log(result.data.msg);
            hint.style.visibility = 'visible';
        }
    })
}
function transfer() {
    var selectedValue = selectElement.value;
    var currentDate = new Date();

    // 获取年、月、日、时、分、秒
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1
    var day = currentDate.getDate().toString().padStart(2, '0');
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    // 构建表示当前时间的字符串，格式为 YYYY-MM-DDTHH:mm:ss
    var formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    var phoneNumber = ShouKuanShouJiHao.value;
    var money = ZhuanZhangJinE.value;
    var token = localStorage.getItem('token');
    axios({
        url: 'http://47.113.198.244:8080/user/transferByPhone',
        method: 'POST',
        headers: {
            token
        },
        data: {
            cardID: selectedValue,
            tradeDate: formattedDate,
            phoneNumber,
            tradeMoney: money
        }
    }).then(result => {
        if (result.data.code == 200) {
            console.log(result.data.msg);
            MiMaTanChuang.style.visibility = 'hidden';
            document.getElementById("success").classList.add("show");
            setTimeout(() => {
                document.getElementById("success").classList.remove("show");
                document.getElementById("overlay").classList.remove("show");
                passwordInput.value = '';
            }, 2000)
        } else {
            console.log(result);
            alert(result.data.msg);
        }
    })
}

let aliveDetector = setInterval(() => {
    if (ShouKuanRen.value !== '' && ShouKuanShouJiHao.value !== '' && ZhuanZhangJinE.value !== '') {
        confirmButton.style.opacity = '1';
        confirmButton.disabled = false;
    } else {
        confirmButton.style.opacity = '0.5';
        confirmButton.disabled = true;
    }

    if (passwordInput.value.length == 6) {
        confirmPasswordButton.style.opacity = '1';
    } else {
        confirmPasswordButton.style.opacity = '0.5';
    }

    // console.log(selecttt.options[selecttt.selectedIndex].text);

}, 50)