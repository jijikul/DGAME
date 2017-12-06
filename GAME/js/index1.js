var img=['banner_1.jpg','banner_2.jpg','banner_3.jpg','banner_4.jpg','banner_5.jpg'];

var imgs={
	indexs:null,
	imgs:null,
	imgsLi:null,
	isPlay:true,
	timer:null,
	nowImg:null,
	nextImg:null,
	init:function(){
		this.imgs=document.getElementById("banner_imgs");
		this.update();
		this.imgLi=this.imgs.querySelectorAll('li');
		this.imgLi[0].className='active';
		this.imgs.addEventListener("mouseenter",function(){
			this.isPlay=false;
		}.bind(this));
		this.imgs.addEventListener("mouseout",function(){
			this.isPlay=true;
		}.bind(this));
		this.autoPlay();
	},
	update:function(){
		for(var i=0,imghtml='';i<img.length;i++){
			imghtml+="<li><a href='#' data-i="+i+"><img src='imgs/"+img[i]+"'></a></li>";
		}
		this.imgs.innerHTML=imghtml;
	},
	change:function(i){
		this.nextImg=this.imgLi[i];
		this.nowImg=this.imgs.querySelector("li.active");
		this.timer=setInterval(
			this.play.bind(this,i),80);
	},
	play:function(){
		var nowop=parseFloat(getComputedStyle(this.nowImg).opacity);
		var nextop=parseFloat(getComputedStyle(this.nextImg).opacity);
		if(nextop==1){
			clearInterval(this.timer);
			this.timer=null;
			this.nowImg.className='';
			this.nextImg.className='active';
			this.autoPlay();
		}else{
			this.nextImg.style.opacity=nextop+0.2;
			this.nowImg.style.opacity=nowop-0.2;
		}
	},
	autoPlay:function(){
		var i=parseInt(this.imgs.querySelector("li.active a").dataset.i);
		i++;
		if(i==5){
			i=0;
		}
		this.timer=setTimeout(function(){
			if(this.isPlay){
				this.change(i);
			}else{
				this.autoPlay();
			}
		}.bind(this),3000);
	}
}
imgs.init();

$(".jinping img").mouseenter(function(){
	$(this).addClass("animated rubberBand");
});
$(".jinping img").mouseout(function(){
	$(this).removeClass("animated rubberBand");
})

$(".gameListRight_content_list img").mouseenter(function(){
	$(this).addClass("animated flip");
});
$(".gameListRight_content_list img").mouseout(function(){
	$(this).removeClass("animated flip");
});

$(".gameListRight_nav li").mouseenter(function(){
	$(".gameListRight_content_list").addClass("animated slideInRight");
	$(this).addClass("active").siblings().removeClass("active");
});
$(".gameListRight_nav li").mouseout(function(){
	$(".gameListRight_content_list").removeClass("animated slideInRight");
});

$(".gameListLeft img").mouseenter(function(){
	$(this).addClass("animated pulse");
});
$(".gameListLeft img").mouseout(function(){
	$(this).removeClass("animated pulse");
})