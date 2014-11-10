




$(document).ready(function(){




	/*主导航的鼠标移入移除的效果*/
	$("#hn-container .hncn-mytaobao,#hn-container .hncn-mycollect,#hn-container .hncn-seller,#hn-container .hncn-sitemap")
	.hover(function(){
		$(this).find(".hnc-pull").addClass("hnc-push");
		$(this).find(".hnc-pull .icon-pull").addClass("icon-push");
		$(this).find(".hnc-show").css('display','block');
	},function(){
		$(this).find(".hnc-pull").removeClass("hnc-push");
		$(this).find(".hnc-show").css('display','none');
		$(this).find(".hnc-pull .icon-pull").removeClass("icon-push").css('display','block');		
	});

	/*鼠标初次移入的动态效果*/
	$("#hn-container .hncn-sell1").mouseover(function(){
		if($(this).attr("load")=="false"){
			$("#hn-container .hncn-sell2").load("sell.html");
			$(this).attr("load","true");		
		}
	});
	$("#hn-container .hncn-menu1").mouseover(function(){
		if($(this).attr("load")=="false"){
			$("#hn-container .hncn-menu2").load("sitemap.html");
			$(this).attr("load","true");		
		}
	});


	/*搜索框的效果*/
	
	$("#search-input").focus(function(){
		if($("#hs-container .hscf-label").css('visibility')=='visible'){
			$("#hs-container .hscf-label").css('color','#ccc');
		}	
	});
	
	/*搜索框*/
	
	$("#search-input").bind('keydown',function(){
		$("#hs-container .hscf-label").css('visibility','hidden');
	});
	$("#search-input").blur(function(){
		if(this.value.length>0){
			$("#hs-container .hscf-label").css('visibility','hidden');
		}else{
			$("#hs-container .hscf-label").css('color','#666');
			$("#hs-container .hscf-label").css('visibility','visible');
		}	
	});
	



	/*轮播器*/

	var indexId=0;

	$("#cbb-content ul li").eq(0).addClass('iconlist-select');
	$("#cbb-content .cbb-imgbanner").css('opacity',0).css('filter',"alpha(opacity="+0+")");
	$("#cbb-content .cbb-imgbanner1").css('opacity',1).css('filter',"alpha(opacity="+100+")");
	$("#cbb-content .cbb-imgbanner1").find(".imglist a").addClass('scale');
	
	var timer=setInterval(banner,3000);
	function banner_fn(obj,prev){

		$("#cbb-content ul li").eq(prev).removeClass('iconlist-select');
		$("#cbb-content .cbb-imgbanner").eq(prev).animate({opacity:'0'},1000);
		$("#cbb-content .cbb-imgbanner").eq(prev).css('zIndex',7);
		$("#cbb-content .cbb-imgbanner").eq(prev).find(".imglist a").removeClass('scale');
		
		indexId=$("#cbb-content ul li").index(obj);
		$(obj).addClass('iconlist-select');

		$("#cbb-content .cbb-imgbanner").eq(indexId).find(".imglist a").addClass('scale');
		$("#cbb-content .cbb-imgbanner").eq(indexId).css('zIndex',8).animate({opacity:'1'},1000);

		
	}
	function banner(){
		var length=$("#cbb-content ul li").length;
		var prev;
		indexId=(indexId+1)%length;
		if(indexId==0){
			prev=length-1;
		}else{
			prev=indexId-1;
		}
		banner_fn($("#cbb-content ul li").eq(indexId),prev);
	}
	$("#cbb-content ul li").hover(function(){
		clearInterval(timer);
		if($("#cbb-content ul li").index(this)!=indexId){
			banner_fn(this,indexId);
		}
	},function(){
		timer=setInterval(banner,3000);
	});
	




	/*热门品牌*/
	$("#ch-container .chc-hotbrand .chc-hot-banner").hover(function(){
		if($("#c-hot #ch-container").width()==1190){
			$("#ch-container .chc-hotbrand .chc-hover-brand").animate({width:810},500,function(){
			$("#ch-container .chc-hotbrand .hot-close").css('display','block');
			});
		}else if($("#c-hot #ch-container").width()==990){
			$("#ch-container .chc-hotbrand .chc-hover-brand").animate({width:618},500,function(){
			$("#ch-container .chc-hotbrand .hot-close").css('display','block');
			});
		}
		
	},function(){
		$("#ch-container .chc-hotbrand .hot-close").css('display','none');
		$("#ch-container .chc-hotbrand .chc-hover-brand").animate({width:0},500);
	});


	




	/*顶部搜索框效果*/
	$("#top-search #tmall-input").focus(function(){
		if($("#top-search .tmall-top-sear .tm-label").css('visibility')=='visible'){
			$("#top-search .tmall-top-sear .tm-label").css('color','#ccc');
		}	
	});

	$("#top-search #tmall-input").bind('keydown',function(){
		$("#top-search .tmall-top-sear .tm-label").css('visibility','hidden');
	});
	$("#top-search #tmall-input").blur(function(){
		if(this.value.length>0){
			$("#top-search .tmall-top-sear .tm-label").css('visibility','hidden');
		}else{
			$("#top-search .tmall-top-sear .tm-label").css('color','#666');
			$("#top-search .tmall-top-sear .tm-label").css('visibility','visible');
		}	
	});

	/*最顶部搜索*/
	$(window).bind('scroll',function(){
		setTimeout(function(){
			var floor1=$("#c-floor #cf-container #c-floor-nvz");
			if($(window).innerHeight()+$(window).scrollTop()>floor1.offset().top){
				$("#top-search").css('top','0px');
			}else{
				$("#top-search").css('top','-50px');
			}
		},100);
	});

	/*最右侧的楼层导航*/
	$("#floor-lift .f-lift-container li").hover(function(){
			$(this).find(".fl-lift-word").removeClass("lift-select").addClass("lift-unselect").css('display','block');
		
	},function(){
		if($(this).attr('floorSelected')=='true'){

			$(this).find(".fl-lift-word").css('display','block').removeClass("lift-unselect").addClass("lift-select");

		}else{
			$(this).find(".fl-lift-word").removeClass("lift-select").addClass("lift-unselect").css('display','none');
		}
		
	});

	/*楼层*/
	$(window).bind('scroll',function(){
		var floortimer=setTimeout(function(){
			var floor1=$("#c-floor #cf-container #c-floor-nvz");
			var floor2=$("#c-floor #cf-container #c-floor-meir");
			var floor3=$("#c-floor #cf-container #c-floor-nanz");
			var floor4=$("#c-floor #cf-container #c-floor-nvx");
			var floor5=$("#c-floor #cf-container #c-floor-yund");
			var floor6=$("#c-floor #cf-container #c-floor-shouj");
			var floor7=$("#c-floor #cf-container #c-floor-jiad");
			var floor8=$("#c-floor #cf-container #c-floor-muy");
			var floor9=$("#c-floor #cf-container #c-floor-ship");
			var floor10=$("#c-floor #cf-container #c-floor-tus");
			var floor11=$("#c-floor #cf-container #c-floor-jiaz");
			var winHeight=$(window).innerHeight();
			var scrollTop=$(window).scrollTop();
			var nowheight=winHeight+scrollTop;

			if(nowheight<floor1.offset().top){
				$("#floor-lift").css('display','none');

			}else if(all()){
				$("#floor-lift").css('display','block');
			}
			if(nowheight>floor1.offset().top){
				if(floor1.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+1,
						success:function(data){
							var text=loadContent(data);
							floor1.html(text);
							floorslide(floor1);
						}
					});
					floor1.attr('floorCont','true');
				}
				
			}
			if(nowheight>floor2.offset().top){
				if(floor2.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+2,
						success:function(data){
							var text=loadContent(data);
							floor2.html(text);
							floorslide(floor2);
						}
					});
					floor2.attr('floorCont','true');
				}			
			}
			if(nowheight>floor3.offset().top){
				if(floor3.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+3,
						success:function(data){
							var text=loadContent(data);
							floor3.html(text);
							floorslide(floor3);
						}
					});
					floor3.attr('floorCont','true');
				}			
			}
			if(nowheight>floor4.offset().top){
				if(floor4.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+4,
						success:function(data){
							var text=loadContent(data);
							floor4.html(text);
							floorslide(floor4);
						}
					});
					floor4.attr('floorCont','true');
				}			
			}
			if(nowheight>floor5.offset().top){
				if(floor5.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+5,
						success:function(data){
							var text=loadContent(data);
							floor5.html(text);
							floorslide(floor5);
						}
					});
					floor5.attr('floorCont','true');
				}			
			}

			if(nowheight>floor6.offset().top){
				if(floor6.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+6,
						success:function(data){
							var text=loadContent(data);
							floor6.html(text);
							floorslide(floor6);
						}
					});
					floor6.attr('floorCont','true');
				}			
			}


			if(nowheight>floor7.offset().top){
				if(floor7.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+7,
						success:function(data){
							var text=loadContent(data);
							floor7.html(text);
							floorslide(floor7);
						}
					});
					floor7.attr('floorCont','true');
				}			
			}

			if(nowheight>floor8.offset().top){
				if(floor8.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+8,
						success:function(data){
							var text=loadContent(data);
							floor8.html(text);
							floorslide(floor8);
						}
					});
					floor8.attr('floorCont','true');
				}			
			}

			if(nowheight>floor9.offset().top){
				if(floor9.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+9,
						success:function(data){
							var text=loadContent(data);
							floor9.html(text);
							floorslide(floor9);
						}
					});
					floor9.attr('floorCont','true');
				}			
			}

			if(nowheight>floor10.offset().top){
				if(floor10.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+10,
						success:function(data){
							var text=loadContent(data);
							floor10.html(text);
							floorslide(floor10);
						}
					});
					floor10.attr('floorCont','true');
				}			
			}

			if(nowheight>floor11.offset().top){
				if(floor11.attr('floorCont')=='false'){
					$.ajax({
						url:"floor.php",
						type:"GET",
						data:"num="+11,
						success:function(data){
							var text=loadContent(data);
							floor11.html(text);
							floorslide(floor11);
						}
					});
					floor11.attr('floorCont','true');
				}			
			}

			function loadContent(data){
				var result=JSON.parse(data);
				var text='<div class="c-floor-sidebar">';
				text+='<h2>';
				var h2=result['h2'];
				for(var i=0;i<h2.length;i++){	
					text+='<a href="#"><span class="icon icon-floor">'+h2[i][0]+'</span><span>'+h2[i][1]+'</span></a>';
					if(i==0){
						text+='<span class="c-floor-line"></span>';
					}
				}
				text+='</h2>';
				text+='<div class="cf-sidebanner">';
				text+='<strong class="icon icon-floorbrand icon-floorbrand-right">&#x3464;</strong>';
				text+='<strong class="icon icon-floorbrand icon-floorbrand-left">&#x3465;</strong>';
				text+='<div class="cf-side-brand">'+'<div class="cf-brand-list">';
				var plist=result['plist'];
				for(var j=0;j<plist.length;j++){
					var alist=plist[j];
					text+='<p class="cf-brand-list'+(j+1)+'"'+'>';					
					for(var k=0;k<alist.length;k++){
						text+='<a href="#"><img src='+alist[k];
						text+=' />'+'</a>';
					}
					text+='</p>';
				}
				text+='</div></div></div>';
				text+='<div class="cf-side-word">';
				text+='<ul>';
				var ul=result['ul'];
				for(var m=0;m<ul.length;m++){
					text+='<li><a href="#">'+ul[m]+'</a></li>'
				}
				text+='</ul></div></div>';

				text+='<div class="c-floor-banner">';
				text+='<a href="#"><img src='+result['banner'];
				text+=' /></a>';
				text+='</div>';

				text+='<div class="c-floor-smallbanner">';
				var smallbanner=result['smallbanner'];
				for(var n=0;n<smallbanner.length;n++){
					if(n==2||n==5){
						text+='<a class="c-floor-smbannerlast" href="#"><img src='+smallbanner[n];
						text+=' /></a>';
					}else{
						text+='<a  href="#"><img src='+smallbanner[n];
						text+=' /></a>';
					}
				}
				text+='</div>';
				return text;
			}
			function floorLift(obj){
					obj.attr('floorSelected','true');
					obj.find('.fl-lift-word').css('display','block').removeClass("lift-unselect").addClass('lift-select');
					clearTimeout(floortimer);
					obj.siblings().attr('floorSelected','false');
					obj.siblings().find('.fl-lift-word').css('display','none').addClass("lift-unselect").removeClass('lift-select');
			}
			if(nowheight<floor1.offset().top+320){
				$("#floor-lift .f-lift-container li").attr('floorSelected','false');
				$("#floor-lift .f-lift-container li").find('.fl-lift-word').css('display','none')
				.addClass("lift-unselect").removeClass('lift-select');

			}
			if(nowheight>floor1.offset().top+320){
				
				floorLift($("#floor-lift .f-lift-container li.lift-nvz"));
			}
			if(nowheight>floor2.offset().top+250){
				
				floorLift($("#floor-lift .f-lift-container li.lift-meiz"));

			}

			if(nowheight>floor3.offset().top+250){
			
				floorLift($("#floor-lift .f-lift-container li.lift-nanz"));
			}
			if(nowheight>floor4.offset().top+250){
				
				floorLift($("#floor-lift .f-lift-container li.lift-xieb"));
			}
			if(nowheight>floor5.offset().top+250){

				floorLift($("#floor-lift .f-lift-container li.lift-huw"));
			}
			if(nowheight>floor6.offset().top+250){
			
				floorLift($("#floor-lift .f-lift-container li.lift-shouj"));
			}
			if(nowheight>floor7.offset().top+250){
				
				floorLift($("#floor-lift .f-lift-container li.lift-jiay"));
			}
			if(nowheight>floor8.offset().top+250){
			
				floorLift($("#floor-lift .f-lift-container li.lift-muy"));
			}
			if(nowheight>floor9.offset().top+250){
				
				floorLift($("#floor-lift .f-lift-container li.lift-ship"));
			}
			if(nowheight>floor10.offset().top+250){
				
				floorLift($("#floor-lift .f-lift-container li.lift-tus"));
			}
			if(nowheight>floor11.offset().top+250){
				floorLift($("#floor-lift .f-lift-container li.lift-jiaz"));
			}

			if(nowheight>floor11.offset().top+250+floor11.height()){
				$("#floor-lift .f-lift-container li").attr('floorSelected','false');
				$("#floor-lift .f-lift-container li").find('.fl-lift-word').css('display','none')
				.addClass("lift-unselect").removeClass('lift-select');
				clearTimeout(floortimer);
			}



		},300);	
	});
	
	/*点击最左侧的楼层导航，跳转功能*/
	$("#floor-lift .f-lift-container li").click(function(){
		var floorIndex;
		$(this).attr('floorSelected','true');
		$(this).find(".fl-lift-word").css('display','block').removeClass("lift-unselect").addClass('lift-select');
		$(this).siblings().attr('floorSelected','false');
		$(this).siblings().find('.fl-lift-word').css('display','none').addClass("lift-unselect").removeClass('lift-select');

		floorIndex=$("#floor-lift .f-lift-container li").index(this);
		var nowelem=$("#c-floor #cf-container .c-floor-item").eq(floorIndex);
		var winHeight=$(window).innerHeight();
		var elemHeight=nowelem.offset().top;
		var scrollHeight=elemHeight-winHeight+nowelem.height()+120;
		$('html,body').animate({scrollTop:scrollHeight},500);

	});


	function getScrollbarSize(){
	 	var dv = document.createElement('div');
	  	dv.style.position = 'absolute';
	  	dv.style.left = '-1000px';
	  	dv.style.top = '-1000px';
	  	dv.style.width = '100px';
	 	dv.style.height = '100px';
	  	dv.style.padding = '0px'; 
	  	dv.style.margin = '0px';
	  	dv.style.overflow = 'scroll';
	  	dv.style.border = '0px';
		var inn = document.createElement('div');
		inn.style.position = 'relative';
		inn.style.border = '0px';
		inn.style.height = '200px';
		inn.style.padding = '0px'; 
		inn.style.margin = '0px';  
		dv.appendChild(inn);
		document.body.appendChild(dv);
		var scrollbarWidth = 100-inn.offsetWidth;
		document.body.removeChild(dv);    
		return scrollbarWidth;
	}


	function hasFloorLift(){
		var floor1=$("#c-floor #cf-container #c-floor-nvz");
		var winHeight=$(window).innerHeight();
		var scrollTop=$(window).scrollTop();
		var nowheight=winHeight+scrollTop;
		if(all()&&nowheight>floor1.offset().top){
			$("#floor-lift").css('display','block');
		}else{
			$("#floor-lift").css('display','none');
		}
	}

	function all(){
		var scrollWidth=getScrollbarSize();
		if($(window).innerWidth()+scrollWidth==screen.width){
			return true;
		}else{
			return false;
		}
	}

	hasFloorLift();
	$(window).bind('resize',hasFloorLift);


	/*楼层*/
	/*楼层里面的小的侧滑轮播器*/
	function floorslide(obj){
		var slideIndex=0;
		obj.find(".c-floor-sidebar .cf-sidebanner .cf-brand-list .cf-brand-list1").css('left',0);
		obj.find(".c-floor-sidebar .cf-sidebanner .cf-brand-list .cf-brand-list2").css('left','190px');
		obj.find(".c-floor-sidebar .cf-sidebanner .cf-brand-list .cf-brand-list3").css('left','190px');
		obj.find(".c-floor-sidebar .cf-sidebanner .cf-brand-list .cf-brand-list4").css('left','190px');
	
		function slideLeft(){
			var pList=obj.find('.c-floor-sidebar .cf-sidebanner .cf-brand-list p');
			var length=pList.length;
			var prev;
			slideIndex=(slideIndex+1)%length;
			if(slideIndex==0){
					prev=length-1;
			}else{
					prev=slideIndex-1;
			}
			pList.eq(prev).animate({left:-190},1000);
			pList.eq(slideIndex).css('left','190px').animate({left:0},1000);
		}
		function slideRight(){
			var pList=obj.find('.c-floor-sidebar .cf-sidebanner .cf-brand-list p');
			var length=pList.length;
			var prev;
			slideIndex=(slideIndex+1)%length;
			if(slideIndex==0){
					prev=length-1;
			}else{
					prev=slideIndex-1;
			}
			pList.eq(prev).animate({left:190},800);
			pList.eq(slideIndex).css('left','-190px').animate({left:0},800);
		}
		var slidetimer=setInterval(slideLeft,4000);

		obj.find('.c-floor-sidebar .cf-sidebanner .icon-floorbrand-right').click(function(){
			clearInterval(slidetimer);
			slideLeft();
			slidetimer=setInterval(slideLeft,4000);
		});
		obj.find('.c-floor-sidebar .cf-sidebanner .icon-floorbrand-left').click(function(){
			clearInterval(slidetimer);
			slideRight();
			slidetimer=setInterval(slidLeft,4000);
		});
	}





	/*最右侧的功能条*/
	$("#mallbar #mallbar-list ul li").hover(function(){
		$(this).find('.list-cont').css('display','block').animate({right:35},500);
	},function(){
		var _this=this;
		$(this).find('.list-cont').animate({right:70},200,function(){
				$(_this).find('.list-cont').css('display','none');
		});
	});


	$("#mallbar #mallbar-list ol li").hover(function(){
		$(this).css('backgroundColor','#c40000');
		$(this).find('.list-cont2').css('display','block').animate({right:35},500);
	},function(){
		$(this).css('backgroundColor','');
		var _this=this;
		$(this).find('.list-cont2').animate({right:70},200,function(){
				$(_this).find('.list-cont2').css('display','none');
		});
	});

	/*返回顶部的功能*/
	$("#mallbar #mallbar-list ol li.top").click(function(){
		var _this=this;
		$('html,body').animate({scrollTop:0},1000,function(){
			$(_this).css('display','none');
		});
	});
	function hasScrollTop(){
		if($(window).scrollTop()==0){
			$("#mallbar #mallbar-list ol li.top").css('display','none');
		}else{
			$("#mallbar #mallbar-list ol li.top").css('display','block');
		}
	}
	hasScrollTop();
	$(window).bind('scroll',hasScrollTop);


	/*最右侧的功能条的点击效果*/
	$("#mallbar #mallbar-list li").not(".top,.login,.saosao,.fangkui").click(function(){
		if($("#mallbar #mallbar-content").attr('barOpen')=="false"){
			$("#mallbar").animate({right:0},300);
			$(this).attr('barListOpen','true');
			$("#mallbar #mallbar-content").attr('barOpen','true');
		}else if($("#mallbar #mallbar-content").attr('barOpen')=="true"&&$(this).attr('barListOpen')=='true'){
			$("#mallbar").animate({right:-235},300);
			$("#mallbar #mallbar-content").attr('barOpen','false');
			$(this).attr('barListOpen','true');
		}
	});




});