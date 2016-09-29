 var timer = null;
 var oUl = null;
window.onload = function(){
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
   var banner = document.getElementById("banner");
   var aUl_img = banner.getElementsByTagName("ul")[0]; 
   var news = document.getElementById("news");
   var aUl_img2 = news.getElementsByTagName("ul")[0];
   var image = document.getElementById("image");
   var aUl_img3 = image.getElementsByTagName("ul")[0];
 //json
   ajax("get","ajax.json","",function(data){
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
        //banner
      var arr_img1 = JSON.parse(data).data_img1;
      var scoll = document.getElementById("scoll");
      var scoll_ul = scoll.getElementsByTagName("ul")[0];
      var aLi = scoll.getElementsByTagName("li")
      for(var i = 0; i < arr_img1.length; i++){
        var aA = document.createElement("a");
        aA.setAttribute("href","");
        aLi[i].appendChild(aA);
         var aImg1 = document.createElement("img");
         aImg1.src = arr_img1[i].title;
         aA.appendChild(aImg1);
      }
      


      var arr_img2 = JSON.parse(data).data_img2;
      var aLi1 = document.createElement("li");
      var p1 = document.createElement("p")
      p1.innerHTML =  arr_img2[0].title;
      p1.setAttribute("class","title_news")
      aLi1.appendChild(p1);
      aUl_img2.appendChild(aLi1);
      for(var i = 1 ; i < arr_img2.length; i++){
          var aLi = document.createElement("li");
          var aA = document.createElement("a");
          aA.setAttribute("href","");
           var aImg1 = document.createElement("img");
           aImg1.src = arr_img2[i].title;
           if(i == arr_img2.length - 1){
            aImg1.setAttribute("class","lastImg")
           }
           aA.appendChild(aImg1);
           aLi.appendChild(aA);
           aUl_img2.appendChild(aLi);     
      }

    //news
    var aImg = news.getElementsByTagName("img");
    for(var i = 0;i < aImg.length; i++){
      aImg[i].onmouseover = function(){
        startMove(this,{opacity : 50})
      }
       aImg[i].onmouseout = function(){
        startMove(this,{opacity : 100})
      }
    }
    
    var arr_img3 = JSON.parse(data).data_img3;
    for(var i = 0 ; i < arr_img3.length - 1; i++){
      var aLi = document.createElement("li");
      var aP = document.createElement("p")
      aP.innerHTML =  arr_img3[0].title; 
      aLi.appendChild(aP);
      aUl_img3.appendChild(aLi) 
      if(i == 0){
        aP.setAttribute("class","title_image")
      }
      if(i == 1){
        aP.setAttribute("class","image_title")
      }
    } 
    var aLi2 = document.createElement("li")
    var img_1 = document.createElement("img")
    img_1.src = arr_img3[2].title;
    var aA1 = document.createElement("a")
    aA1.setAttribute("href","");
    aA1.appendChild(img_1);
    aLi2.appendChild(aA1);
    aLi2.setAttribute("class","div_img")
    aUl_img3.appendChild(aLi2)
    //image
    img_1.onmouseover = function(){
       startMove(this,{width:910,height:519,left:20,top:200})
    }
    img_1.onmouseout = function(){
       startMove(this,{width:950,height:559,left:0,top:180})
    }
  
    var arr_img4_1 = JSON.parse(data).data_img4_1;
    var ul_left = document.getElementById("remix_left");
    for(var i = 0 ; i < arr_img4_1.length; i++){
      var aLi3 = document.createElement("li");
      var aA2 = document.createElement("a");
      aA2.setAttribute("href","");
      var img_2 = document.createElement("img")
      img_2.src = arr_img4_1[i].title;
      aA2.appendChild(img_2)
      aLi3.appendChild(aA2);
      ul_left.appendChild(aLi3)
      if(i == 0){
        img_2.setAttribute("id","img02")
      }
      if(i == 1){
        img_2.setAttribute("id","img03")
      }
      if(i == 2){
        img_2.setAttribute("id","img01")
      }
    }
   //remix_left
    _$("#img02").onmouseover = function(){
       startMove(this,{width:283,height:421})
    }
    _$("#img02").onmouseout = function(){
       startMove(this,{width:273,height:421})
    }
    _$("#img03").onmouseover = function(){
       startMove(this,{width:293,height:210})
    }
    _$("#img03").onmouseout = function(){
       startMove(this,{width:283,height:208})
    }
    _$("#img01").onmouseover = function(){
       startMove(this,{width:293,height:210})
    }
    _$("#img01").onmouseout = function(){
       startMove(this,{width:283,height:208})
    }

    var arr_img4_2 = JSON.parse(data).data_img4_2;
    var ul_right = document.getElementById("remix_right");
    for(var i = 0 ; i < arr_img4_2.length -1; i++){
      var aLi4 = document.createElement("li")
      var aP1 = document.createElement("p");
      aP1.innerHTML = arr_img4_2[i].title;
      aLi4.appendChild(aP1);
      ul_right.appendChild(aLi4)
      if(i == 0){
        aP1.setAttribute("class","demin")
      }
      if(i == 1){
        aP1.setAttribute("class","demin_title")
      }
  }  
     var aLi4 = document.createElement("li")
     var btn1 = document.createElement("button")
     btn1.innerHTML = arr_img4_2[2].title; 
     aLi4.appendChild(btn1); 
     ul_right.appendChild(aLi4) 
  //remix_right
    btn1.onmouseover = function(){
      btn1.style.background = "#fff";
      btn1.style.color = "#000";
    }
     btn1.onmouseout = function(){
      btn1.style.background = "#000";
      btn1.style.color = "#fff";
    }
 
    var arr_ul = JSON.parse(data).data_img5;
    var hot = document.getElementById("hot1");
    var hot_ul = hot.getElementsByTagName("ul")
    for(var i = 0 ; i < arr_ul.length; i++){
      var hot_li = document.createElement("li")
      var hot_li2 = document.createElement("li")
      var hot_a = document.createElement("a");
      var hot_img = document.createElement("img")
      hot_img.src = arr_ul[i].title;
      hot_li2.innerHTML = arr_ul[i].price;
      hot_a.appendChild(hot_img);
      hot_li.appendChild(hot_a);
      hot_ul[i].appendChild(hot_li)
      hot_ul[i].appendChild(hot_li2)    
    }
     //hot    
    var hot_img0 = hot.getElementsByTagName("img")
    for(var i = 0;i < hot_ul.length; i++){
      hot_img0[i].onmouseover = function(){
        startMove(this,{opacity : 50})
      }
       hot_img0[i].onmouseout = function(){
        startMove(this,{opacity : 100})
      }
    }

    var arr_img6 = JSON.parse(data).data_img6;
    var image1 = document.getElementById("image1");
    var aUl_img6 = image1.getElementsByTagName("ul")[0]; 
    for(var i = 0 ; i < arr_img6.length - 1; i++){
      var aLi = document.createElement("li");
      var aP = document.createElement("p")
      aP.innerHTML =  arr_img6[0].title; 
      aLi.appendChild(aP);
      aUl_img6.appendChild(aLi) 
      if(i == 0){
        aP.setAttribute("class","title_image1")
      }
      if(i == 1){
        aP.setAttribute("class","image1_title")
      }
    } 
    var aLi6 = document.createElement("li")
    var img_3 = document.createElement("img")
    img_3.src = arr_img6[2].title;
    var aA3 = document.createElement("a")
    aA3.setAttribute("href","");
    aA3.appendChild(img_3);
    aLi6.appendChild(aA3);
    aUl_img6.appendChild(aLi6)
    
  //image1
    var img1_node = image1.getElementsByTagName("img")[0];
    img1_node.onmouseover = function(){
       startMove(this,{width:910,height:519,left:20,top:200})
    }
    img1_node.onmouseout = function(){
       startMove(this,{width:950,height:559,left:0,top:180})
    }
  
     var arr_dl1 = JSON.parse(data).data_img7;
     var imglink = document.getElementById("imglink");
     var imglink_dl = imglink.getElementsByTagName("dl")
     for(var i = 0 ; i < arr_dl1.length ; i++){
    var arr_dt1 = document.createElement("dt")
    var arr_a1 = document.createElement("a");
    arr_a1.setAttribute("href","");
    var arr_dt_img1 = document.createElement("img");
    arr_dt_img1.src = arr_dl1[i]._id;
    arr_a1.appendChild(arr_dt_img1)
    arr_dt1.appendChild(arr_a1)
    imglink_dl[i].appendChild(arr_dt1)
    var arr_dd1_1 = document.createElement("dd");
    arr_dd1_1.innerHTML = arr_dl1[i]._title;
    arr_dd1_1.setAttribute("class","link_title")
    imglink_dl[i].appendChild(arr_dd1_1)
    var arr_dd1_2 = document.createElement("dd");
    arr_dd1_2.innerHTML = arr_dl1[i]._name;
    arr_dd1_2.setAttribute("class","link_name")
    imglink_dl[i].appendChild(arr_dd1_2)
    var arr_dd1_3 = document.createElement("dd");
    arr_dd1_3.innerHTML = arr_dl1[i]._des;
    arr_dd1_3.setAttribute("class","link_des")
    imglink_dl[i].appendChild(arr_dd1_3)   
    var arr_dd1_4 = document.createElement("dd");
    var arr_dl1_btn = document.createElement("button");
    arr_dl1_btn.innerHTML = arr_dl1[i]._btn; 
    arr_dd1_4.appendChild(arr_dl1_btn)   
    arr_dd1_4.setAttribute("class","link_btn")
    imglink_dl[i].appendChild(arr_dd1_4) 
  }
   //imglink
   var link_btn = imglink.getElementsByTagName("button")
   for(var i = 0 ;i < link_btn.length; i++){
   link_btn[i].onmouseover = function(){
      this.style.background = "#000";
      this.style.color = "#fff"; 
    }
   link_btn[i].onmouseout = function(){
      this.style.background = "#fff";
      this.style.color = "#000";
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
          var odiv = document.getElementById("notice")
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




















}





