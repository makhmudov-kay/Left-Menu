$("h3").click(function (e) {
    e.preventDefault();
    $(".menu").toggleClass("active")
    if ($(".menu").hasClass("active")) {
        $(".fa-sign-in").css({transform: "rotate(180deg)", transition: ".5s"})
    } else {
        $(".menu").removeClass("active").css({
            transition: ".5s"
        })
        $(".fa-sign-in").css({transform: "rotate(0deg)", transition: ".5s"})
    }
})

