<?php
header('Content-type:text/html;charset=utf-8');

	$num=$_GET['num'];
	$floor1='{"h2":[["&#x3459;","女装"],["&#xf0048;","内衣"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';


	$floor2='{"h2":[["&#x3459;","美容"],["&#xf0048;","护肤"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner2.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';

	$floor3='{"h2":[["&#x3459;","男装"],["&#xf0048;","内衣"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner3.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';

	$floor4='{"h2":[["&#x3459;","女鞋"],["&#xf0048;","男鞋"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner4.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';


	$floor5='{"h2":[["&#x3459;","运动"],["&#xf0048;","户外"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner5.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';

	$floor6='{"h2":[["&#x3459;","手机"],["&#xf0048;","数码"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner6.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';

	$floor7='{"h2":[["&#x3459;","家用"],["&#xf0048;","电器"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner7.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';

	$floor8='{"h2":[["&#x3459;","母婴"],["&#xf0048;","玩具"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner8.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';


	$floor9='{"h2":[["&#x3459;","食品"],["&#xf0048;","零食"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner9.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';


	$floor10='{"h2":[["&#x3459;","图书"],["&#xf0048;","小说"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner10.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';

	$floor11='{"h2":[["&#x3459;","家装"],["&#xf0048;","家纺"]],
			  "plist":[["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list11.jpg","mall-page\/img-mp\/floor\/cf-brand-list12.jpg","mall-page\/img-mp\/floor\/cf-brand-list13.jpg"],["mall-page\/img-mp\/floor\/cf-brand-list21.jpg","mall-page\/img-mp\/floor\/cf-brand-list22.jpg","mall-page\/img-mp\/floor\/cf-brand-list23.jpg"]],
			  "ul":["女装会场","羽绒会场","商场同款","双11爆款","双11独享","抢优惠券","内衣会场","双11保暖"],
			  "banner":"mall-page/img-mp/floor/c-floor-banner11.jpg",
			  "smallbanner":["mall-page\/img-mp\/floor\/c-floor-smallbanner1.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner2.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner3.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner5.jpg","mall-page\/img-mp\/floor\/c-floor-smallbanner4.jpg"]		
			}';

	if($num==1){
		echo $floor1;
	}else if($num==2){
		echo $floor2;
	}else if($num==3){
		echo $floor3;
	}else if($num==4){
		echo $floor4;
	}else if($num==5){
		echo $floor5;
	}else if($num==6){
		echo $floor6;
	}else if($num==7){
		echo $floor7;
	}else if($num==8){
		echo $floor8;
	}else if($num==9){
		echo $floor9;
	}else if($num==10){
		echo $floor10;
	}else{
		echo $floor11;
	}


?>



   