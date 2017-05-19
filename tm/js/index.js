$(function(){


	Tlunbo(".banner-picture",".tongping1",".yuan",["red","#e8e8e8","#193b7c","#eac799","#fefff7","#00aeff"],1,"#aaa8a9",2000,0,"rgba(70,85,242,0.7)")


  //banner商品分类选项卡
  const fenlei=$(".xifen1");
  const list=$(".nav_list");
  xianxiangka1(fenlei,list);


  //天猫图
  const word=$(".banner-Nav-word1");
  const img=$(".banner-Nav-word1 img");
  xianxiangka3(word,img);

  //我的淘宝
  const Mt1=$(".mytaobao")[0];
  const Tlist1=$(".mytaobao-list")[0];
  const top1=$(".top_zuo2")[0];
  const tri1=$(".trigle")[0];
  xianxiangka4(Mt1,Tlist1,top1,tri1);

  //收藏夹
  const Mt2=$(".mytaobao")[1];
  const Tlist2=$(".mytaobao-list")[1];
  const top2=$(".top_zuo3")[0];
  const tri2=$(".trigle")[1];
  xianxiangka4(Mt2,Tlist2,top2,tri2);

  //手机版
  const zuo5=$(".top-zuo5");
  const ma=$(".shaoma");
  xianxiangka1(zuo5,ma);


  //商家支持
  const Mt3=$(".mytaobao")[2];
  const list3=document.querySelector(".mytaobao-list1");
  const top3=$(".top_zuo2")[1];
  const tri3=$(".trigle")[2];
  xianxiangka4(Mt3,list3,top3,tri3);

 // //网站导航
  const Mt4=$(".mytaobao")[3];
  const list4=document.querySelector(".wangzhan_list");
  const top4=$(".top_zuo2")[2];
  const tri4=$(".trigle")[3];
  xianxiangka4(Mt4,list4,top4,tri4);

  //品牌右部
  const kuang=$(".pinpai-kuang");
  const cc=$(".pinpai_list");
  xianxiangka13(kuang,cc);




  //直播预告右边小块
  function xianxiangka13(btn,con){
    for(let i=0;i<btn.length;i++){
      btn[i].onmouseover=function(){
        con[i].style.opacity=1;
      }
      btn[i].onmouseout=function(){
        con[i].style.opacity=0;
      }   
    }
  }







  //导航楼层跳转
   orderTu("section",".zuobian",".zuobian_wenzi",".dingwei",".zuobian_a",".tongping","rgba(54,53,53,0.8)",["#f33a8d","#288df5","#28f540","#f63a4c","#19c5ea","#edb445",
   "#da252d"],
    "","");
         



//右边固定定位返回顶部
function dbTZ(btn){
 
  let sobj=scrollobj();
  btn.onclick=function(){
    animate(sobj,{scrollTop:0},500);
           
  }
}
const DB=$(".db_yy")[0];
dbTZ(DB);



//banner图上两张图
  function fix(f1){
    for(let i=0;i<f1.length;i++){
      f1[i].onmouseover=function(){
      animate(f1[i],{opacity:0.9},300);
      // f1.style.opacity=1;
    }
      f1[i].onmouseout=function(){
      animate(f1[i],{opacity:0.7},300);
      // f1.style.opacity=0.6;
      }
    }
    
  }
 const ff1=$(".fix");
 // console.log(ff1);
 fix(ff1);






//遮罩
   const tu=$(".meilirensheng-zuo");
   // console.log(tu);
   const wenzi=$(".meilirensheng-zuo-word a");
   const zhe=$(".meilirensheng_zhezhao");
   zhao1(tu,zhe,wenzi);





 
 // const colorArr=$(colorarr);
function xianxiangka8(Btn,color){
     const anniu=$(Btn);
     // console.log(Btn);
     const colorArr=color;
     for(let i=0;i<anniu.length;i++){
      
        anniu[i].onmouseover=function(){
             anniu[i].style.background=colorArr[i];
         }
           anniu[i].onmouseout=function(){
            anniu[i].style.background="rgba(54,53,53,0.8)";
        }   
  }
}
xianxiangka8(".zuobian_wenzi",["#f33a8d","#288df5","#28f540","#f63a4c","#19c5ea","#edb445",
   "#da252d"]);










//右边导航选项卡
const you=$(".meilirensheng-you");
const line=$(".black_line");
function HL(y,l){
  for(let i=0;i<y.length;i++){
    // console.log(y[i]);
    y[i].onmouseover=function(){
      l[i].style.display="block";
    }
    y[i].onmouseout=function(){
      l[i].style.display="none";
    }
  }
}

HL(you,line);








//猜你喜欢遮罩
const feilei=$(".fenlei-tupian1");
const zhezhao=$(".fenlei_zhezhao");
function zhao2(a,b){
      for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
          b[i].style.opacity=0;
        }
         a[i].onmouseover=function(){
          animate(b[i],{opacity:0.3},200);
         }
       }
        for(let i=0;i<a.length;i++){
            a[i].onmouseout=function(){
              animate(b[i],{opacity:0},200);
            }
        }
    }

zhao2(feilei,zhezhao);







//直播预告上下轮播
const kuangkuang=$(".riqi_kuang");
function SX(rqk){
  const rqkH=parseInt(window.getComputedStyle(rqk[0],null).height);
  const rqkT=parseInt(window.getComputedStyle(rqk[0],null).marginTop);
  let rqktop=-rqkH;
  let speed=rqkH;
  setInterval(function(){
    animate(rqk[0],{marginTop:rqktop},500);
      if(rqktop<=-rqkH*3){
        rqktop=rqkH;
      }
      rqktop=rqktop-speed;
  },4000)
}
SX(kuangkuang);








//直播预告左右轮播

jdlb(".zhongjian_tupian",".tu_tu",".pinpai_zuo_btn",".pinpai_you_btn");



//直播预告选项卡

const xiaotu=$(".tu_tu");
// console.log(xiaotu);
const dtt=$(".datu_tu");
const bianda=$(".anniu1_tu");
// console.log(dtt);
function zhibo(z1,z2,z3){
  for(let i=0;i<z1.length;i++){
    for(let j=0;j<z2.length;j++){
      z2[j].style.zIndex=1;
      // z6[j].style.zIndex=0;
    }
    z2[0].style.zIndex=2;
    z1[i].onmouseover=function(){
      z2[i].style.zIndex=2;
      z3[i].classList.add("active");
    }
    z1[i].onmouseout=function(){
      z2[i].style.zIndex=1;
      z3[i].classList.remove("active");
    }
    
  }
}
zhibo(xiaotu,dtt,bianda);









//换一批
function huan(hyk,hy,hyz){
  hyk.onmouseover=function(){
    hyk.style.background="#dd2727";
    hyz.style.color="#fff";
    hy.style.color="#fff";
    hy.classList.add("active");
  }
   hyk.onmouseout=function(){
    hyk.style.background="#fff";
    hyz.style.color="#ccc";
    hy.style.color="#ccc";
    hy.classList.remove("active");
  }
}
const hyk1=$(".pinpai_huan")[0];
const hy1=$(".huan")[0];
const hyz1=$(".huan_zi")[0];

huan(hyk1,hy1,hyz1);







//右边固定定位选项卡变颜色

function Yfix1(yy1,yy2){
  let t;
  for(let i=0;i<yy1.length;i++){
    for(let j=0;j<yy1[i].length;j++){
      yy2[j].style.opacity=0;
    }
   
       yy1[i].onmouseover=function(){
       t=setTimeout(function(){
        yy1[i].style.background="#ca2a1d";
          animate(yy2[i],{opacity:1,right:15},200);
    
        },500);
      }
   
   
    yy1[i].onmouseout=function(){
      if(t){
        clearTimeout(t);
      }
      yy1[i].style.background="#000";
      animate(yy2[i],{opacity:0,right:40},200);
     
    }
  }
}

const yyyf1=$(".yyy");
const yyyf2=$(".list_kuang");
// const yyyf3=$(".yy_zhuan");

Yfix1(yyyf1,yyyf2);


function tinamao(c1,c2){
  c1.onmouseover=function(){
    c1.style.background="#ca2a1d";
    c2.style.display="block";
  }
  c1.onmouseout=function(){
    c1.style.background="#000";
    c2.style.display="none";
  }
}
const cc1=$(".yyyy")[0];
const cc2=$(".cat_kuang")[0];
tinamao(cc1,cc2);














//左边轮播
const ff=$(".mei");
const gg=$(".chao");
const hh=$(".ju");
const ii=$(".da");
const jj=$(".hu");
const kk=$(".qin");
function SX(rqk){
  const rqkH=parseInt(window.getComputedStyle(rqk[0],null).height);
  const rqkT=parseInt(window.getComputedStyle(rqk[0],null).marginTop);
  let rqktop=-rqkH;
  let speed=rqkH;
  // console.log(rqk);
  setInterval(function(){
    animate(rqk[0],{marginTop:rqktop},500);
      if(rqktop<=-rqkH*2){
        rqktop=rqkH;
      }
      rqktop=rqktop-speed;
  },4000)
}
SX(ff);
SX(gg);
SX(hh);
SX(ii);
SX(jj);
SX(kk);






//美丽人生文字上下轮播
// function MLlunbo(){
//   const zhong=$(".mei")[0];
//   var t=setInterval(function(){
//     let first=zhong.firstElementChild;
//     console.log(first);
//     let last=zhong.lastElementChild;
//     for(let i=0;i<zhong.length;i++){
//       animate(zhong.children[0],{marginTop:-30},function(){
//           zhong.appendChild(first);
//           // zhong.style.marginTop=0+"px"
//       },300);
//     }
//   },1000)
// }
// MLlunbo();
















})