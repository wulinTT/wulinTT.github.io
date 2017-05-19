
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

// function xianxiangka1(btn,con){
//      for(let i=0;i<btn.length;i++){
//         btn[i].onmouseover=function(){
//            // for(let j=0;j<con.length;j++){
//            	 con[i].style.display="block";
//            // }
//          }
//            btn[i].onmouseout=function(){
//            for(let j=0;j<con.length;j++){
//              con[j].style.display="none";
//            }
//         }   
// 	}
// }

function xianxiangka1(btn,con){

     for(let i=0;i<btn.length;i++){
        
        btn[i].onmouseover=function(){
            let len=con[i].children.length;
            // console.log(con[i].children.length);
            // let lis_cH=parseInt(window.getComputedStyle(lis_c,null).height);
            // console.log(lis_cH);
            for(let j=0;j<con.length;j++){
              con[j].style.height=0;
            }
            con[i].style.display="block";
          animate(con[i],{height:len*30},300);
        }
         
     
          btn[i].onmouseout=function(){
            animate(con[i],{height:0},300,function(){
              con[i].style.display="none";
            });
           
            
          }   
  }
}













//获取obj元素的style(widtj,height等)样式值

//obj   类型 DOM元素
//style 类型 string
    // attr(obj,style);
    function attr(obj,style){
        return window.getComputedStyle(obj,null)[style];
    }








//导航下拉列表

function xiala(Item,Ul){
  const item=$(Item);
  const ul=$(Ul);
  for(let i=0;i<ul.length;i++){
    let h=parseInt(attr(ul[i],"height"));
    ul[i].setAttribute("h",h);
    ul[i].style.height=0;
  }

 //hover 
  for(let i=0;i<item.length;i++){
    hover (item[i],
      function(){
        if(item[i].children[1]){
          let ul=item[i].children[1];
          // ul[i].style.display="block";
          animate(ul,{height:ul.getAttribute("h")},500)
        }
      }
      ,
      function(){
        if(item[i].children[1]){
          let ul=item[i].children[1];
          animate(ul,{height:0},500)
        }

      });   
      
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
