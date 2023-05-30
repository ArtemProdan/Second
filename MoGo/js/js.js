"use strict";

// alert("leg");
//     const iconMenu = document.querySelector('.menu_icon');
//     const Body = document.querySelector('.menu_body');
//
//     if (iconMenu){
//         iconMenu.addEventListener("click", function () {
//             iconMenu.classList.toggle('_active');
//             Body.classList.toggle('_active');
//         });
//     }


// alert("hand");

// function Function2() {
//     let Icon = document.getElementById("icon");
//     Icon.classList.toggle("active");
//     let Body = document.getElementById("body");
//     Body.classList.toggle("active");
// }
//=====================================================================================================================
function Function3() {
    let one = document.getElementById("a1");
    one.classList.add("active");
    let two = document.getElementById("a2");
    two.classList.remove("active");
    let three = document.getElementById("a3");
    three.classList.remove("active");
}

function Function4() {
    let one = document.getElementById("a2");
    one.classList.add("active");
    let two = document.getElementById("a1");
    two.classList.remove("active");
    let three = document.getElementById("a3")
    three.classList.remove("active")
}

function Function5() {
    let one = document.getElementById("a3");
    one.classList.add("active");
    let two = document.getElementById("a1");
    two.classList.remove("active");
    let three = document.getElementById("a2")
    three.classList.remove("active");
}
//======================================================================================================================
// $(document).ready(function() {
//    $('.accordeon_header').click(function (event) {
//        if($('.accordeon').hasClass('one')){
//            $('.accordeon_header').not($(this)).removeClass('active');
//            $('.accordeon_content').not($(this).next()).slideUp(300);
//        }
//        $(this).toggleClass('active').next().slideToggle(300);
//    });
// });
//===============      =================      =================          ==================             ============
// $(document).ready(function() {
//     $('.accordeon_header').click(function (event) {
//         $('.accordeon_header').not($(this)).removeClass('active');
//         $('.accordeon_content').not($(this).next()).slideUp(300);
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });
//======================================================================================================================
