const menuLink = [...document.querySelectorAll('.menu__item')];



menuLink.forEach((element) => {
   element.oncklick = function() {
      
      // const menuLinkSecond = [...document.querySelectorAll('.menu_sub')];
      // menuLinkSecond.forEach((item) => {
      //    item.classList.toggle('menu_active');
      // });
      return false;
   };
});
