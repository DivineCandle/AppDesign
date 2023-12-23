const creator = '老张'
const tranferbtn = document.querySelector('.box4 .tranfer');//转账按钮

/***********************************************/
/*  12月22日23:42增加  转账按钮事件未添加*/
const exitButton = document.querySelector('.box1-1 img');//退出按钮
const confirmButton = document.querySelector('.box4 button');//转账按钮
const ShouKuanRen = document.querySelector('.box2-2 input');//收款人
const ShouKuanShouJiHao = document.querySelector('.box2-3 input');//收款手机号
const ZhuanZhangJinE = document.querySelector('.box3-2 input');//转账金额

function slideMe() {
    document.body.style.marginRight = "0"
    document.body.style.opacity = "1";
}

let aliveDetector = setInterval(() => {
    if (ShouKuanRen.value !== '' && ShouKuanShouJiHao.value !== '' && ZhuanZhangJinE.value !== '') {
        confirmButton.style.opacity = '1';
        confirmButton.disabled = false;
    } else {
        confirmButton.style.opacity = '0.5';
        confirmButton.disabled = true;
    }
}, 50)

exitButton.addEventListener('click', () => {
    document.body.style.marginRight = "-15%";
    document.body.style.opacity = "0";
    setTimeout(function () {
        location.href = '../转账页面/转账页面.html';
    }, 100);
})
/***********************************************/


function getaccount() {
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params: {

            creator
        }
    }).then(result => {
        console.log(result)

        var optionsData = result.data.data;
        var selectElement = document.getElementById("account");
        var currentOptionValue = 1;
        selectElement.innerHTML = '';

        for (var i = 0; i < optionsData.length; i++) {
            var optionElement = document.createElement('option');
            optionElement.value = currentOptionValue++;
            optionElement.text = optionsData[i].bookname;
            selectElement.appendChild(optionElement);
        }
    })
}//获取银行卡号并渲染，没有接口，用黑马获取书籍代替，已测试，没有说明后台数据被人删完了
getaccount();

tranferbtn.addEventListener('click', (e) => {
    var selectElement = document.querySelector('select');
    if (selectElement) {
        var selectedOptionValue = selectElement.value;
        var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
        console.log('选中的选项值：', selectedOptionValue);
        console.log('选中的选项文本：', selectedOptionText);
    } else {
        console.log('请先渲染选项');
    }
    //下面传数据

})

