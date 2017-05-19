
 function $(select,obj=document){
        if(typeof select=="function"){
            window.onload=function(){
                select();
            }
        }else if(typeof select=="string"){
            //<af2>
            //\w  字母、数字、下划线
            // alert(/^<\w+>$/.text(select));
            // if(/^<\w+>$/.text(select)){

            // }
            return obj.querySelectorAll(select);
        }
    }


//层级轮播图
//pic 轮播图（字符串的选择器）
//bigbannerBox 通屏的banner盒子  （字符串的选择器）
//lis  轮播点    （字符串的选择器）
//colorArr    通屏banner盒子的所有颜色  （数组["red","blue"]）
function Zlunbo(pic,Z1,Z2,bigbannerBox,lis,zuoBtn,youBtn,colorArr,ziActiveZ,ziZ,tuActiveZ,liActivebgColor,lunboTime,tuZ,lisColor){
    const tu=$(pic);
    const zzi1=$(Z1);
    const zzi2=$(Z2);
    const banner=$(bigbannerBox)[0];
    const li=$(lis);
    const color=colorArr;
    const leftBtn=$(zuoBtn)[0];
    const rightBtn=$(youBtn)[0];
   
    tu[0].style.zIndex=tuActiveZ;
    zzi1[0].style.zIndex=ziActiveZ;
    zzi2[0].style.zIndex=ziActiveZ;
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
            tu[i].style.zIndex=tuZ;
            zzi1[i].style.zIndex=ziZ;
            zzi2[i].style.zIndex=ziZ;
            li[i].style.background=lisColor;
            banner.style.background=color[i];
          }
          tu[j].style.zIndex=tuActiveZ;
          zzi1[j].style.zIndex=ziActiveZ;
          zzi2[j].style.zIndex=ziActiveZ;
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
        zzi1[i].style.zIndex=ziZ;
        zzi2[i].style.zIndex=ziZ;
        li[i].style.background=lisColor;
        banner.style.background=color[i];
      }
      tu[num].style.zIndex=2;
      zzi1[num].style.zIndex=101;
      zzi2[num].style.zIndex=101;
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
    var next=0;
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
        animate(tu[next],{opacity:0},500);
        animate(tu[num],{opacity:1},500,function(){
          now=next
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











//左右轮播
function LRlunbo(tupian,imgBox,zuoBtn,youBtn,lunbodian,lunboActivebgColor,lunboColor,lunboActivebgBorder,lunboBorder){
   const tu=$(tupian);
    const img=$(imgBox)[0];
    const imgW=parseInt(window.getComputedStyle(img,null).width);
    const leftBtn=$(zuoBtn)[0];
    const rightBtn=$(youBtn)[0];
    const lunbo=$(lunbodian);

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
    // for(let j=0;j<tu.length;j++){
    //   leftBtn.onclick=function(){
    //       if(flag){
    //         if(next>tu.length-1){
    //           next=j-1;
    //           flag=false;
              
    //         }else{
    //           move("r");
    //         }
            
    //       }
    //   }
    // }
      

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


















//选项卡
//xianxiangka(btn,con)
//btn 选项卡按钮
//con 选项卡内容

function xianxiangka1(btn,con){
     for(let i=0;i<btn.length;i++){
        btn[i].onmouseover=function(){
           // for(let j=0;j<con.length;j++){
            // console.log(con[i]);
           	 con[i].style.display="block";

           // }
         }
           btn[i].onmouseout=function(){
           for(let j=0;j<con.length;j++){
             con[j].style.display="none";
           }
        }   
	}
}



function xianxiangka3(btn,con,zhe){
     // for(let i=0;i<btn.length;i++){
        btn.onmouseover=function(){
           // for(let j=0;j<con.length;j++){
             con.style.display="block";
             btn.style.background="#fff";
             btn.style.boxShadow="1px 1px 10px #ccc";
             zhe.style.display="block";
           // }
         }
           btn.onmouseout=function(){
           // for(let j=0;j<con.length;j++){
             con.style.display="none";
             btn.style.background="#e3e4e5";
             btn.style.boxShadow="none";
             zhe.style.display="none";
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
    








//滚动条
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












//顶部导航缓慢出现
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


 let n=5;
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

        // left_btn.style.pointerEvents="none";
        // right_btn.style.pointerEvents="auto";
         
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

        // right_btn.style.pointerEvents="none";
        // left_btn.style.pointerEvents="auto";
         
        flag=true;
          // imgbox.appendChild(firstChild);
      })
    }
 }


     imgbox.onmouseover=function(){
        // clearInterval(t);
        // left_btn.style.display="block";
        // right_btn.style.display="block";   

     }
     imgbox.onmouseout=function(){
      // t=setInterval(move,5000);
        // left_btn.style.display="none";
        // right_btn.style.display="none";   
       }


       left_btn.onmouseover=function(){
        // clearInterval(t);
       }

        left_btn.onclick=function(){
          if(flag){
             move("R");
          }
          // left_btn.style.display="none";
          // right_btn.style.display="block";
         
       }
       right_btn.onmouseover=function(){
         // clearInterval(t);
       }
        right_btn.onclick=function(){
          if(flag){
             move("L");
          }
          // right_btn.style.display="none";
          // left_btn.style.display="block";
       }



}





//倒计时
    class daojishi{
      constructor(h,m,s,dt){
          this.h=h;
          this.m=m;
          this.s=s;
          this.dt=dt;
      }
      play(){
        // console.log();
        let map=this.getChaTime();
        this.writes(map);
        // this.fwrites(map);
        this.update();
      }
      getChaTime(){
        let now=new Date();    //先获取当前的时间
        let chatime=this.dt.getTime()-now.getTime();  //转化为毫秒，用传入的距离1970年1月1日毫秒减去当前的距离1970年1月1日的毫秒，就是两个时间的差值
        chatime=chatime/1000+1;    //转换为秒
        let d=parseInt(chatime/60/60/24);   
        let h=parseInt(chatime/60/60%24);    //天数取余就是小时
        let m=parseInt(chatime/60%60);      //小时取余就是分钟数
        let s=parseInt(chatime%60);        //分钟数取余就是秒
        let map = new Map();
        if(h<10){
          map.set("h","0"+h);
        }else{
          map.set("h",h);
        }
        if(m<10){
          map.set("m","0"+m);
        }else{
          map.set("m",m);
        }
        if(s<10){
          map.set("s","0"+s);
        }else{
          map.set("s",s);
        }
        
        return map;
      }
      
      writes(map){     //将获取到的时间写入页面中
          this.h.innerHTML=map.get("h");
          this.m.innerHTML=map.get("m");
          this.s.innerHTML=map.get("s");
        }
      update(){
        let that=this;
        setInterval(function(){
          let map=that.getChaTime();
          that.writes(map);
        },1000)
      }

    }


 
  const dhh=$(".shijian_hour")[0];
  const dm=$(".shijian_m")[0];
  const ds=$(".shijian_s")[0];
  let nowtime=new Date();
  let lingdian=new Date(2017,5,20,24,00,00);
  // console.log(lingdian);
  let lingdiandjs=new daojishi(dhh,dm,ds,lingdian);
  lingdiandjs.play();