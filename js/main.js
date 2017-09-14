var mask = mui.createMask();
var gallery1 = mui('.mui-slider1');
gallery1.slider({
  interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
});

$(function(){
	//仓库选择
	$('.head-index a').click(function(){
		$('.select-choose').show();
	})
	$('.select-choose').click(function(){
		$(this).hide();
	})
	$('.select-choose li').click(function(){
		$('.head-index label').html($(this).html());
	})
	$('.meng .select-box a').click(function(){
		$('.head-index label').html($(this).html());
		$(this).addClass('active').siblings().removeClass('active');
		$('.meng').hide();
	})
	//品牌轮播
		//克隆首尾
	$('.mui-slider2 .mui-slider-group').prepend($('.mui-slider2 .mui-slider-group .mui-slider-item:last').clone());
	$('.mui-slider2 .mui-slider-group .mui-slider-item').eq(0).addClass('mui-slider-item-duplicate');
	$('.mui-slider2 .mui-slider-group').append($('.mui-slider2 .mui-slider-group .mui-slider-item').eq(1).clone());
	$('.mui-slider2 .mui-slider-group .mui-slider-item:last').addClass('mui-slider-item-duplicate');
	var gallery2 = mui('.mui-slider2');
	gallery2.slider({
	  interval:6000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	var sliderLen=$(".mui-slider2 .mui-slider-group").children().length;
	console.log(sliderLen-2);
	var current_num=0;
	document.querySelector('.mui-slider2').addEventListener('slide', function(event) {
	　　current_num = event.detail.slideNumber;
	})
	$('.brand-change .fa-angle-right').click(function(){
		current_num++;
		if(current_num>sliderLen){
			current_num=0;
		}
　　gallery2.slider().gotoItem(current_num);
	})
	$('.brand-change .fa-angle-left').click(function(){
		current_num--;
		if(current_num<0){
			current_num=sliderLen-3;
		}
		console.log(current_num)
　　gallery2.slider().gotoItem(current_num);
	})
	//商品翻转
	var run=0;
	setInterval(function(){
		run++;
		if(run%2==0){
			$('.command div').css('transform','rotateY(0)');
			setTimeout(function(){
				$('.command div .img2').hide();
				$('.command div .img1').css({'display':'inline-block','transform':'rotateY(0deg)'});
			},300)
		}else{
			$('.command div').css('transform','rotateY(180deg)');
			setTimeout(function(){
				$('.command div .img1').hide();
				$('.command div .img2').css({'display':'inline-block','transform':'rotateY(180deg)'});
			},300)	
		}
	},6000)
	//首页加入购物车
	$('.operation button').click(function(){
		$('.index-addCart').show();
	})
	$('.index-addCart .close').click(function(){
		$('.index-addCart').hide();
	})
	$('.minus').click(function(){
		var num = $(this).parent().find('.num').val();
		num--;
		if(num<=0){
			num=0;
		}
		$(this).parent().find('.num').val(num);
	})
	$('.plus').click(function(){
		var num = $(this).parent().find('.num').val();
		num++;
		$(this).parent().find('.num').val(num);
	})
	//商城选择功能与品牌
	$('.choose-row li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	//筛选
	$('.store-sort li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//高级选项
	$('.store-sort .super').click(function(){
		$(this).css('color','#158ddd');
		$('.store-meng').show();
		$(this).find('img').attr('src','images/super2.png');
	})
	$('.store-sub').click(function(){
		$('.store-meng').hide();
		$('.store-sort .super').css('color','#666');
		$('.store-sort .super').find('img').attr('src','images/super1.png');
	})
	//密度板详情tab
	$('.density-detail .flex li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.density-detail .tab-box li').eq($(this).index()).show().siblings().hide();
	})
	//分类
	$('.classify-tab li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.classify-box div').eq($(this).index()).show().siblings().hide();
	})
	$('.classify-box li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//我的定制蒙版
	$('.myorder-sub button').eq(1).click(function(){
		$('.myorder-meng').show();
	})
	$('.myorder-meng button').click(function(){
		$('.myorder-meng').hide();
	});
	//购物车全选
	$("#checkAll").click(function(){
		if($(this).is(':checked')){
			$("input[type='checkbox']").each(function(){
				$(this).prop("checked",true);
			});
		}else{
			$("input[type='checkbox']").each(function(){
				$(this).prop("checked",false);
			});
		}
	});
	//订单tab
	$('.allorder .all-tab li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})
