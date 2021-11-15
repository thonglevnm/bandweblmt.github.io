var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight

//  Dong mo mobile menu
mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}
// Tu dong dong khi chon menu
    var menuItems = document.querySelectorAll('.list-menu-pc li a[href*="#"]')
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems [i];
        menuItem.onclick = function (event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sublist-menu-pc');
            if (isParentMenu) {
                event.preventDefault ();   
            }
            else{
                header.style.height = null;
            } 
        }
    }