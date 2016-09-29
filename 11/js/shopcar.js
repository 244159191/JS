
$(function(){
		 $("#clearcar").click(function(){
			 $.cookie("goods","0")
		     $(".shopcarcount").html("0")
			 $(".showcar").css("display","none")
			 $(".pp1").html("您的购物车中有0件商品")
			 $(".pp2").html("购物车小计:0.00")
			 $(".shopcarprice").html("￥0.00") 	
			 $(".top").html("购物车0件")
		 })
		var cookieCount = parseInt($.cookie('goods')) 
		var nowCount = parseInt($("#buycount").val())
	  		if($("#buycount").val() == "" || $("#buycount").val() == "0"){
	  			nowCount = 0
	  		}	 	
	  		if($.cookie('goods') == null){
	  			cookieCount = 0	
	  			$.cookie('goods',"0")
	  		}else{
	  			$(".nav1").mouseenter(function(){
					$(".showcar").css("display","block")
					$(".nav1").css("background","url(img/car.gif)").css("border","1px solid #000").css("padding","1px").css("width","59px").css("height","57px").css("top","-1px").css("left","-1px")
					$(".nav1 a").css("width","59px").css("height","57px").css("top","-2px").css("left","-1px")
					$(".nav1 span").css("color","#000").css("top","39px").css("left","-1px")
				})
				$(".nav1").mouseleave(function(){
					$(".showcar").css("display","none")
					$(".nav1").css("background","url(img/car1.jpg)").css("top","0").css("left","0")
					$(".nav1 span").css("color","#fff")
				})
	  		}	 
	  		$(".pp1").html("您的购物车中有" + cookieCount + "件商品")
		       var totalPrice = 599 * cookieCount;
		       $(".pp2").html("购物车小计:" + totalPrice + ".00")
		       $(".top").html("购物车" + cookieCount + "件")
		       $(".shopcarcount").html(cookieCount)
		       $(".shopcarprice").html("￥" + totalPrice + ".00") 	
		       


		$("#shopcar1").click(function(){
			nowCount = parseInt($("#buycount").val())
			if($("#buycount").val() == "" || $("#buycount").val() == "0"){
			$("#buycount").css("border","1px solid #f00")
			}else{
		       $("#show").css("display","block");
		       $("#buycount").css("border","1px solid #000")
		       if($.cookie('goods')!= 0){
		        nowCount2 = parseInt($.cookie('goods'))  + nowCount
		    	}else{
		    	nowCount2 = nowCount;	
		    	}
		       $(".pp1").html("您的购物车中有" + nowCount2 + "件商品")
		       var totalPrice = 599 * nowCount2
		       $(".pp2").html("购物车小计:" + totalPrice + ".00")
		       $(".top").html("购物车" + nowCount2 + "件")
		       $(".shopcarcount").html(nowCount2)
		       $(".shopcarprice").html("￥" + totalPrice + ".00")
		       	//cookie
		       
		       $.cookie('goods', nowCount2,{expires:300});	
		  


				$(".nav1").mouseenter(function(){
					$(".showcar").css("display","block")
					$(".nav1").css("background","url(img/car.gif)").css("border","1px solid #000").css("padding","1px").css("width","59px").css("height","57px").css("top","-1px").css("left","-1px")
					$(".nav1 a").css("width","59px").css("height","57px").css("top","-2px").css("left","-1px")
					$(".nav1 span").css("color","#000").css("top","39px").css("left","-1px")
				})
				$(".nav1").mouseleave(function(){
					$(".showcar").css("display","none")
					$(".nav1").css("background","url(img/car1.jpg)").css("top","0").css("left","0")
					$(".nav1 span").css("color","#fff")
				})
			}
		})

			

				$(".showcar").mouseenter(function(){
					$(".showcar").css("display","block")
					$(".nav1").css("background","url(img/car.gif)").css("border","1px solid #000").css("padding","1px").css("width","59px").css("height","57px")
					$(".nav1 span").css("color","#000").css("top","39px").css("left","-1px")
				})
				$(".showcar").mouseleave(function(){
					$(".showcar").css("display","none")
					$(".nav1").css("background","url(img/car1.jpg)")
					$(".nav1 span").css("color","#fff")
				})
	
		
				$("#shopcar_buttom_right").click(function(){
			       $("#show").css("display","none")
				})
				$("#popClose").click(function(){
			       $("#show").css("display","none")
				})

	})