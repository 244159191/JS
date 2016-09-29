$(function(){
			var aBtn = $("#scoll").find("ol").find("li");
			var oUl = $("#scoll").find("ul");
			var aLi = oUl.find("li");

			//记录当前被选中的按钮
			var iNow = 0;
			var timer = null;


			aBtn.click(function(){
				iNow = $(this).index();
				tab();
			});

			timer = setInterval(timerInner, 2000);
			$("#scoll").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			});


			function tab(){
				//当点击的时候,将所有的按钮class都清空
				aBtn.attr("class", "");
				aBtn.eq(iNow).attr("class", "active");
				if(iNow == 3){
					aBtn.eq(0).attr("class", "active");
				}
				oUl.animate({left: -950 * iNow}, function(){
					if(iNow == 3){
						iNow = 0;
						oUl.css("left", 0);
					}
				});
			}

			function timerInner(){
				iNow++;
				tab();
			}
		});