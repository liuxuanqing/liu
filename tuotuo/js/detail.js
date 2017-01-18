/**
 * Created by Administrator on 2017/1/17.
 */

$(function(){
//商品
//悬浮小图片出现边框
    function show_border(){
        $("#goods .small img").css("border","2px solid #fff");
        $("#goods .small img").eq(0).css("border","2px solid #ff3300");
        $("#goods .small img").mouseenter(function(){
            //    先隐藏所有的边框
            $("#goods .small img").css("border","2px solid #fff");
            //    再显示当前边框
            $(this).css("border","2px solid #ff3300");
        });
    }
    show_border();//悬浮小图片出现边框
    //鼠标悬浮小图显示大图
    (function(){
        $("#goods .small img").mouseenter(function(){
            $("#goods .big .big_img").css("display","none");
            $($("#goods .big img")[$(this).attr("index")]).css("display","block");
            $(".mirror_img").attr("src",$($("#goods .big img")[$(this).attr("index")]).attr("src"));
        });
    })();
//    放大镜效果
    (function(){
        $("#goods .big").hover(function(){
            $(".big_mirror").css("display","block");

            $(".mirror").css("display","block").mouseenter(function(){$(this).css("display","none")});
            $(this).mousemove(function(e){
                var e=e||window.event;
                var _mouseX=e.clientX;
                var _mouseY=e.clientY;
                var _left=_mouseX-$(this).offset().left-100;
                //console.log($(this).offset().top);//距离网页的顶点的距离
                var _top=_mouseY-100+$(window).scrollTop()-$(this).offset().top;
                if(_left>$(this).width()-$(".big_mirror").width()){
                    _left=$(this).width()-$(".big_mirror").width();
                }
                if(_left<=0){
                    _left=0;
                }
                if(_top>$(this).height()-$(".big_mirror").height()){
                    _top=$(this).height()-$(".big_mirror").height()
                }
                if(_top<=0){
                    _top=0;
                }
                $(".big_mirror").css({
                    "top":_top+"px",
                    "left":_left+"px"
                });
                $(".mirror_img").css({
                    "top":-_top*2+"px",
                    "left":-_left*2+"px"
                });
            });
        },function(){
            $(".big_mirror").css("display","none");
            $(".mirror").css("display","none");
        });
    })();

//    商品数量效果
    (function(){

        var _num=1;
        if(_num<=1){
            $(".buy .reduce").css("cursor","not-allowed");
        }
        $(".buy .add").click(function(){
            _num++;
            if(_num<=1){
                $(".buy .reduce").css({"cursor":"not-allowed","background":"#fff"});
            }else{
                $(".buy .reduce").css({"cursor":"pointer","background":"#f5f5f5"});
            }
            $(".goods_num").val(_num);
        });
        $(".buy .reduce").click(function(){
            _num--;
            if(_num<=1){
                _num=1;
                $(".buy .reduce").css({"cursor":"not-allowed","background":"#fff"});
                $(".goods_num").val(_num);
            }else{
                $(".goods_num").val(_num);
                $(".buy .reduce").css({"cursor":"pointer","background":"#f5f5f5"});
            }

        });
    })();

//    倒计时
    (function(){
        setInterval(function(){
            var future=new Date("2017/1/19");
            var now=new Date();
            var cha=new Date(future.getTime()-now.getTime());
            $(".date").html(cha.getDate());
            $(".hour").html(cha.getHours());
            $(".minute").html(cha.getMinutes());
            $(".second").html(cha.getSeconds());
        },1000);
    })();
//    右侧出现效果
    $("#goods .b").hover(function(){
        $("#goods .hide1").css("display","block");
    },function(){
        $("#goods .hide1").css("display","none");
    });
    $("#goods .c").hover(function(){
        $("#goods .hide2").css("display","block");
    },function(){
        $("#goods .hide2").css("display","none");
    });

//    悬浮出现加入购物车
    $("#main .left .hot .img1").hover(function(){
        $(this).find(".add_car").css("display","block");
    },function(){
        $(this).find(".add_car").css("display","none");
    });

//    点击商品详情 购买评论
    $("#main .right .btn span.detail").click(function(){
        $("#main .right .btn span.buy_comment").css({
            "border-top":"none",
            "color":"#666"
        });
        $(this).css({
            "border-top":"1px solid #ff3300",
            "border-bottom":"1px solid #fff",
            "color":"#ff3300"
        });
    });
//    点击购买评论
    $("#main .right .btn span.buy_comment").click(function(){
        $("#main .right .btn span.detail").css({
            "border-top":"none",
            "color":"#666"
        });
        $(this).css({
            "border-top":"1px solid #ff3300",
            "border-bottom":"1px solid #fff",
            "color":"#ff3300"
        });
    });
});



































