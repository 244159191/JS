window.onload = function(){
      //fixed_nav
  var isClose = false
  window.onscroll = function(){
    var fixed_nav = document.getElementsByClassName("fixed_nav")[0];
    //join
    var join = document.getElementById("join");
    var join1 = document.getElementById("join1");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    fixed_nav.style.top = scrollTop - 35 +"px" ;
    var nav4 = fixed_nav.getElementsByClassName("nav4")[0];
    if(scrollTop > 969 && isClose == false){
      nav4.style.display = "block";
      join1.style.display = "block";
    }
    if(parseInt(fixed_nav.style.top) <969){
       nav4.style.display = "none"
    }
    var close = join1.getElementsByClassName("del")[0];
    var wrap = join1.getElementsByClassName("wrap")[0];
    close.onclick = function(){
       join1.style.display = "none";
       isClose = true;
       join.style.height = 0;
    }
  }

  var everything = document.getElementById("everything");
   var aUl = everything.getElementsByTagName("ul");
   var newfall = document.getElementById("newfall");
   var aUl1 = newfall.getElementsByTagName("ul");
   var tend = document.getElementById("tend");
   var aUl2 = tend.getElementsByTagName("ul");
   var hot1 = document.getElementById("hot");
   var aUl3 = hot1.getElementsByTagName("ul");
   var cowboy = document.getElementById("cowboy");
   var aUl4 = cowboy.getElementsByTagName("ul");
    ajax("get","js/allProduct.json","",function(data){
        var arr1_1 = JSON.parse(data).data1_1;
        for(var i = 0; i< arr1_1.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr1_1[i].title + '</a>';
           aUl[0].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
        var arr1_2 = JSON.parse(data).data1_2;
        for(var i = 0; i< arr1_2.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr1_2[i].title + '</a>';
           aUl[1].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
        var arr1_3 = JSON.parse(data).data1_3;
        for(var i = 0; i< arr1_3.length;i++){
           var aLi = document.createElement("li");
          aLi.innerHTML = '<a href = "">' + arr1_3[i].title + '</a>';
           aUl[2].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
        var arr1_4 = JSON.parse(data).data1_4;
        for(var i = 0; i< arr1_4.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr1_4[i].title + '</a>';
           aUl[3].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
           if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
        var arr1_5 = JSON.parse(data).data1_5;
        for(var i = 0; i< arr1_5.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr1_5[i].title + '</a>';
           aUl[4].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
        var arr1_6 = JSON.parse(data).data1_6;
        for(var i = 0; i< arr1_6.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr1_6[i].title + '</a>';
           aUl[5].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
        var arr1_7 = JSON.parse(data).data1_7;
        for(var i = 0; i< arr1_7.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr1_7[i].title + '</a>';
           aUl[6].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
        var arr1_8 = JSON.parse(data).data1_8;
        for(var i = 0; i< arr1_8.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr1_8[i].title + '</a>';
           aUl[7].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
          if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }

    
     var arr2 = JSON.parse(data).data2;
        for(var i = 0; i< arr2.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr2[i].title + '</a>';
           aUl1[0].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
      var arr3_1 = JSON.parse(data).data3_1;
        for(var i = 0; i< arr3_1.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr3_1[i].title + '</a>';
           aUl2[0].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }
      var arr3_2 = JSON.parse(data).data3_2;
        for(var i = 0; i< arr3_2.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr3_2[i].title + '</a>';
           aUl2[1].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        } 
        var arr4 = JSON.parse(data).data4;
        for(var i = 0; i< arr4.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr4[i].title + '</a>';
           aUl3[0].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        } 
       var arr5 = JSON.parse(data).data5;
        for(var i = 0; i< arr5.length;i++){
           var aLi = document.createElement("li");
           aLi.innerHTML = '<a href = "">' + arr5[i].title + '</a>';
           aUl4[0].appendChild(aLi);
           if(i == 0){
            aLi.setAttribute("class","first_1")
           }
            if(i == 1){
            aLi.setAttribute("class","first1")
           }
        }

     //content_right
     var iLen = 0;
     var content_right = document.getElementById("content_right")
        content_ul2 = content_right.getElementsByTagName("ul")[0];
      aLi_content = content_ul2.getElementsByTagName("li");
      iLen = aLi_content.length;
      var course = JSON.parse(data).courses;
        if(!course.length){
          return;
        }
      for(var i = 0; i < course.length; i++){      
          var oDiv = document.createElement("div");
          var oImg = document.createElement("img");
          oImg.src = "img/allimg" + course[i].url +".jpg";
          var oImg1 = document.createElement("img");
          oImg1.src = "img/clother" + course[i].url +".jpg";
          var oA1 = document.createElement("a");
          var oSpan = document.createElement("span");
          oSpan.innerHTML ="快速查看"
          oA1.setAttribute("href","singleProduct.html")
          oA1.appendChild(oImg1);
          oA1.appendChild(oImg);  
          oImg1.setAttribute("class","clotherimg")
          var oP1 =  document.createElement("p");     
          var oP2 =  document.createElement("p");  
          oP1.innerHTML = course[i].title;
          oP2.innerHTML = course[i].price;
          oP2.setAttribute("class","p_1")
          oDiv.appendChild(oSpan);
          oDiv.appendChild(oA1);
          oDiv.appendChild(oP1); 
          oDiv.appendChild(oP2);
          aLi_content[i%4].appendChild(oDiv)  
}
       var con_div = content_ul2.getElementsByTagName("div")
       var con_img = content_ul2.getElementsByClassName("clotherimg")
       var con_span = content_ul2.getElementsByTagName("span")
       for(var i = 0 ; i < con_div.length; i++){
         con_div[i].index = i;
          con_div[i].onmouseover = function(){
          con_img[this.index].style.zIndex = 2;
          con_span[this.index].style.zIndex = 3;
        }
          con_div[i].onmouseout = function(){
          con_img[this.index].style.zIndex = 1;
           con_span[this.index].style.zIndex = 1;
        }
      }
    //content_left
       var content_left = document.getElementById("content_left")
        content_ul1 = content_left.getElementsByTagName("ul"); 
        var course1 = JSON.parse(data).courses1;
         for(var i = 0; i < course1.length; i++){
           var content_li = document.createElement("li")
           var content_a = document.createElement("a")
           content_a.setAttribute("href","")
           content_a.innerHTML = course1[i].title;
           content_li.appendChild(content_a);
           content_ul1[0].appendChild(content_li);
           if(i == 0){
              content_li.setAttribute("class","first")
           }else if(i == 1 || i == 3 || i == 5 || i == 10 || i == 16 ||  i == 20 || i == 23 || i == 25 || i == 27 ){
              content_li.setAttribute("class","first_f")
           }       
         } 
       var course2 = JSON.parse(data).courses2;
         for(var i = 0; i < course2.length; i++){
            var content_li = document.createElement("li")
           var content_a = document.createElement("a")
           content_a.setAttribute("href","")
            content_a.innerHTML = course2[i].title;
           content_li.appendChild(content_a);
           content_ul1[1].appendChild(content_li);
           if(i == 0 || i == 9 || i == 16){
              content_li.setAttribute("class","first_q")
           }
         }  
         var course3 = JSON.parse(data).courses3;
         for(var i = 0; i < course3.length; i++){
            var content_li = document.createElement("li")
           var content_a = document.createElement("a")
           content_a.setAttribute("href","")
            content_a.innerHTML = course3[i].title;
           content_li.appendChild(content_a);
           content_ul1[2].appendChild(content_li);
         }
         var course4 = JSON.parse(data).courses4;
         for(var i = 0; i < course4.length; i++){
            var content_li = document.createElement("li")
           var content_a = document.createElement("a")
           content_a.setAttribute("href","")
            content_a.innerHTML = course4[i].title;
           content_li.appendChild(content_a);
           content_ul1[3].appendChild(content_li);
         }
        
         var content_li1 = content_left.getElementsByTagName("li");
         var content_a1 = content_left.getElementsByTagName("a");
         for(var i = 0 ;i < content_li1.length; i++){
          content_li1[i].index = i; 
          content_li1[i].onmouseover =function(){
            content_a1[this.index].style.color = "gray";
          }
          content_li1[i].onmouseout =function(){
            content_a1[this.index].style.color = "black";
          }
         }

          var content_btn = content_left.getElementsByTagName("button");
          var isOpen = false;
          for(var i = 0 ;i < content_btn.length; i++){
            content_btn[i].index = i;
            content_btn[i].onclick = function(){
              if(isOpen == false){
                content_ul1[this.index+1].style.display ="block";
                this.innerHTML = "-";
                isOpen = true;
              }else{
                content_ul1[this.index+1].style.display ="none";
                this.innerHTML = "+";
                isOpen = false;
              }
            }
          }

        var course5 = JSON.parse(data).courses5;
          for(var i = 0; i < course5.length; i++){
              var content_li = document.createElement("li")
              var content_a = document.createElement("a")
              var content_img = document.createElement("img")
              content_a.setAttribute("href","")
              content_img.src = "img/ulimg"+ course5[i].title +".jpg";
              content_a.appendChild(content_img);
              content_li.appendChild(content_a);
              content_ul1[4].appendChild(content_li);
          }



})
   //header 
     _$("#search_id").addEventListener("focus",function(){
      _$("#search_id").placeholder =""; 
            startMove(_$(".search")[0],{width:230})
      },false)
     _$("#search_id").addEventListener("blur",function(){
          _$("#search_id").placeholder ="搜索"; 
           startMove(_$(".search")[0],{width:113})
     },false)
    
   
     //nav
       var oDiv1 = document.getElementById("nav")
          var oA = oDiv1.getElementsByTagName("a")
          var odiv = document.getElementById("notice1")
          var odiv_node = odiv.getElementsByTagName("div")
          var span = oDiv1.getElementsByTagName("span")
          for(var i = 1;i< oA.length -6 ;i++){
            oA[i].index = i;  
            oA[i].onmouseover = function(){
              odiv_node[this.index].style.display = "block"; 
              this.style.background = "black";
              this.style.color = "white";
              span[this.index].style.display = "none";
              }
            oA[i].onmouseout = function(){
              odiv_node[this.index].style.display = "none"; 
              this.style.background = "white";
              this.style.color = "black";
              span[this.index].style.display = "block";
              }   
          } 
         for(var j = 1;j< odiv_node.length  ;j++){ 
           odiv_node[j].index = j;  
           odiv_node[j].onmouseover = function(){
             this.style.display = "block"; 
              oA[this.index].style.background = "black";
              oA[this.index].style.color = "white";
              span[this.index].style.display = "none";
              }
              odiv_node[j].onmouseout = function(){
             this.style.display = "none"; 
              oA[this.index].style.background = "white";
              oA[this.index].style.color = "black";
              span[this.index].style.display = "block";
              }
          }
         //listlink
            var listlink = document.getElementById("listlink")
            var list_btn = listlink.getElementsByTagName("button")[0]
            list_btn.onmouseover = function(){
               this.style.background = "#fff";
               this.style.color = "#000";
             }
            list_btn.onmouseout = function(){
               this.style.background = "#000";
               this.style.color = "#fff"; 
             }


           var imglink2 = document.getElementsByClassName("weixin");
           var code = document.getElementsByClassName("code");
           for(var i = 0 ; i < imglink2.length; i++){
               imglink2[i].index = i
               imglink2[i].onmouseover = function(){
                   code[this.index].style.display = "block";
               }
               imglink2[i].onmouseout = function(){
                   code[this.index].style.display = "none";
               }
           }

   }

















