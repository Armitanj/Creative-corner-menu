const $ = document

const btnToggle = $.querySelector('#toggle-btn')
const menuElem = $.querySelectorAll('.menu a')
let isFlag = false;


console.log(menuElem);

btnToggle.addEventListener('click', () => {
    if (!isFlag) {
        console.log("menu opened!");
        menuElem[0].style.transform = "translate(150px, 0px)";
        menuElem[1].style.transform = "translate(150px, 90px)";
        menuElem[2].style.transform = "translate(90px, 150px)";
        menuElem[3].style.transform = "translate(0px, 150px)";
        btnToggle.classList.add('active');
        isFlag = true;
    } else {
        console.log("menu closed!");
        menuElem[0].style.transform = "translate(0px, 0px)";
        menuElem[1].style.transform = "translate(0px, 0px)";
        menuElem[2].style.transform = "translate(0px, 0px)";
        menuElem[3].style.transform = "translate(0px, 0px)";
        btnToggle.classList.remove('active');
        isFlag = false;
    }

})



