
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
function Zlunbo(pic,bigbannerBox,lis,colorArr,zuoBtn,youBtn,liActivebgColor,lunboTime,lisColor,tuActiveZ,tuZ){
    const tu=$(pic);
    const banner=$(bigbannerBox)[0];
    const li=$(lis);
    const color=colorArr;
    const leftBtn=$(zuoBtn)[0];
    const rightBtn=$(youBtn)[0];
    
    tu[0].style.zIndex=tuActiveZ;
    li[0].style.background=liActivebgColor;
    banner.style.background=color[0];
    var num=0;
    var flag=true;
    var t=setInterval(move,lunboTime);

    
    banner.onmouseover=function(){
      clearInterval(t);
      leftBtn.style.background="#666666";
      rightBtn.style.background="#666666";
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

      // num++;
      // if(num>2){
      //   num=0;
      // }
      for(let i=0;i<tu.length;i++){
        tu[i].style.zIndex=tuZ;
        li[i].style.background=lisColor;
        banner.style.background=color[i];
      }
      tu[num].style.zIndex=2;
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
          animate(tu[j],{opacity:1},200);
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
        animate(tu[num],{opacity:1},200,function(){
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

function xianxiangka4(btn,con){
     for(let i=0;i<btn.length;i++){
        btn[i].onmouseover=function(){
           for(let j=0;j<con.length;j++){
              con[j].style.height=0;

           }
           	 con[i].style.display="block";
             animate(con[i],{height:240},300,function(){
                con[i].style.height="240px";
             });
             // con[i].style.width=aa*bb+"px";
           // }
         }
           btn[i].onmouseout=function(){
           // for(let j=0;j<con.length;j++){
             animate(con[i],{height:0},300);
             
           // }
        }   
	}
}



//选项卡
function xianxiangka3(btn,con,Xhx,cl){
     for(let i=0;i<btn.length;i++){
        btn[i].onmouseover=function(){
           
             con[i].style.display="block";
             cl[i].style.color="#ff6700";
             Xhx[i].style.display="block";
             Xhx[i].style.background="#ff6700";
             // con[i].style.width=aa*bb+"px";
           // }
         }
           btn[i].onmouseout=function(){
           for(let j=0;j<con.length;j++){
             con[j].style.display="none";
             cl[j].style.color="#333";
             // console.log(cl[j].style.color);
             Xhx[i].style.display="none";
             Xhx[j].style.background="#fff";
           }
           con[i].style.display="block";
           cl[i].style.color="#ff6700";
           Xhx[i].style.display="block";
           Xhx[i].style.background="#ff6700"
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
    










    function xuan(a,b,c){
      
       a.onmouseover=function(){
           // a.style.opacity=0;
           // a.style.borderColor="#fff";
           b.style.color="#fff";
           c.style.color="#fff";
           a.style.background="#ff6700";
       }
     
       a.onmouseout=function(){
           // a.style.background="#fff";
           // a.style.borderColor="#ff6700";
           b.style.color="#ff6700";
           c.style.color="#ff6700";
           a.style.background="#fff";
       }
    }




function jdlb(Imgbox,inner,zuo_btn,you_btn){


 let n=5;
      const imgbox=document.querySelector(Imgbox);
      const imgW=parseInt(window.getComputedStyle(document.querySelector(inner),null).width);
      const left_btn=document.querySelector(zuo_btn);
      const right_btn=document.querySelector(you_btn);
      // console.log(imgW);
      let flag=true;
      let t=setInterval(move,5000);
       

function move(type="R"){
  flag=false;
  //盒子往左移，图片往右移
  if(type=="R"){
    for(let i=0;i<n;i++){      //初始化
      let firstChild=imgbox.firstElementChild;
      let lastChild=imgbox.lastElementChild;
      imgbox.insertBefore(lastChild,firstChild);  //最后一张图片在盒子外面，
      // imgbox.style.left=-imgW*n+56+"px";    //盒子网左移，就把最后一张图包扩了 ，现在盒子整体就在win的左边了
    }
      imgbox.style.left=-imgW*n+56+"px";
      animate(imgbox,{left:0},500,function(){

        left_btn.style.pointerEvents="none";
        right_btn.style.pointerEvents="auto";
         
        flag=true;
      })   //盒子网右移，插入到第一张前面的最后一张图就会移到出现在win中了
     }


     // 图片网左移
    else if(type=="L"){
      animate(imgbox,{left:-imgW*n},500,function(){   //盒子先左移

        for(let i=0;i<n;i++){
        let firstChild=imgbox.firstElementChild;      
        imgbox.appendChild(firstChild);      //第一张都移到了左边，就不在窗口中显示了，第一张插入到最后，盒子最前边就空了，所以盒子再回到原来的位置
        }
        imgbox.style.left=0;

        right_btn.style.pointerEvents="none";
        left_btn.style.pointerEvents="auto";
         
        flag=true;
          // imgbox.appendChild(firstChild);
      })
    }
 }


     imgbox.onmouseover=function(){
        clearInterval(t);
       }
     imgbox.onmouseout=function(){
      t=setInterval(move,5000);
       }


       left_btn.onmouseover=function(){
        clearInterval(t);
       }

        left_btn.onclick=function(){
          if(flag){
             move("R");
          }
         
       }
       right_btn.onmouseover=function(){
         clearInterval(t);
       }
        right_btn.onclick=function(){
          if(flag){
             move("L");
          }
         
       }









}


















//左右轮播
function LRlunbo(tupian,imgBox,zuoBtn,youBtn,lunbodian,lunboActivebgColor,lunboColor,lunboActivebgBorder,lunboBorder){
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
    // var t=setInterval(move,lunboTime);
    var now=0;
    var next=0;
    var flag=true;
    lunbo[0].style.background=lunboActivebgColor;
    lunbo[0].style.borderColor=lunboActivebgBorder;
    //初始化结束



    function move(type){
      flag=false;
      if(type=="r"){
          next++;
          if(next>tu.length-1){
          next=0;
              // return;
          }
        
          tu[next].style.left=imgW+"px";
         
          animate(tu[now],{left:-imgW},500);
         }
         else if(type=="l"){
          next--;
           if(next<0){
          next=tu.length-1;
              // return;
           }
        
            tu[next].style.left=-imgW+"px";
            animate(tu[now],{left:imgW},500);
        }
        //轮播
       
        animate(tu[next],{left:0},500,
          function(){
          flag=true;
          lunbo[next].style.background=lunboActivebgColor;
          lunbo[next].style.borderColor=lunboActivebgBorder;
          lunbo[now].style.background=lunboColor;
          lunbo[now].style.borderColor=lunboBorder;

          // console.log(now+"---"+next);  
          now=next;   
        });
      

    }


      for(let j=0;j<lunbo.length;j++){
         lunbo[j].onmouseover=function(){
          if(flag){
            for(let m=0;m<tu.length;m++){
            tu[m].style.left=imgW+"px";
            lunbo[m].style.background=lunboColor;
            lunbo[m].style.borderColor=lunboBorder;
           }

            tu[j].style.left=0;
            lunbo[j].style.background=lunboActivebgColor;
            lunbo[j].style.borderColor=lunboActivebgBorder;
            clearInterval(t);
            now=j;
            next=j;
            }
         }

      }

      // img.onmouseover=function(){
      //     clearInterval(t);
      // }

  
      // img.onmouseout=function(){
      //     t=setInterval(move,lunboTime);
      // }
    for(let j=0;j<tu.length;j++){
      leftBtn.onclick=function(){
          if(flag){
            if(next>tu.length-1){
              next=j-1;
              flag=false;
              
            }else{
              move("r");
            }
            
          }
      }
    }
      

      // leftBtn.onmouseover=function(){
      //     clearInterval(t);
      // }

      rightBtn.onclick=function(){
        if(flag){
          move("l");
        }
          
      }
      // rightBtn.onmouseover=function(){
      //     clearInterval(t);
      // }
      window.onblur=function(){
       clearInterval(t);
    window.onfocus=function(){
      t=setInterval(move,1000);
    }
  }
}
















//橘色的选项卡
// function xianxiangka7(btn,con){
//   // console.log(con);
//      for(let i=0;i<btn.length;i++){
//         btn[i].onmouseover=function(){
//            for(let j=0;j<con.length;j++){
//               con[j].style.bottom="-90px";
//               con[j].style.opacity=0;
//            }
//              // con[i].style.display="block";
//              con[i].style.opacity=1;
//            // }
//            animate(con[i],{bottom:0},100);
//          }
//            btn[i].onmouseout=function(){
//            // for(let j=0;j<con.length;j++){
//              // con[i].style.display="none";
//            // }
//            con[i].style.bottom=0;
//            con[i].style.opacity=0;
//         }   
//   }
// }




function xianxiangka7(btn,con){
  // console.log(con);
  for(let i=0;i<btn.length;i++){
    hover (btn[i],
      function(){
         for(let j=0;j<con.length;j++){
            con[j].style.bottom="-90px";
            con[j].style.opacity=0;
         }
           // con[i].style.display="block";
           con[i].style.opacity=1;
         // }
         animate(con[i],{bottom:0},100);
       },
       function(){
         // for(let j=0;j<con.length;j++){
           // con[i].style.display="none";
         // }
         con[i].style.bottom=0;
         con[i].style.opacity=0;
      }   
    );       
  }
}




















function xianxiangka10(btn,con){
      
      for(let i=0;i<btn.length;i++){
        let len=con[i].children.length;
        btn[i].onmouseover=function(){
           // for(let j=0;j<con.length;j++){
              con[i].style.display="block";
           // }
           con[i].style.width=len*248+"px";
         }
           btn[i].onmouseout=function(){
           for(let j=0;j<con.length;j++){
             con[j].style.display="none";
              con[j] .style.width=0;
           }
          
        }   
 }
}