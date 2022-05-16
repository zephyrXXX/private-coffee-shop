// создание одноименных констант с определнными классами 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

//регистрируем обработчики событий и привязываем вызов функции к определённому событию
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

//функция открытия меню
function mobileMenu() {
    //добавление класса к const 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
//функция закрытия меню
function closeMenu() {
    //удаление класса у const 
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




/* ================================ */
function clickMe() {
    document.querySelector(".click_block").classList.toggle("click_block_active");
}

window.onload = function() {
    var dd = document.querySelector('div');
    var links = document.querySelectorAll('a');  
    
    links.forEach(function (link) {
      link.addEventListener('click', onLinkClicked);
      
      function onLinkClicked(event) {
        event.preventDefault();
        dd.classList.remove('click_block_active')
        setTimeout(onAnimationComplete, 500);
      }
  
      function onAnimationComplete() {
        window.location = link.href;  
      }
    });
  }