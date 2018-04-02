$(function() {
    //Vue渲染模板，注意要放在前面！
    var example1 = new Vue({
        el: '#example-1',
        data: {
            items: [{
                message: 'Dieter Rams:  10 Principles for  Good Design',
                name: 'ReadyMag',
                country: " from U.S.A.",
                date: "January 10, 2018",
                img: "./assets/images/project.jpg",
            }, {
                message: 'Dieter Rams:  10 Principles for  Good Design',
                name: 'ReadyMag',
                country: " from U.S.A.",
                date: "January 10, 2018",
                img: "./assets/images/project4.png",
            }, {
                message: 'Dieter Rams:  10 Principles for  Good Design',
                name: 'ReadyMag',
                country: " from U.S.A.",
                date: "January 10, 2018",
                img: "./assets/images/project2.jpg",
            }, {
                message: 'Dieter Rams:  10 Principles for  Good Design',
                name: 'ReadyMag',
                country: " from U.S.A.",
                date: "January 10, 2018",
                img: "./assets/images/project3.jpg",
                ribbon: true
            }, ]
        }
    }, )
    var example2 = new Vue({
            el: '#example-2',
            data: {
                items: [{
                    message: 'Dieter Rams:  10 Principles for  Good Design',
                    name: 'ReadyMag',
                    country: " from U.S.A.",
                    date: "January 10, 2018",
                    img: "./assets/images/project.jpg",
                }, {
                    message: 'Dieter Rams:  10 Principles for  Good Design',
                    name: 'ReadyMag',
                    country: " from U.S.A.",
                    date: "January 10, 2018",
                    img: "./assets/images/project4.png",
                }, {
                    message: 'Dieter Rams:  10 Principles for  Good Design',
                    name: 'ReadyMag',
                    country: " from U.S.A.",
                    date: "January 10, 2018",
                    img: "./assets/images/project2.jpg",
                }, {
                    message: 'Dieter Rams:  10 Principles for  Good Design',
                    name: 'ReadyMag',
                    country: " from U.S.A.",
                    date: "January 10, 2018",
                    img: "./assets/images/project3.jpg",
                    ribbon: true
                }, ]
            }
        }, )
        var menulist = new Vue({
                el: '#menu-list',
                data: {
                    items: [{
                        message: 'ALL',
                    },{
                        message: 'Websites',
                    },{
                        message: 'Collections',
                    },{
                        message: 'Elements',
                    },{
                        message: 'Jobs',
                    },{
                        message: 'Users',
                    }, ]
                }
            }, )
        //分享功能
    $("#share").bind("click", function() {
            $(".share-list").toggleClass("active");
        })
        //banner-tip
    $(".item-user").hover(function() {
        var a = $(".item-user").offset().top + 45 - $(document).scrollTop() //距离窗口可视区域顶部
        var b = $(window).height(); //可视区域窗口的高度
        var c = b - a; //底部
        if (c > 230) {
            $(this).children(".bottom-tip").show();
        } else {
            if (a > 230) {
                $(this).children(".top-tip").show();
            }
        }
    }, function() {
        $(this).children(".bottom-tip,.top-tip").hide();
    });
    //collection改变颜色
    $(".like-heart a").hover(function() {
        $(this).children(".icon-heart").css("color", "#49c5b6");
        $(this).children(".number").css("color", "#49c5b6");
    }, function() {
        $(this).children(".icon-heart").css("color", "#BDC1C0");
        $(this).children(".number").css("color", "#BDC1C0");
    });

    //collection-tip
    $(".like").hover(function() {
            $(this).children(".collection-tip").show();
        }, function() {
            $(this).children(".collection-tip").hide();
        })
        //borders
    $(".borders").hover(function() {
            $(".icon-ganlanzhi").css("color", "#49c5b6");
        }, function() {
            $(".icon-ganlanzhi").css("color", "#BDC1C0");
        })
        //user-tip
    $(".js-user").hover(function() {
        var a = $(".js-user").offset().top + 45 - $(document).scrollTop() //距离窗口可视区域顶部
        var b = $(window).height(); //可视区域窗口的高度
        var c = b - a; //底部
        if (c > 230) {
            $(this).children(".bottom-tip").show();
        } else {
            if (a > 230) {
                $(this).children(".top-tip").show();
            }
        }
    }, function() {
        $(this).children(".bottom-tip,.top-tip").hide();
    });
    //tip插件
    $(".item-user").bind("click", function() {
            $(this).children(".none").show();
            $('#myDiv').tip({
                background: '#fff'
                    // circlecolor:"#ccc";
            });
        })
        //photo mask
    $(".box-photo").hover(function() {
        $(this).children("img").addClass("enlarge");
        $(this).children("img").removeClass("narrow");
        $(this).children(".mask").show();
        $(this).children(".none").show();
    }, function() {
        $(this).children("img").addClass("narrow");
        $(this).children("img").removeClass("enlarge");
        $(this).children(".mask").hide();
        $(this).children(".none").hide();
    })

    //滚动侦测
    //获取导航距离页面顶部的距离
    var toTopHeight = $("#nav").offset().top;

    //监听页面滚动
    $(window).scroll(function() {
        //判断页面滚动超过导航时执行的代码
        if ($(document).scrollTop() > toTopHeight) {
            //检测是否为IE6。jQuery1.9中去掉了msie的方法，所以只好这样写
            if ('undefined' == typeof(document.body.style.maxHeight)) {
                //页面滚动的距离
                var scrollTop = $(document).scrollTop();
                //IE6下，用absolute定位，并设置Top值为距离页面顶部的距离
                $("#nav").css({
                    'position': 'absolute',
                    'top': scrollTop + 'px'
                });
            } else {
                //IE6以上浏览器采用fixed定位
                $("#nav").addClass("nav_fixed");
            }
        } else { //判断页面滚动没有超过导航时执行的代码
            if ('undefined' == typeof(document.body.style.maxHeight)) {
                //设置Top值为导航距页面顶部的初始值。（IE6为了防止浏览器一下滚动过多，所以不能采用直接去掉定位的方法）
                $("#nav").css({
                    'position': 'absolute',
                    'top': toTopHeight + 'px'
                });
            } else {
                //IE6以上浏览器移除fixed定位，采用默认流布局
                $("#nav").removeClass("nav_fixed");
            }
        }
    });

    //jq1.9以上 替代toggle 隐藏显示下拉菜单
    $('#menu-btn').click(function(){
      console.log(111);
        if($(this).find(".style2").length){
            $(".menu-dropdown").removeClass("style2");
        }else{
            $(".menu-dropdown").addClass("style2");
        }
    });
    $('#menu-list li').bind('click',function(){
      $(".menu-btn").text($(this).text()+' ▾');
    })
    //关闭搜索框
    $("#close-search").bind("click",function(){
        $(".box-search").hide();
        $(".nav-title").show();
    })
    //打开搜索框
    $("#glass").bind("click",function(){
        $(".nav-title").hide();
        $(".box-search").show();
    })
})
