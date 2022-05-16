const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
/* const arrow4 = document.querySelector(".arrow4");
const arrow5 = document.querySelector(".arrow5"); */

const ul_drop_1 = document.querySelector(".ul-drop-1");
const ul_drop_2 = document.querySelector(".ul-drop-2");
const ul_drop_3 = document.querySelector(".ul-drop-3");
/* const ul_drop_4 = document.querySelector(".ul-drop-4");
const ul_drop_5 = document.querySelector(".ul-drop-5"); */

const navLink2 = document.querySelectorAll(".nav-link2");
const navLink3 = document.querySelectorAll(".nav-link3");
const navLink4 = document.querySelectorAll(".nav-link4");
/* const navLink5 = document.querySelectorAll(".nav-link5");
const navLink6 = document.querySelectorAll(".nav-link6"); */
/*=====__= TEST =__======*/
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const menu3 = document.querySelector(".menu3");

menu1.addEventListener("click", FooterMenu1);
navLink2.forEach(n => n.addEventListener("click", closeMenu1));

function FooterMenu1() {
    arrow1.classList.toggle("active");
    ul_drop_1.classList.toggle("active");
}

function closeMenu1() {
    arrow1.classList.remove("active");
    ul_drop_1.classList.remove("active");
}

menu2.addEventListener("click", FooterMenu2);
navLink3.forEach(n => n.addEventListener("click", closeMenu2));

function FooterMenu2() {
    arrow2.classList.toggle("active");
    ul_drop_2.classList.toggle("active");
}

function closeMenu2() {
    arrow2.classList.remove("active");
    ul_drop_2.classList.remove("active");
}
menu3.addEventListener("click", FooterMenu3);
navLink4.forEach(n => n.addEventListener("click", closeMenu3));

function FooterMenu3() {
    arrow3.classList.toggle("active");
    ul_drop_3.classList.toggle("active");
}

function closeMenu3() {
    arrow2.classList.remove("active");
    ul_drop_3.classList.remove("active");
}








/* =========================================== */
/* arrow1.addEventListener("click", FooterMenu1);
navLink2.forEach(n => n.addEventListener("click", closeMenu1));

function FooterMenu1() {
    arrow1.classList.toggle("active");
    ul_drop_1.classList.toggle("active");
}

function closeMenu1() {
    arrow1.classList.remove("active");
    ul_drop_1.classList.remove("active");
} */
/* =========================================== */
/* arrow2.addEventListener("click", FooterMenu2);
navLink3.forEach(n => n.addEventListener("click", closeMenu2));

function FooterMenu2() {
    arrow2.classList.toggle("active");
    ul_drop_2.classList.toggle("active");
}

function closeMenu2() {
    arrow2.classList.remove("active");
    ul_drop_2.classList.remove("active");
} */
/* =========================================== */
/* arrow3.addEventListener("click", FooterMenu3);
navLink4.forEach(n => n.addEventListener("click", closeMenu3));

function FooterMenu3() {
    arrow3.classList.toggle("active");
    ul_drop_3.classList.toggle("active");
}

function closeMenu3() {
    arrow3.classList.remove("active");
    ul_drop_3.classList.remove("active");
} */
/* =========================================== */
/* arrow4.addEventListener("click", FooterMenu4);
navLink5.forEach(n => n.addEventListener("click", closeMenu4));

function FooterMenu4() {
    arrow4.classList.toggle("active");
    ul_drop_4.classList.toggle("active");
}

function closeMenu4() {
    arrow4.classList.remove("active");
    ul_drop_4.classList.remove("active");
} */
/* =========================================== */
/* arrow5.addEventListener("click", FooterMenu5);
navLink6.forEach(n => n.addEventListener("click", closeMenu5));

function FooterMenu5() {
    arrow5.classList.toggle("active");
    ul_drop_5.classList.toggle("active");
}

function closeMenu5() {
    arrow5.classList.remove("active");
    ul_drop_5.classList.remove("active");
}
 */



/*==========================================================*/

/* 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
        
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
        
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            } 
            
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_activeScroll');
            } else {
                animItem.classList.remove('_activeScroll');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);

    
} */