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
    ajax("get","js/ajax1.json","",function(data){
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

        var ul2 = document.getElementsByClassName("ul2")[0]
         var ul_big = document.getElementsByClassName("ul_big")[0]
         var bigimg = ul_big.getElementsByTagName("img")
         var ul2_img = ul2.getElementsByTagName("img") 
           for(var i = 0 ; i < ul2_img.length ; i++){
            ul2_img[i].index = i;  
          
        ul2_img[i].onmouseover=function(){
        _$(".position_box")[0].style.display='block';
        ul_big.style.display='block';
        bigimg[this.index].style.display='block';
        bigimg[this.index].style.zIndex = "3";

      }
        ul2_img[i].onmouseout=function(){
          _$(".position_box")[0].style.display='none';
          ul_big.style.display='none';
           bigimg[this.index].style.display='none';

        }

              
        ul2_img[i].onmousemove=function(event){
          var evt=event||window.event;
          var left=evt.offsetX-_$(".position_box")[0].offsetWidth/2;

          if(left<0){
            left=0;
          }else if(left>213){
            left=213

          }
          _$(".position_box")[0].style.left=left+'px';


          var top=evt.offsetY-_$(".position_box")[0].offsetHeight/2;

          if(top<0){
            top=0;
          }else if(top>425){
            top=425
          }

          _$(".position_box")[0].style.top=top+'px';

         var proportionX=left/213;
          var proportionY=top/425;


          bigimg[this.index].style.left=-proportionX*980+'px';

          bigimg[this.index].style.top=-proportionY*1866+'px';

        }

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
          var odiv = document.getElementById("notice2")
          var odiv_node = odiv.getElementsByTagName("div")
          var span = oDiv1.getElementsByTagName("span")
          for(var i = 1;i< oA.length - 6 ;i++){
            oA[i].index = i;  
            oA[i].onmouseover = function(){
              odiv_node[this.index + 3].style.display = "block"; 
              this.style.background = "black";
              this.style.color = "white";
              span[this.index].style.display = "none";
              }
            oA[i].onmouseout = function(){
              odiv_node[this.index + 3].style.display = "none"; 
              this.style.background = "white";
              this.style.color = "black";
              span[this.index].style.display = "block";
              }   
          } 
         for(var j = 1;j< odiv_node.length  ;j++){ 
           odiv_node[j + 3].index = j;  
           odiv_node[j + 3].onmouseover = function(){
             this.style.display = "block"; 
              oA[this.index].style.background = "black";
              oA[this.index].style.color = "white";
              span[this.index].style.display = "none";
              }
              odiv_node[j + 3].onmouseout = function(){
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

















