$(document).ready(function () {
    $('#loading').fadeOut(1000, function () {
        $('body').css('overflow', 'auto')
    })

})



let sideBarInnerWidth = $('.sideBar_inner').innerWidth();
$("#sideBar").css('left', -sideBarInnerWidth)
$("#sideBar .icon_display").click(function () {
    if ($("#sideBar").css('left') == "0px") {
        $('#sideBar').animate({ left: -sideBarInnerWidth }, 500);
    }
    else {
        $('#sideBar').animate({ left: "0px" }, 500);
        $("#sideBar i").css('i', 'fa-solid open-close-icon fa-2x fa-x')
    }

});







