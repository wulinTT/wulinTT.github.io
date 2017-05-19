
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

    for(let m=0;m<tu.length;m++){
      tu[m].style.opacity=0;
      
    }
    tu[0].style.opacity=1;
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
      if(num>5){
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
      window.onblur=function(){
       clearInterval(t);
    window.onfocus=function(){
      t=setInterval(move,1000);
    }
  }
}












function xianxiangka4(btn,con,aa,tri){
     // for(let i=0;i<btn.length;i++){
        btn.onmouseover=function(){
           // for(let j=0;j<con.length;j++){
             con.style.display="block";
             aa.style.background="#fff";
             tri.classList.add("active");
           // }
         }
           btn.onmouseout=function(){
           // for(let j=0;j<con.length;j++){
             tri.classList.remove("active");
             con.style.display="none";
             aa.style.background="#f2f2f2";
           // }
        }   
  // }
}







//选项卡
//xianxiangka(btn,con)
//btn 选项卡按钮
//con 选项卡内容

// function xianxiangka3(btn,con){
//      for(let i=0;i<btn.length;i++){
//         btn[i].onmouseover=function(){
//            for(let j=0;j<con.length;j++){
//               // con[j].style.opacity=0;
//            }
//            	 // con[i].style.display="block";
//              con[i].style.opacity=1;
//            // }
//          }
//            btn[i].onmouseout=function(){
//            // for(let j=0;j<con.length;j++){
//              // con[i].style.display="none";
//            // }
//            con[i].style.opacity=0;
//         }   
// 	}
// }




function xianxiangka3(btn,con){
     for(let i=0;i<btn.length;i++){
        btn[i].onmouseover=function(){
           for(let j=0;j<con.length;j++){
              con[j].style.top="-5px";
              con[j].style.opacity=0;
           }
             // con[i].style.display="block";
             con[i].style.opacity=1;
           // }
           animate(con[i],{top:-13},100);
         }
           btn[i].onmouseout=function(){
           // for(let j=0;j<con.length;j++){
             // con[i].style.display="none";
           // }
           con[i].style.top=0;
           con[i].style.opacity=0;
        }   
  }
}


function xianxiangka1(btn,con){
     for(let i=0;i<btn.length;i++){
        btn[i].onmouseover=function(){
           // for(let j=0;j<con.length;j++){
           //    con[j].style.opacity=0;
           // }
             con[i].style.display="block";
             // con[i].style.opacity=1;
           // }
         }
           btn[i].onmouseout=function(){
           // for(let j=0;j<con.length;j++){
             con[i].style.display="none";
           // }
           // con[i].style.opacity=0;
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
    function zhao1(a,b,c){
      for(let i=0;i<a.length;i++){
        // console.log(a.length);
         a[i].onmouseover=function(){
            b[i].style.opacity=0.7;
            for(let j=0;j<c.length;j++){
              c[j].style.color="#ca2828";
            }
         }
       }

        for(let i=0;i<a.length;i++){
            a[i].onmouseout=function(){
              b[i].style.opacity=0;
              for(let j=0;j<c.length;j++){
                c[j].style.color="#000";
              }
            }
        }
    }
    



  
function scrollobj(){
      let body=document.body;
      let html=document.documentElement;
      body.scrollTop=1;
      html.scrollTop=1;
      let obj;
      if(body.scrollTop==0){
        obj=html;   //谷歌
      }else{
        obj=body;   //火狐
      }
      return obj;
}

















  function navT(loucen,btnbox,Btn,Nav,btncolor,btnactiveColor){

  
  const section=$(loucen);
  const box=$(btnbox)[0];
  const btn=$(Btn);
  const nav=$(Nav)[0];
  let sobj=scrollobj();
  const ch=document.documentElement.clientHeight;
  // console.log(sobj);
  

  for(let i=0;i<btn.length;i++){
    btn[i].onclick=function(){
    animate(sobj,{scrollTop:section[i].offsetTop},500)
           
    }
    
  }

    let flagx=true;   //导航慢慢出现
  let flags=true;   //导航慢慢消失
  window.onscroll=function(){
     for(let i=0;i<section.length;i++){
      if(sobj.scrollTop+ch*0.5>=section[i].offsetTop){
         for(let j=0;j<btn.length;j++){
          btn[j].style.background=btncolor;
           }
                    btn[i].style.background=btnactiveColor;
               }
    }

    //设备1
    if(sobj.scrollTop>=1177){
      if(flagx){     
        flagx=false;        //否则就会一直触发animate
        flags=true;         //保证导航在下的过程中又要上的时候，上的开关打开
        animate(nav,{top:0},500,function(){
          flagx=true;     //function里边的是animate执行完之后要干的
        });
      }
      box.style.display="block";
    }
        //设备2
      else{
          if(flags){
            flags=false;
            flagx=true;
                  animate(nav,{top:-50},500,function(){
                    flags=true;
                  })
         }
         box.style.display="none";  
      }
      
    }
  
    setTimeout(function(){
      animate(nav,{top:-50},1000);
    })


    }











//图片按序加载
function orderTu(loucen,btnbox,Btn,Nav,Head,dingbu,btncolor,btnactiveColorArr){
  const section=$(loucen);
  const box=$(btnbox)[0];
  const btn=$(Btn);
  const nav=$(Nav)[0];
  const head=$(Head)[0];
  const top=$(dingbu)[0];
  const btnactivecolorarr=btnactiveColorArr;
 
  // console.log(like);
  let sobj=scrollobj();
  const ch=document.documentElement.clientHeight;
  // console.log(sobj);
  

  for(let i=0;i<btn.length;i++){
    btn[i].onclick=function(){
    animate(sobj,{scrollTop:section[i].offsetTop},1000)
           
    }
    
  }
   
  head.onclick=function(){
    animate(sobj,{scrollTop:top.offsetTop},1000)
  }
  //  caini.onclick=function(){
  //   animate(sobj,{scrollTop:like.offsetTop},500)
  // }

  

  let flagx=true;   //导航慢慢出现
  let flags=true;   //导航慢慢消失
  window.onscroll=function(){

     for(let i=0;i<section.length;i++){
      if(sobj.scrollTop+ch*0.5>=section[i].offsetTop){   //出现在中间位置
         for(let j=0;j<btn.length;j++){
          btn[j].style.background=btncolor;
           }
                 btn[i].style.background=btnactivecolorarr[i];
               }

               if(sobj.scrollTop+ch>=section[i].offsetTop){
                  let img=$("img",section[i]);
                    // console.log(img);
                  for(let j=0;j<img.length;j++){
                     img[j].src=img[j].getAttribute("imgUrl");  //返回指定属性名的属性值
                    // console.log(img[0].getAttribute("imgUrl"));
                  }     
                }
        

        }

    //设备1
    if(sobj.scrollTop>=600){
      if(flagx){     
        flagx=false;        //否则就会一直触发animate
        flags=true;         //保证导航在下的过程中又要上的时候，上的开关打开
        animate(nav,{top:0},500,function(){
          flagx=true;     //function里边的是animate执行完之后要干的
        });
      }
      box.style.display="block";
    }
        //设备2
      else{
          if(flags){
            flags=false;
            flagx=true;
                  animate(nav,{top:-50},500,function(){
                    flags=true;
                  })
         }
         box.style.display="none";  
      }
      
    }
  
    setTimeout(function(){
      animate(nav,{top:-50},1000);
    })
}













//左右节点轮播
function jdlb(Imgbox,inner,zuo_btn,you_btn){


 let n=3;
      const imgbox=document.querySelector(Imgbox);
      const imgW=parseInt(window.getComputedStyle(document.querySelector(inner),null).width);
      const left_btn=document.querySelector(zuo_btn);
      const right_btn=document.querySelector(you_btn);
      // console.log(imgW);
      let flag=true;
      // let t=setInterval(move,5000);
       

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
        // clearInterval(t);
       }
     imgbox.onmouseout=function(){
      // t=setInterval(move,5000);
       }


       left_btn.onmouseover=function(){
        // clearInterval(t);
       }

        left_btn.onclick=function(){
          if(flag){
             move("R");
          }
          left_btn.style.display="none";
          right_btn.style.display="block";
         
       }
       right_btn.onmouseover=function(){
         // clearInterval(t);
       }
        right_btn.onclick=function(){
          if(flag){
             move("L");
          }
          right_btn.style.display="none";
          left_btn.style.display="block";
       }









}










 