var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
$(document).ready(function () {
    $(".bookmark-icon, .bookmark-button").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("bookmarked");
        $(this).children(".bookmark-icon").toggleClass("bookmarked");
    });
});
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}
$(document).ready(function () {
    $("#bird-discount").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".online-event-discount-wrapper").show();
        } else {
            $(".online-event-discount-wrapper").hide();
        }
    });
});
$(document).ready(function () {
    $("#bird-discount2").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".online-event-discount-wrapper2").show();
        } else {
            $(".online-event-discount-wrapper2").hide();
        }
    });
});
$(document).ready(function () {
    $("#free-event-ticketing").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".disabled-action").hide();
        } else {
            $(".disabled-action").show();
        }
    });
});
$(document).ready(function () {
    $("#booking-start-time-btn").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".booking-start-time-holder").hide();
        } else {
            $(".booking-start-time-holder").show();
        }
    });
});
$(document).ready(function () {
    $("#booking-end-time-btn").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".booking-end-time-holder").hide();
        } else {
            $(".booking-end-time-holder").show();
        }
    });
});
$(document).ready(function () {
    $("#refund-policies-btn").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".refund-policies-holder").hide();
        } else {
            $(".refund-policies-holder").show();
        }
    });
});
$(document).ready(function () {
    $("#ticket-instructions-btn").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".ticket-instructions-holder").hide();
        } else {
            $(".ticket-instructions-holder").show();
        }
    });
});
$(document).ready(function () {
    $("#tags-btn").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".tags-holder").hide();
        } else {
            $(".tags-holder").show();
        }
    });
});
$(document).ready(function () {
    $("#is-restrict-total-ticket").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".total_ticket_per_level").hide();
        } else {
            $(".total_ticket_per_level").show();
        }
    });
});
$(document).ready(function () {
    $("#is-restrict-ticket-per-user").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".total_ticket_per_user").hide();
        } else {
            $(".total_ticket_per_user").show();
        }
    });
});
$(document).ready(function () {
    $("#is-restrict-total-ticket2").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".total_ticket_per_level2").hide();
        } else {
            $(".total_ticket_per_level2").show();
        }
    });
});
$(document).ready(function () {
    $("#is-restrict-ticket-per-user2").on("change", function (e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            $(".total_ticket_per_user2").hide();
        } else {
            $(".total_ticket_per_user2").show();
        }
    });
});
$('input[name="refund_policy_id"]').on("click", function () {
    var $value = $(this).attr("value");
    $(".refund-input-content").slideUp();
    $('[data-method="' + $value + '"]').slideDown();
});
$(".tags-container").each(function () {
    var keywordInput = $(this).find(".tags-input");
    var keywordsList = $(this).find(".tags-list");
    function addKeyword() {
        var $newKeyword = $(
            "<span class='tag'><span class='tag-remove'></span><span class='tag-text'>" +
                keywordInput.val() +
                "</span></span>"
        );
        keywordsList.append($newKeyword).trigger("resizeContainer");
        keywordInput.val("");
    }
    keywordInput.on("keyup", function (e) {
        if (e.keyCode == 13 && keywordInput.val() !== "") {
            addKeyword();
        }
    });
    $(document).on("click", ".tag-remove", function () {
        $(this).parent().addClass("tag-removed");
        function removeFromMarkup() {
            $(".tag-removed").remove();
        }
        setTimeout(removeFromMarkup, 500);
        keywordsList.css({ height: "auto" }).height();
    });
    keywordsList.on("resizeContainer", function () {
        var heightnow = $(this).height();
        var heightfull = $(this)
            .css({ "max-height": "auto", height: "auto" })
            .height();
        $(this).css({ height: heightnow }).animate({ height: heightfull }, 200);
    });
    $(window).on("resize", function () {
        keywordsList.css({ height: "auto" }).height();
    });
    $(window).on("load", function () {
        var keywordCount = $(".tags-list").children("span").length;
        if (keywordCount > 0) {
            keywordsList.css({ height: "auto" }).height();
        }
    });
});
let marker;
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 59.325, lng: 18.07 },
    });
    marker = new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.327, lng: 18.067 },
    });
    marker.addListener("click", toggleBounce);
}
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
window.initMap = initMap;
$(".engaging-slider").owlCarousel({
    items: 5,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    navText: [
        "<i class='uil uil-angle-left'></i>",
        "<i class='uil uil-angle-right'></i>",
    ],
    smartSpeed: 800,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 2 },
        1200: { items: 3 },
        1400: { items: 3 },
    },
});
$(".testimonial-slider").owlCarousel({
    items: 10,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    smartSpeed: 800,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 2 },
        1200: { items: 2 },
        1400: { items: 2 },
    },
});
$(".organisations-slider").owlCarousel({
    items: 7,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    smartSpeed: 800,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 2 },
        600: { items: 2 },
        1000: { items: 3 },
        1200: { items: 4 },
        1400: { items: 5 },
    },
});
$(".moreEvents-slider").owlCarousel({
    items: 7,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
        "<i class='uil uil-angle-left'></i>",
        "<i class='uil uil-angle-right'></i>",
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        800: { items: 2 },
        1000: { items: 3 },
        1200: { items: 4 },
        1400: { items: 4 },
    },
});
$(".moreEvents-slider").owlCarousel({
    items: 7,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
        "<i class='uil uil-angle-left'></i>",
        "<i class='uil uil-angle-right'></i>",
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        800: { items: 2 },
        1000: { items: 3 },
        1200: { items: 4 },
        1400: { items: 4 },
    },
});
$(".most-posts-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    smartSpeed: 800,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        800: { items: 1 },
        1000: { items: 1 },
        1200: { items: 1 },
        1400: { items: 1 },
    },
});
$(".related-posts-slider").owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
        "<i class='uil uil-angle-left'></i>",
        "<i class='uil uil-angle-right'></i>",
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        800: { items: 2 },
        1000: { items: 3 },
        1200: { items: 3 },
        1400: { items: 4 },
    },
});
$(".role-slider").owlCarousel({
    items: 4,
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
        "<i class='uil uil-angle-left'></i>",
        "<i class='uil uil-angle-right'></i>",
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        800: { items: 2 },
        1000: { items: 3 },
        1200: { items: 3 },
        1400: { items: 4 },
    },
});
function makeTimer() {
    var endTime = new Date("december  30, 2022 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}
setInterval(function () {
    makeTimer();
}, 300);
$(document).ready(function () {
    $(".dropdown-submenu a.submenu-item").on("click", function (e) {
        $(this).next("ul").toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});
$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".event-box").not(targetBox).hide();
        $(targetBox).show();
    });
});
window.oncontextmenu = function () {
    return true;
};
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if (
        (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
        (event.ctrlKey && event.shiftKey && event.keyCode == 74)
    ) {
        return false;
    }
});
