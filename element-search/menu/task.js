const menuLink = [...document.querySelectorAll('.menu__link')];

menuLink.forEach((element) => {
   element.onclick = function() {
      const checkActive = document.querySelector('.menu_active');
      const parents = element.closest('.menu__item');
      const openMenu = parents.querySelector('.menu_sub');
      if (checkActive !== null) {
         checkActive.classList.toggle('menu_active');
         openMenu.classList.toggle('menu_active');
      } else {
         openMenu.classList.toggle('menu_active');
      }
      return false     
   };
});
