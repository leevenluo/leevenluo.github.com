/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   setting post
 * @Returns null
 */
/* -----------------------------*/
var settingPost = function () {
    //CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE
    var disqus_shortname = 'leevenluo'; // required: replace example with your forum shortname

    //DON'T EDIT BELOW THIS LINE
    setTimeout(function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = false;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }, 1000);
}

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

    $('#article-title #pageView p').css({
        "display"    : "inline-block",
        "height"     : "30px",
        "width"      : "100px",
        "font-style" : "italic",
        "color"      : "rgba(0, 13, 255, 0.65)",
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
 * @Brief   function init work
 * @Returns null
 */
/* -----------------------------*/
var initWork = function () {

    //setting post
    settingPost();

    //setting article pageview
    //settingPageView();
}

/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   function header nav fixed
 * @Returns null
 */
/* -----------------------------*/
var headerNavFixed = function () {
    var domEle   = document.documentElement;
    var bodyEle  = document.body;
    var hdNav    = document.getElementById("header-nav");
    var header   = document.getElementById("header");
    var content  = document.getElementById("content");

    var bodyTop  = domEle.scrollTop || bodyEle.scrollTop;
    var navTop   = hdNav.offsetTop;
    var hdHeight = header.offsetHeight;

    //var mainIpt  = document.getElementById("main-search-input");
    //mainIpt.value = bodyTop + "|" + navTop + "|" + hdHeight;

    if (bodyTop > hdHeight) {
        hdNav.style.position  = 'fixed';
        hdNav.style.width     = '1200px';
        hdNav.style.top       = '0px';
    } else {
        hdNav.style.position  = '';
        hdNav.style.width     = '';
        hdNav.style.top       = '';
    }

    //alert(bodyTop + "|" + navTop);
}

//计算元素的Y(垂直，顶)位置
function pageY(elem) {
    //检查我们是否已经到了根元素
    //如果我们还能往上，则将当前偏移与向上递归的值相加
    //否则，取当前偏移
    return elem.offsetParent ? elem.offsetTop + pageY(elem.offsetParent) : elem.offsetTop;
}

/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   function header nav fixed
 * @Returns null
 */
/* -----------------------------*/
var chapCataIndexFixed = function () {
    var domEle   = document.documentElement;
    var bodyEle  = document.body;
    var artIndex = document.getElementById("article-index");
    var backHgt  = document.getElementById("github-projects-pop");
    var hdNav    = document.getElementById("header-nav");

    var bodyTop  = domEle.scrollTop || bodyEle.scrollTop;
    var indexTop = pageY(artIndex);
    var backTop  = pageY(backHgt);
    var hdTop    = hdNav.offsetHeight;

    //var mainIpt  = document.getElementById("main-search-input");
    //mainIpt.value = bodyTop + "|" + backTop + "|" + backHgt.offsetHeight;

    //var changeLocat = backTop + backHgt.offsetHeight - hdTop;
    var changeLocat = backTop + backHgt.offsetHeight;

    if (bodyTop > changeLocat) {
        artIndex.style.position  = 'fixed';
        artIndex.style.top       = '0px';
        artIndex.style.width     = '280px';
    } else {
        artIndex.style.position  = '';
        artIndex.style.top       = '';
        artIndex.style.width     = '280px';
    }

    //alert(bodyTop + "|" + navTop);
}

/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   function scroll event
 * @Returns null
 */
/* -----------------------------*/
var onScroll = function () {
    //header nav fixed
    //headerNavFixed();

    //chapter catalog index fixed
    chapCataIndexFixed();
}

//#############################call#############################

//init work
initWork();

window.onscroll = onScroll;

/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   scroll event activing
 * @Returns null
 */
/* -----------------------------*/
//setTimeout(function(){ $(document.body).scrollspy({target: '#article-catalog'}); }, 0);

/* -----------------------------*/
/**
 * @Author  leevenzhl@gmail.com
 * @Brief   catalog and scroll event
 * @Returns null
 */
/* -----------------------------*/
setTimeout(function(){ $('#toc').toc({
    'selectors':         'h1, h2, h3',      //elements to use as headings
    'container':         '#home_left',      //element to find all selectors in
    'prefix':            'toc',             //prefix for anchor tags and class names
    'onHighlight':       function(el) {},   //called when a new section is highlighted
    'highlightOnScroll': true,              //add class to heading that is currently in focus
    'highlightOffset':   100,               //offset to trigger the next headline
    'anchorName': function(i, heading, prefix) { //custom function for anchor name
        return prefix+i;
    },
    'headerText': function(i, heading, $heading) { //custom function building the header-item text
        return $heading.text();
    },
    'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
    return $heading[0].tagName.toLowerCase();
}
}); }, 0);



