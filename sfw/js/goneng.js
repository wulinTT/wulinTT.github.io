
 function $(select,obj=document){   //obj是范围
        if(typeof select=="function"){
            window.onload=function(){
                select();
            }
        }else if(typeof select=="string"){
           
            return obj.querySelectorAll(select);
        }
    }














//兼容  获取scrollTop前的对象

function scrollTop(){
      let body=document.body;
      let html=document.documentElement;
      body.scrollTop=1;
      html.scrollTop=1;
      let obj;
      if(body.scrollTop==0){
        obj=body;   //谷歌
      }else{
        obj=html;   //火狐
      }
      return obj;
}
    














 

























//层级轮播图
//pic 轮播图（字符串的选择器）
//bigbannerBox 通屏的banner盒子  （字符串的选择器）
//lis  轮播点    （字符串的选择器）
//colorArr    通屏banner盒子的所有颜色  （数组["red","blue"]）
function Zlunbo(pic,bigbannerBox,lis,colorArr,tuActiveZ,liActivebgColor,lunboTime,tuZ,lisColor){
    const tu=$(pic);
    const banner=$(bigbannerBox)[0];
    const li=$(lis);
    const color=colorArr;
    
    tu[0].style.zIndex=tuActiveZ;
    li[0].style.background=liActivebgColor;
    banner.style.background=color[0];
    var num=0;
    var t=setInterval(move,lunboTime);

    
    banner.onmouseover=function(){
      clearInterval(t);

    }
    banner.onmouseout=function(){
      t=setInterval(move,lunboTime);
    }

        for(let j=0;j<li.length;j++){
          li[j].onmouseover=function(){
          for(let i=0;i<tu.length;i++){
            tu[i].style.zIndex=tuZ;
            li[i].style.background=lisColor;
            banner.style.background=color[i];
          }
          tu[j].style.zIndex=tuActiveZ;
          li[j].style.background=liActivebgColor;
          banner.style.background=color[j];
          num=j;
        }
        }
    
    function move(){
      num++;
      if(num>2){
        num=0;
      }
      for(let i=0;i<tu.length;i++){
        tu[i].style.zIndex=tuZ;
        li[i].style.background=lisColor;
        banner.style.background=color[i];
      }
      tu[num].style.zIndex=2;
      li[num].style.background=liActivebgColor;
      banner.style.background=color[num];
    }
}



//透明轮播
function Tlunbo(pic,bigbannerBox,lis,colorArr,zuoBtn,youBtn,tuActiveO,liActivebgColor,lunboTime,tuO,lisColor){


    const tu=$(pic);
    const banner=$(bigbannerBox)[0];
    const li=$(lis);
    const color=colorArr;
    const leftBtn=$(zuoBtn)[0];
    const rightBtn=$(youBtn)[0];
   



    tu[0].style.opacity=tuActiveO;
    li[0].style.background=liActivebgColor;
    banner.style.background=color[0];
    var num=0;
    var t=setInterval(move,lunboTime);
    var flag=true;
    
    banner.onmouseover=function(){
      clearInterval(t);

    }
    banner.onmouseout=function(){
      t=setInterval(move,lunboTime);
    }

        for(let j=0;j<li.length;j++){
          li[j].onmouseover=function(){
          for(let i=0;i<tu.length;i++){
            tu[i].style.opacity=tuO;
            li[i].style.background=lisColor;
            banner.style.background=color[i];
          }
          // tu[j].style.opacity=tuActiveO;
          animate(tu[j],{opacity:1},500);
          li[j].style.background=liActivebgColor;
          banner.style.background=color[j];
          num=j;
        }
      }

    function move(type="r"){
      flag=false;
      if(type=="l"){
         num--;
          if(num<0){
            num=tu.length-1;
          }
      
      }

      else if(type=="r"){

       num++;
      if(num>tu.length-1){
        num=0;
      }
      
    }
    for(let i=0;i<tu.length;i++){
        tu[i].style.opacity=tuO;
        li[i].style.background=lisColor;
        banner.style.background=color[i];
      }
        // tu[num].style.opacity=tuActiveO;
        animate(tu[num],{opacity:1},500,function(){
          flag=true;
        });
        li[num].style.background=liActivebgColor;
        banner.style.background=color[num];

 }

     leftBtn.onclick=function(){
          if(flag){
           move("l");
         }
      }

      leftBtn.onmouseover=function(){
          clearInterval(t);
      }

      rightBtn.onclick=function(){
        if(flag){
         move("r");
       }
          
      }
      rightBtn.onmouseover=function(){
          clearInterval(t);
      }


}


















//选项卡
//xianxiangka(btn,con)
//btn 选项卡按钮
//con 选项卡内容

function xianxiangka1(btn,con){
  for(let i=0;i<btn.length;i++){
    // console.log(btn.length)
    btn[i].onmouseover=function(){
           // for(let j=0;j<con.length;j++){
            console.log(btn[i]);   
   	  con[i].style.display="block";
      btn[i].style.background="#000";
           // }
    }
    btn[i].onmouseout=function(){
      for(let j=0;j<con.length;j++){
        con[i].style.display="none";
        btn[i].style.background="#333";
      }
    }   
	}
}



function xianxiangka3(btn,con){
     // for(let i=0;i<btn.length;i++){
        btn.onmouseover=function(){
           // for(let j=0;j<con.length;j++){
             con.style.display="block";
             btn.style.background="#fff";
           // }
         }
           btn.onmouseout=function(){
           // for(let j=0;j<con.length;j++){
             con.style.display="none";
             btn.style.background="#e3e4e5";
           // }
        }   
  // }
}



//选项卡
function xianxiangka2(btn,con){
     for(var i=0;i<btn.length;i++){
      btn[i].ind=i;
        btn[i].onmouseover=function(){
          console.log(this);     
           for(let j=0;j<con.length;j++){
             con[j].style.display="block";
           }
           con[this.ind].style.display="none";
        }   
  }
}




	 //遮罩 
   //a 外边的盒子
   //b 里边的盒子   
    function zhao(a,b){
       a.onmouseover=function(){
           b.style.display="block";
       }
     
       a.onmouseout=function(){
           b.style.display="none";
       }
    }
    



