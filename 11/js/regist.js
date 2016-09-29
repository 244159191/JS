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
          for(var i = 1;i< oA.length -2 ;i++){
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

  //regist
       _$("#phonenum").onfocus = function(){
         this.placeholder = "";
       }
       _$("#phonenum").onblur = function(){
         this.placeholder = "如果您已在门店注册，请填写预留手机号";
         var oValue1 = this.value.replace(/ /g,"")
          this.value = oValue1;
          if(oValue1.length == 0){
            _$("#phonenum_span").innerHTML = "请填写手机号！"
           _$("#phonenum_span").style.color = "red";
           this.style.borderColor = "red";
          }else{
               if(oValue1.length != 11){
                   _$("#phonenum_span").innerHTML = "请输入正确的手机号！"
                   _$("#phonenum_span").style.color = "red";
                   this.style.borderColor = "red";
                }else if(/^[1][3|4|5|7|8]\d{9}$/.test(oValue1)){
                   _$("#phonenum_span").innerHTML = ""
                    this.style.borderColor = "#cbcbcb";
                }else{
                  _$("#phonenum_span").innerHTML = "请输入正确的手机号！"
                   _$("#phonenum_span").style.color = "red";
                   this.style.borderColor = "red";
                }
            }
         } 
        _$("#textcode").onfocus = function(){
         this.placeholder = "";
         }
        _$("#textcode").onblur = function(){
          this.placeholder = "请正确填写您收到的验证码";
           var oValue1 = this.value.replace(/ /g,"")
          this.value = oValue1;
          if(oValue1.length == 0){
            _$("#textcode_span").innerHTML = "请填写验证码！"
           _$("#textcode_span").style.color = "red";
           this.style.borderColor = "red";
          }else{
             _$("#textcode_span").innerHTML = ""
            this.style.borderColor = "#cbcbcb";
          }
        }

        _$("#mailnum").onfocus = function(){
         this.placeholder = "";
       }
       _$("#mailnum").onblur = function(){
         this.placeholder = "如果您已在门店注册，请填写预留邮箱";
         var oValue1 = this.value.replace(/ /g,"")
          this.value = oValue1;
          if(oValue1.length == 0){
            _$("#mailnum_span").innerHTML = "请填写邮箱！"
           _$("#mailnum_span").style.color = "red";
           this.style.borderColor = "red";
          }else{
            if(/^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+[com]+$/.test(oValue1)){
              _$("#mailnum_span").innerHTML = ""
            this.style.borderColor = "#cbcbcb";
            }else{
            _$("#mailnum_span").innerHTML = "请输入正确的邮箱！"
           _$("#mailnum_span").style.color = "red";
           this.style.borderColor = "red";
            }
          } 
       }

       _$("#password").onblur = function(){
         var oValue1 = this.value.replace(/ /g,"")
          this.value = oValue1;
          if(oValue1.length == 0){
            _$("#password_span").innerHTML = "请填写密码！"
           _$("#password_span").style.color = "red";
           this.style.borderColor = "red";
           //(?![0-9]+$) 预测该位置后面不全是数字
          }else if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/.test(oValue1)){
            _$("#password_span").innerHTML = ""
            this.style.borderColor = "#cbcbcb";
          }else{
          _$("#password_span").innerHTML = "格式有误，请输入8~12位字母和数字组合密码！"
           _$("#password_span").style.color = "red";
           this.style.borderColor = "red";
          }
       }
       _$("#password2").onblur = function(){
         var oValue1 = this.value.replace(/ /g,"")
          this.value = oValue1;
          if(oValue1.length == 0){
            _$("#password2_span").innerHTML = "请填写密码！"
           _$("#password2_span").style.color = "red";
           this.style.borderColor = "red";
          }else if(oValue1 == _$("#password").value){
            _$("#password2_span").innerHTML = ""
            this.style.borderColor = "#cbcbcb";
          }else{
          _$("#password2_span").innerHTML = "两次密码输入不一致，请重新输入！"
           _$("#password2_span").style.color = "red";
           this.style.borderColor = "red";
          }
       }
 
      _$("#username").onfocus = function(){
         this.placeholder = "";
       }
       _$("#username").onblur = function(){
         this.placeholder = "请填写您的真实姓名";
         var oValue1 = this.value.replace(/ /g,"")
          this.value = oValue1;
          if(oValue1.length == 0){
            _$("#username_span").innerHTML = "请填写姓名！"
           _$("#username_span").style.color = "red";
           this.style.borderColor = "red";
          }else{
            _$("#username_span").innerHTML = ""
            this.style.borderColor = "#cbcbcb";
          }
     }

     _$("#birth").onfocus = function(){
         this.placeholder = "";
       }
     _$("#birth").onblur = function(){
         this.placeholder = "格式为1900-01-01";
          var oValue1 = this.value.replace(/ /g,"")
          this.value = oValue1;
          if(oValue1.length == 0){
            _$("#birth_span").innerHTML = "请填写生日！"
           _$("#birth_span").style.color = "red";
           this.style.borderColor = "red";
          }else if(/^[0-9]{4,4}-[0-9]{2,2}-[0-9]{2,2}$/.test(oValue1)){
            _$("#birth_span").innerHTML = ""
            this.style.borderColor = "#cbcbcb";
          }else{
             _$("#birth_span").innerHTML = "请按正确格式填写！"
           _$("#birth_span").style.color = "red";
           this.style.borderColor = "red";
          }
      } 

        var i = 60
        var tag =null;
      _$("#checkcode").onclick = function(){
        if(_$("#phonenum").value == ""){
           _$("#phonenum_span").innerHTML = "请填写手机号！"
           _$("#phonenum_span").style.color = "red";
           _$("#phonenum").style.borderColor = "red";
           return;
         }else if(/^[1]\d{10}$/.test(_$("#phonenum").value)){
            clearInterval(tag)
            tag = setInterval(function(){
            _$("#checkcode").style.background = "none"
            _$("#checkcode").style.width = "100px"
            _$("#checkcode").style.color = "#000"
            _$("#checkcode").innerHTML = i + "秒后重新发送";
            i--;
             if(i == 0){ 
                clearInterval(tag)
                _$("#checkcode").innerHTML = "发送验证码";
                _$("#checkcode").style.backgroundColor = "#000"
                _$("#checkcode").style.color = "#fff"
                _$("#checkcode").style.width ="88px"
                i = 60;
             }
            },1000)
        }else{
              _$("#phonenum_span").innerHTML = "请输入正确的手机号！"
              _$("#phonenum_span").style.color = "red";
              _$("#phonenum").style.borderColor = "red";
        }    
      }

      _$("#submit").onclick = function(){
        if(_$("#phonenum").value == ""){
           _$("#phonenum_span").innerHTML = "请填写手机号！"
           _$("#phonenum_span").style.color = "red";
           _$("#phonenum").style.borderColor = "red";
         }else{
            if(_$("#textcode").value == ""){
             _$("#textcode_span").innerHTML = "请填写验证码！"
             _$("#textcode_span").style.color = "red";
             _$("#textcode").style.borderColor = "red";
            }else{
               if(_$("#mailnum").value == ""){
               _$("#mailnum_span").innerHTML = "请填写邮箱！"
               _$("#mailnum_span").style.color = "red";
               _$("#mailnum").style.borderColor = "red";
               }else{
                  if(_$("#password").value == ""){
                   _$("#password_span").innerHTML = "请填写密码！"
                   _$("#password_span").style.color = "red";
                   _$("#password").style.borderColor = "red";
                   }else{
                      if(_$("#password2").value == ""){
                      _$("#password2_span").innerHTML = "请填写密码！"
                      _$("#password2_span").style.color = "red";
                      _$("#password2").style.borderColor = "red";
                     }else{
                         if(_$("#username").value == ""){
                          _$("#username_span").innerHTML = "请填写姓名！"
                          _$("#username_span").style.color = "red";
                          _$("#username").style.borderColor = "red";
                         }else{
                            if(_$("#birth").value == ""){
                            _$("#birth_span").innerHTML = "请填写生日！"
                            _$("#birth_span").style.color = "red";
                            _$("#birth").style.borderColor = "red";
                           }
                         }
                     }
                   }
               }
            }
         }
      }

   }

















