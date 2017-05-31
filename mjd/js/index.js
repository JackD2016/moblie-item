window.onload = function(){
    search();
};
/*头部搜索*/
var search = function(){
    /*搜索框对象*/
    var search = document.getElementsByClassName('jd_header_box')[0];
    /*banner对象*/
    var banner = document.getElementsByClassName('jd_banner')[0];
    /*高度*/
    var height = banner.offsetHeight;

    window.onscroll = function(){
        var top = document.body.scrollTop;
        /*当滚动高度大于banner的高度时候颜色不变*/
        if(top > height){
            search.style.background  = "rgba(201,21,35,0.85)";
        }else{
            var op = top/height * 0.85;
            search.style.background  = "rgba(201,21,35,"+op+")";
        }
    };
};
