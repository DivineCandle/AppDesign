let nav = document.querySelector('.nav')

nav.querySelectorAll('li a').forEach((a, i) => {
    a.onclick = (e) => {
        if (a.classList.contains('nav-item-active')) return

        nav.querySelectorAll('li a').forEach(el => {
            el.classList.remove('nav-item-active')
        })

        a.classList.add('nav-item-active')

        let nav_indicator = nav.querySelector('.nav-indicator')

        nav_indicator.style.left = `calc(${(i * 175) + 95}px - 45px)`
    }
    //a.click();
})

document.querySelector(".nav li a").click();

const wode = document.querySelector(`.nav li:nth-child(3) a`);
wode.addEventListener('click', () => {
    setTimeout(() => {
        location.href = "../我的页面/我的页面.html";
    }, 500)
})