

function resizeWindow(e){
	var newWindowWidth=$(window).width();
	if(newWindowWidth<1210){
		$("#hn-container").css('width',"990px");
		$("#hs-container").css('width',"990px");
		$("#hs-container #search-input").css('width',"289px");
		$("#hs-container .hscs-menu .width-289").css('display','none');
		$("#content #cs-container").css('width','990px');
		$("#content #c-banner #cb-sidebarnav").css('width','990px');
		$("#content #cbb-content .cbb-imgbanner .imglist").css('width','990px');
		$("#content #cbb-menubanner .cbb-menucontent").css('width','990px');
		$("#content #c-banner .cbb-content2 .cont2-imgbanner .cont2-img").css('width','990px');
		$("#content #c-banner .cbb-menubanner2 .cbb-menucontent2").css('width','990px');
		$("#c-hot #ch-container").css('width','990px');
		$("#c-hot #ch-container .chc-small-brand").css('width','618px');
		$("#c-hot #ch-container .chc-small-brand a").css('width','150px');
		$("#c-hot #ch-container .chc-hotbrand .chc-hover-brandimg").css('width','307px');
		$("#content .c-advert").css('width','990px');
		$("#footer #tmall-ensure").css('width','990px');
		$("#footer #tmall-ensure ul li").css('width','247px');
		$("#footer #tmall-tips").css('width','990px');
		$("#footer #tmall-tips dl").css('paddingLeft','10px');
		$("#footer #tmall-copy #tmall-info").css('width','990px');
		$("#c-floor #cf-container").css('width','990px');
		$("#cf-container .c-floor-item .c-floor-smallbanner").css('width','400px');
		$("#bottom-banner .bb-container").css('width','990px');
		$('#bottom-banner .bb-container .bb-list').css('marginRight','9px');

		$("#top-search #ts-container").css('width','990px');
		$("#top-search #ts-container .tmall-top-sear .tm-input").css('width','520px');

	}else if(newWindowWidth>1210){
		$("#hn-container").css('width',"1190px");
		$("#hs-container").css('width',"1190px");
		$("#hs-container #search-input").css('width',"439px");
		$("#hs-container .hscs-menu .width-289").css('display','block');
		$("#content #cs-container").css('width','1190px');
		$("#content #c-banner #cb-sidebarnav").css('width','1190px');
		$("#content #cbb-content .cbb-imgbanner .imglist").css('width','1190px');
		$("#content #cbb-menubanner .cbb-menucontent").css('width','1190px');
		$("#content #c-banner .cbb-content2 .cont2-imgbanner .cont2-img").css('width','1190px');
		$("#content #c-banner .cbb-menubanner2 .cbb-menucontent2").css('width','1190px');
		$("#c-hot #ch-container").css('width','1190px');
		$("#c-hot #ch-container .chc-small-brand").css('width','818px');
		$("#c-hot #ch-container .chc-small-brand a").css('width','133px');
		$("#c-hot #ch-container .chc-hotbrand .chc-hover-brandimg").css('width','269px');
		$("#content .c-advert").css('width','1190px');
		$("#footer #tmall-ensure").css('width','1190px');
		$("#footer #tmall-ensure ul li").css('width','297px');
		$("#footer #tmall-tips").css('width','1190px');
		$("#footer #tmall-tips dl").css('paddingLeft','30px');
		$("#footer #tmall-copy #tmall-info").css('width','1190px');
		$("#c-floor #cf-container").css('width','1190px');
		$("#cf-container .c-floor-item .c-floor-smallbanner").css('width','600px');
		$("#bottom-banner .bb-container").css('width','1190px');
		$('#bottom-banner .bb-container .bb-list').css('marginRight','5px');
		$("#top-search #ts-container").css('width','1190px');
		$("#top-search #ts-container .tmall-top-sear .tm-input").css('width','650px');
	}
}


$(document).ready(function(){
		resizeWindow();
		$(window).bind("resize",resizeWindow);
});


/*兼容IE6的左侧导航鼠标移动向右侧小移*/

$(document).ready(function(){
	$("#c-banner .goods-menu").hover(function(){
		$(this).find(".icon-goods").css('width','38px');
	},function(){
		$(this).find(".icon-goods").css('width','30px');
	})


})
