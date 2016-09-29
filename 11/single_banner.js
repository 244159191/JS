$(function(){
			var aBtn = $("#play").find(".ul1").find("li");
			var oUl = $("#play").find(".ul2");
			var aLi = oUl.find("li");
			var iNow = 0;
			var timer = null;
			aBtn.click(function(){
				iNow = $(this).index();
				tab();
			});
  		 
			var a = 1
 			function tab(){
 				if( parseInt($("#play").find(".ul1").css("top")) % 176 == 0){
				aBtn.attr("class", "");
				aBtn.eq(iNow).attr("class", "active1");			
				 $("#play").find(".ul1").animate({top: -176 * iNow}, function(){
					if(iNow == 7){
						iNow = 0;
						aBtn.eq(iNow).attr("class", "active1");
						$("#play").find(".ul1").css("top", 0);
					}else if(iNow > 7){
						
						$("#play").find(".ul1").css("top", -176*(iNow-7));
					}
				});
				$("#play").find(".ul2").find("img").eq(iNow%7).css("zIndex",a++) 
			  }
			 }
  		 })
