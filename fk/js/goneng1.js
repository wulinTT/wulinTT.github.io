
 function $(select,obj=document){
        if(typeof select=="function"){
            window.onload=function(){
                select();
            }
        }else if(typeof select=="string"){
            return obj.querySelectorAll(select);
        }
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
function Tlunbo(pic,bigbannerBox,lis,colorArr,tuActiveO,liActivebgColor,lunboTime,tuO,lisColor){


    const tu=$(pic);
    const banner=$(bigbannerBox)[0];
    const li=$(lis);
    const color=colorArr;

    tu[0].style.opacity=tuActiveO;
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
            tu[i].style.opacity=tuO;
            li[i].style.background=lisColor;
            banner.style.background=color[i];
          }
          tu[j].style.opacity=tuActiveO;
          // animate(tu[j],{opacity:1},500);
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
        tu[i].style.opacity=tuO;
        li[i].style.background=lisColor;
        banner.style.background=color[i];
      }
        tu[num].style.opacity=tuActiveO;
        // animate(tu[num],{opacity:1},500);
        li[num].style.background=liActivebgColor;
        banner.style.background=color[num];
    }

}




//左右轮播

function LRlunbo(tupian,imgBox,zuoBtn,youBtn,lunbodian,lunboActivebgColor,lunboTime,lunboColor){
   const tu=$(tupian);
    const img=$(imgBox)[0];
    const imgW=parseInt(window.getComputedStyle(img,null).width);
    const leftBtn=$(zuoBtn)[0];
    const rightBtn=$(youBtn)[0];
    const lunbo=$(lunbodian);
    // console.log(lunbo);
    // console.log()



    //初始化开始
    for(let i=0;i<tu.length;i++){
      tu[i].style.left=imgW+"px";
    }
    tu[0].style.left=0;
    var t=setInterval(move,lunboTime);
    var now=0;
    var next=0;
    var flag=true;
    lunbo[0].style.background=lunboActivebgColor;
    //初始化结束



    function move(type="r"){
      flag=false;
      if(type=="r"){
          next++;
          if(next>tu.length-1){
          next=0;
          }
        
          tu[next].style.left=imgW+"px";
         
          animate(tu[now],{left:-imgW},500);
         }
         else if(type=="l"){
          next--;
           if(next<0){
          next=tu.length-1;
           }
        
            tu[next].style.left=-imgW+"px";
            animate(tu[now],{left:imgW},500);
        }
        //轮播
       
        animate(tu[next],{left:0},500,
          function(){
          flag=true;
          lunbo[next].style.background=lunboActivebgColor;
          lunbo[now].style.background=lunboColor;

          console.log(now+"---"+next);  
          now=next;   
        });
      

    }


      for(let j=0;j<lunbo.length;j++){
         lunbo[j].onmouseover=function(){
          if(flag){
            for(let m=0;m<tu.length;m++){
            tu[m].style.left=imgW+"px";
            lunbo[m].style.background=lunboColor;
           }

            tu[j].style.left=0;
            lunbo[j].style.background=lunboActivebgColor;
            clearInterval(t);
            now=j;
            next=j;
            }
         }

      }

      img.onmouseover=function(){
          clearInterval(t);
      }

  
      img.onmouseout=function(){
          t=setInterval(move,lunboTime);
      }

      leftBtn.onclick=function(){
          if(flag){
            move("r");
          }
      }

      leftBtn.onmouseover=function(){
          clearInterval(t);
      }

      rightBtn.onclick=function(){
        if(flag){
          move("l");
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
 
function xianxiangka1(btn,con,box){

 
     for(let i=0;i<btn.length;i++){
        btn[i].onmouseover=function(){
            var a=parseInt(window.getComputedStyle(box[i],null).height);
            t1=setInterval(function(){
                var speed=5;
                a+=speed;
                box[i].style.height=a+"px"; 
                if(a>=200){
                 
                  a=200;
                }
                  box[i].style.height=a+"px"; 
                   
                
                  clearInterval(t1);
               
                 // con[i].style.display="block";  
            },1000)  
            
          



         }
           


           btn[i].onmouseout=function(){
           for(let j=0;j<con.length;j++){
             con[j].style.display="none";
           }
        } 



  }
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
    



  