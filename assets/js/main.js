// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarTogglerDemo02')
// const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })

// window.addEventListener('mouseup', function(event){
// 	var box = document.getElementById('navbarTogglerDemo02');
// 	if (event.target != box && event.target.parentNode != box){
//         box.style.display = 'none';
//     }
// });

// $(document).ready(function () {
//     $(document).click(function (event) {
//         var clickover = $(event.target);
//         var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
//         if (_opened === true && !clickover.hasClass("navbar-toggle")) {
//             $("button.navbar-toggle").click();
//         }
//     });
// });

// $(function() {
//     $(document).click(function (event) {
//       $('.navbar-collapse').collapse('hide');
//     });
//   });

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});
