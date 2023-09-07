$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function(){
        if (contador == 1) {
            $('nav').animate ({
                left: '0'
            });
            contador = 0;
        }
        else {
            contador = 1;
            $('nav').animate ({
                left: '-100%'
            });
        }
    });
    $('.submenu').click(function() {
        $(this).children('.children').slideToggle();
    });
}
/*     $('.children').hover(function() {
        var submenu = document.getElementById("id-sub");
        submenu.style.color = "white"; */
/*     }) */

/* function colorRojo() {
    var submenu = document.getElementById("id-sub");
    submenu.style.color = "red";
} */