$(function(){
        if($.cookie('goods') != null){
		$(".shopcarcount").html($.cookie('goods'))
		}else{
		$(".shopcarcount").html("0")	
		}  
		 $("#clearcar").click(function(){
				$.cookie("goods",null)
			     $(".shopcarcount").html("0")
				 $(".showcar").css("display","none")
				 $(".pp1").html("您的购物车中有0件商品")
				 $(".pp2").html("购物车小计:0.00")
				 $(".shopcarprice").html("￥0.00")
				 $(".top").html("购物车0件")		 			
			})

		if(parseInt($(".shopcarcount").html()) > 0){
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
				$(".pp1").html("您的购物车中有" + $.cookie('goods') + "件商品")
		       var totalPrice = 599 * $.cookie('goods');
		       $(".pp2").html("购物车小计:" + totalPrice + ".00")
		       $(".top").html("购物车" + $.cookie('goods') + "件")
		       $(".shopcarcount").html($.cookie('goods'))
		       $(".shopcarprice").html("￥" + totalPrice + ".00") 	

		}
		
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



})