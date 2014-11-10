$(document).ready(function(){
	/*中间的商品服务分类那部分*/
	$("#c-banner .goods-menu").hover(function(){
			var goodsIndex=$("#c-banner .goods-menu").index(this);
			var sidethis=this;
			if(!$(this).hasClass("goods-market")){
				/*ajax*/
				if($(sidethis).attr("hasgoods")=='false'){
				$(sidethis).addClass("goods-hover").removeClass("goods-mouseout");
				$(sidethis).siblings(".goods-menu").removeClass("goods-mouseout").removeClass("goods-hover");
				$(sidethis).siblings(".goods-menu").find("strong").removeClass("icon-mouseout").removeClass("icon-hover");			
				$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).css('display','block').html("<img class='loading' src='mall-page/img-mp/loading.gif' />")
				.siblings(".cb-containerIndex").css('display','none');			
				$.ajax({
					url:"sidebar.php",
					type:"GET",
					data:"num="+(goodsIndex-1),
					success:function(data){
						var result=JSON.parse(data);
						var text;
						text+='<div class="cbb-content2">'+'<div class="cont2-imgbanner">'+'<div class="cont2-img respond">'+'<a href="#">';
						var imgsrc=result['src'];
						for(var i=0;i<imgsrc.length;i++){
							if(i==0){
								text+='<img src='+imgsrc[i]+' />';
							}else{
								text+='<img class="cont-imgword" src='+imgsrc[i]+' />';
							}
						}
						text+='</a>';

						text+='</div></div></div><div class="cbb-menubanner2"><div class="cbb-menucontent2"><div class="cbb-leftmenu2"><div class="cbb-leftsubmenu">';
						var list=result['list'];
						for(var j=0;j<list.length;j++){
							text+='<div class="cbb-leftsubmenu-list">';
							h2=list[j]['h2'];
							text+='<h2>';
							for(var k=0;k<h2.length;k++){
								if(k==0){
									text+='<a class="cbb-leftsubmenu-nav" href="#">';
									text+=h2[k];
									text+='</a>'
								}else{
									text+='<a class="cbb-leftsubmenu-more" href="#">';
									text+=h2[k];
									text+='<span class="icon">&#x347b;</span></a>';
								}
							}
							text+='</h2>';
							p=list[j]['p'];
							for(var m=0;m<p.length;m++){
								text+='<p>';
								var plist=p[m];
								for(var n=0;n<plist.length;n++){
									var alist=plist[n];
									text+='<a href="#">'+alist+'</a>';
								}
								text+='</p>';
								if(m!=p.length-1){
									text+='<span class="line"></span>';
								}
							}
							text+='</div>';
						}
						text+='</div></div>';

						text+='<div class="cbb-rightbanner2">';
						text+='<a href="#">';
						var src2=result['src2'];
						text+='<img src='+src2[0]+' />';
						text+='<span></span>';
						text+='<img src='+src2[1]+' />';
						text+='</div>';
						text+='</div></div>';
						$('#cb-bgcontainer .cb-bgcontainer2').eq((goodsIndex-1)).html(text);
						$(sidethis).find("strong").addClass("icon-hover").removeClass("icon-mouseout");
						$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).find(".cbb-leftmenu2")
						.css('display','block').animate({left:190},200);
						sidemouseover(sidethis);	
						$(sidethis).attr("hasgoods",'true');		
					}
				});
			}else{
				$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).siblings('.cb-containerIndex')
				.find(".cbb-leftmenu2").css('display','none');
				$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).find(".cbb-leftmenu2")
				.css('display','block').animate({left:190},200);
				sidemouseover(this);
			}
			
			}else{
				$("#c-banner .goods-market").addClass("icon-tab");
				sidemouseover(this);
			}

			function sidemouseover(obj){
				$(obj).addClass("goods-hover").removeClass("goods-mouseout");
				$(obj).siblings(".goods-menu").removeClass("goods-mouseout").removeClass("goods-hover");
				$(obj).siblings(".goods-menu").find("strong").removeClass("icon-mouseout").removeClass("icon-hover");
				
				$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).css('display','block')
				.siblings(".cb-containerIndex").css('display','none');
				
				$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).find(".cont2-imgbanner .cont2-img a").addClass("scale");
				
			}

			
		},function(e){	
				var thata=this;
				var goodsIndex=$("#c-banner .goods-menu").index(thata);

				$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).find(".cont2-imgbanner .cont2-img a")
				.removeClass("scale");

				var cbbLeftMenu2=$("#cb-bgcontainer .cb-containerIndex").eq(goodsIndex).find(".cbb-leftmenu2");

				if(!$(thata).hasClass("goods-market")){
					var relatedElement=e.relatedTarget||e.toElement;			
					if(cbbLeftMenu2.get(0)!=relatedElement){
						menuLeft(cbbLeftMenu2,thata);
					}else{				
						$("#cb-bgcontainer .cb-containerIndex .cbb-menucontent2 .cbb-leftmenu2").hover(function(){
							var _this=this;
							$(_this).css('display','block');
						},function(){
							var _this=this;
							$(this).animate({left:185},200,function(){
								$(_this).css('display','none');
							});	
							$(thata).removeClass("goods-hover").addClass("goods-mouseout");
							$(thata).find("strong").removeClass("icon-hover").addClass("icon-mouseout");														
						});					
					}			
				}else{
					$(thata).removeClass("goods-hover").addClass("goods-mouseout");
					$(thata).find("strong").removeClass("icon-hover");
				}

				function menuLeft(obj1,obj2){
					$(obj2).removeClass("goods-hover").addClass("goods-mouseout");
					$(obj2).find("strong").removeClass("icon-hover").addClass("icon-mouseout");

					obj1.animate({left:185},200,function(){
							obj1.css('display','none');
					});
					
				}

		});

});
