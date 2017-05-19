
 function $(select,obj=document){
        if(typeof select=="function"){
            // window.onload=function(){
            //     select();
            // }
            window.addEventListener("load",select,false);   //可以写多个$函数了
        }else if(typeof select=="string"){
            //<af2>
            //\w  字母、数字、下划线
            // alert(/^<\w+>$/.text(select));
            if(/^<\w+>$/.test(select)){
              return document.createElement(select.slice(1,-1));
            }else{
              return obj.querySelectorAll(select);
            }
            
        }
    }



 //obj  事件源
 //shijian  事件
 //chengxu  执行程序
 //只出现一次
 function one(obj,shijian,chengxu){
      //添加第一个shijian类型事件  执行chengxu
          obj.addEventListener(shijian,chengxu,false);
          //添加第二个shijian类型事件  执行clear
          obj.addEventListener(shijian,clear,false);
          function clear(){
              alert(2);
              //对象.addEventListener("事件",处理程序,布尔值);
              //清除shijian类型中chengxu处理程序
              obj.removeEventListener(shijian,chengxu,false);
               //清除shijian类型中clear处理程序
              obj.removeEventListener(shijian,clear,false);     //清除自己本身，只弹出一次2
          }
     }
    
     // one(obj,"click",chengxu);  









//兼容  获取scrollTop前的对象

function scrollobj(){
      let body=document.body;
      let html=document.documentElement;
      body.scrollTop=100;
      html.scrollTop=100;
      let obj;
      if(body.scrollTop==0){
        obj=html;   //谷歌
      }else{
        obj=body;   
      }
      body.scrollTop=0;
      html.scrollTop=0;
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
    
//鼠标滚轮事件
    mousewheel(obj,shang,xia);
    function mousewheel(obj,shang,xia){
          obj.addEventListener("mousewheel",scrollFn,false);
          obj.addEventListener("DOMMouseScroll",scrollFn,false);
            function scrollFn(e){
              // console.log(e);
              e.preventDefault();
              if(e.wheelDelta){
                //谷歌
          alert(1);
          // console.log(e.wheelDelta);
          if(e.wheelDelta>0){
            //上
            // alert(1);
            shang();
          }else{
            //下
            // alert(2);
            xia();
          }
              }else{
                // console.log(e.detail);
                //火狐
                if(e.detail>0){
            //上
            xia();
          }else{
            //下
            shang();
          }
                alert(2);
              }
            }


      }


























//拖拽
function drag(he){
  const box=$(he)[0];
  box.style.position="absolute";
  box.addEventListener("mousedown",down,false);
  let x;
  let y;;
  let chax;
  let chay
  let boxx;
  let boxy;
  function down(e){
        x=e.clientX;
    y=e.clientY;
    boxx=box.offsetLeft;
      boxy=box.offsetTop;
    window.addEventListener("mousemove",move,false);
        window.addEventListener("mouseup",up,false);
  }
  function move(e){
    
    let mx=e.clientX;
        let my=e.clientY;
        chax=mx-x;
        chay=my-y;
        let lefts=boxx+chax;
        let tops=boxy+chay;
        if(lefts<=0){
           lefts=0;
        }
        if(tops<=0){
           tops=0;
        }
        box.style.left=lefts+"px";
        box.style.top=tops+"px";

  }
   function up(){
          window.removeEventListener("mousemove",move,false);
        }
}