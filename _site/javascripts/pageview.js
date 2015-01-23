/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   setting article pageview
 * @Returns null
 */
/* -----------------------------*/
var settingPageView = function () {
    $('.post #article-title').append($('#pageView'));

    $('#article-title h1:first').css({
        "display" : "inline",
    });

    $('#article-title #pageView').css({
        "display" : "inline",
        "float"   : "right",
        "height"  : "60px",
        "width"   : "240px",
    });

    console.log($('#article-title #pageView p'));

    $('#article-title #pageView p').css({
        "display"    : "inline-block",
        "height"     : "30px",
        "width"      : "100px",
        "font-style" : "italic",
        "color"      : "rgba(0, 13, 255, 0.65)",
    });

    console.log($('#article-title #pageView a img'));

    $('#article-title #pageView a img').css({
        "margin-top"    : "1px",
        "margin-bottom" : "9px",
        "display"       : "inline-block",
    });
}

//var div     = '<div id="pageView">';
//var wording = '<p>PageView : </p>';
//var src     = div + wording + '<script src="http://counter1.allfreecounter.com/private/counter.js?c=';
//document.write(src + window.unqid + '" charset="utf-8"><\/script></div>');

setTimeout(function() {settingPageView();}, 0);
