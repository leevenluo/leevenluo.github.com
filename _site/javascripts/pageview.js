/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   setting article pageview
 * @Returns null
 */
/* -----------------------------*/
var settingPageView = function () {
    $('.post #article-title').append($('#pageView'));

    $('#article-title #pageView').css({
        "display" : "inline",
        "float"   : "right",
        "height"  : "60px",
        "width"   : "240px",
    });

    $('#article-title #pageView p').css({
        "display"        : "inline-block",
        "height"         : "30px",
        "width"          : "100px",
        "font-style"     : "italic",
        "font-size"      : "18px",
        "color"          : "rgba(0, 13, 255, 0.65)",
    });

    $('#article-title #pageView a img').css({
        "margin-top"    : "1px",
        "margin-bottom" : "9px",
        "display"       : "inline-block",
    });
}

/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   setting article pageview
 * @Returns null
 */
/* -----------------------------*/
var settingTotalPageView = function () {
    $('#total_page_view').append($('#totalPageView'));

    /*
    $('#article-title #pageView').css({
        "display" : "inline",
        "float"   : "right",
        "height"  : "60px",
        "width"   : "240px",
    });
    */
}

setTimeout(function() {
    settingPageView();
    settingTotalPageView();
}, 0);
