/**
 * Created by Administrator on 2016/10/13.
 */

$(function () {
    $.ajaxSettings.async = false;//将异步请求设置为同步
    $.getJSON('./data/detail.php', {'gid': 1}, function (data) {
        var html1 = '';
        var html2 = '';
        var j = 0;
        for (var i = 0; i < data[0].length; i++) {
            var video = data[0][i];
            html1 += `
            <div class="">
                <video width="600px" height="340px" class="center-block" autoplay controls src="video/${video.vic}"></video>
            </div>`;
            html2 += `<li data-i=${j} class="">
            <a href="#"><img src="imgs/${video.vic_sm}" alt=""/></a>
            </li>`;
            j++;
        }
        for (var y = 0; y < data[1].length; y++) {
            var imgLg = data[1][y];
            html1 += `<div class="">
                    <img src="imgs/${imgLg.gic_lg}" alt=""/>
                </div>`;
            html2 += `<li data-i=${j}>
            <a href="#"><img src="imgs/${imgLg.gic_sm}" alt=""/></a>
            </li>`;
            j++;
        }
        $('.game_video').html(html1);
        $('.game_video').children(':first-child').addClass('show');
        $('.game_video_list').html(html2);
        $('.game_video_list').children(':first-child').addClass('active');
    });
    $.ajaxSettings.async = true;//将异步请求改为异步，这样做使得不影响后面需要异步请求的数据
});

window.onload=function() {
    var l = $('.game_video_list li').length;
    var width = parseFloat(getComputedStyle($('.game_video_list li')[0]).width);
    var w = parseFloat($(".back_bar>div").css('width', 514 / l + 'px').css('width'));

    $('.game_video_list li').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings('li').removeClass('active');
        var show = $('.game_video>.show');
        show != null && (show.className = '');
        var i = $(this).data().i;
        $(".game_video>div").siblings('.show').removeClass('show');
        $(".game_video>div")[i].className = 'show';
        var videos = $(".game_video>div>video");
        for (var m = 0; m < videos.length; m++) {
            videos[m].load();
        }
        $(".back_bar>div").css("marginLeft", 3 + i * w + "px");
    });
    $('.backword').click(function () {
        var n = $('.game_video_list li.active').data().i;
        var lee = $('.game_video>div>video').length;
        if (n > 0) {
            if (n < lee) {
                for (var i = 0; i < lee; i++) {
                    $(".game_video>div>video")[i].load();
                }
            }
            n--;
            $('.game_video_list li').removeClass('active');
            $('.game_video_list li')[n].className = 'active';
            $(".game_video>div").siblings('.show').removeClass('show');
            $(".game_video>div")[n].className = 'show';
            $(".back_bar>div").css("marginLeft", 3 + n * w + "px");
            if (n < l - 5) {
                $('.game_video_list').css('margin-left', -width * n + 'px');
            }
            if ($('.game_video_list li')[n]);
        }

    });
    $('.forword').click(function () {
        var n = $('.game_video_list li.active').data().i;
        if (n < l - 1) {
            n++;
            $('.game_video_list li').removeClass('active');
            $('.game_video_list li')[n].className = 'active';
            $(".game_video>div").siblings('.show').removeClass('show');
            $(".game_video>div")[n].className = 'show';
            $(".back_bar>div").css("marginLeft", 3 + n * w + "px");
            if (n > 4) {
                $('.game_video_list').css('margin-left', -width * (n - 4) - 3 + 'px');
            }
        }
    });


}
var iszkyd1=true;
$('#zkyd1').click(function(){
    if(iszkyd1){
            $('.game_about').animate({height:'500px'},300);
            iszkyd1=false;
            $(this).html('收回阅读&uarr;&uarr;');

    }else{
            $('.game_about').animate({height:'300px'},300);
            iszkyd1=true;
        $(this).html('展开阅读&darr;&darr;');
    }
});
var iszkyd2=true;
$('#zkyd2').click(function(){
    if(iszkyd2){
        $('.game_config').animate({height:'500px'},300);
        iszkyd2=false;
        $(this).html('收回阅读&uarr;&uarr;');

    }else{
        $('.game_config').animate({height:'200px'},300);
        iszkyd2=true;
        $(this).html('展开阅读&darr;&darr;');
    }
});

var imgs=[
    {'i':0,'img':'banner2.jpg'},
    {'i':1,'img':'banner3.jpg'},
    {'i':2,'img':'banner4.jpg'},
    {'i':3,'img':'banner5.jpg'},
    {'i':4,'img':'banner6.jpg'},
    {'i':5,'img':'banner7.jpg'},
    {'i':6,'img':'banner8.jpg'},
    {'i':7,'img':'banner9.jpg'}
];
var adv={
    LIWIDTH:0,
    distance:0,
    DURATION:1000,
    STEPS:466,
    interval:0,
    step:0,
    moved:0,
    timer:null,
    WAIT:3000,
    canAuto:true,
    init:function(){
        this.LIWIDTH=parseFloat(getComputedStyle($('.lscptj_box')[0]).width);
        this.interval=this.DURATION/this.STEPS;
        this.updateView();
        this.autoMove();
        $('.lscptj_box').mouseenter(function(){
            this.canAuto=false;
            clearInterval(this.timer);
            clearTimeout(this.timer);
            this.timer=null;
        }.bind(this));
        $(".lscptj_box").mouseleave(function(){
            this.canAuto=true;
            this.autoMove();
        }.bind(this));
    },
    updateView:function(){
        for(var i=0,htmlImgs='';i<imgs.length;i++){
            htmlImgs+=`<li><a href=""><img src="imgs/${imgs[i].img}" alt=""/></a></li>`;
        }
        $('.lscptj_list1').html(htmlImgs);
    },
    autoMove:function(){
        this.timer=setTimeout(function(){
            if(this.canAuto){
                this.move();
            }else{
                this.autoMove();
            }
        }.bind(this),10);
    },
    move:function(){
        clearInterval(this.timer);
        this.timer=null;
        imgs=imgs.splice(0,3).concat(imgs);
        this.updateView();
        var start=parseFloat(getComputedStyle($('.lscptj_list1')[0]).marginLeft);
        var end=-this.LIWIDTH;
        this.DISTANCE=-(end-start);
        this.step=0.5;
        this.DISTANCE/this.STEPS;
        this.timer=setInterval(this.movestep.bind(this),10);
    },
    movestep:function(){
        var left=parseFloat(getComputedStyle($('.lscptj_list1')[0]).marginLeft);
        $('.lscptj_list1').css('marginLeft',left-this.step+'px');
        this.moved++;
        if(this.moved==this.STEPS){
            clearInterval(this.timer);
            this.timer=null;
            this.moved=0;
            imgs=imgs.concat(imgs.splice(0,1));
            this.updateView();
            $('.lscptj_list1').css('marginLeft','0px');
            this.autoMove();
        }
    }

};
adv.init();







