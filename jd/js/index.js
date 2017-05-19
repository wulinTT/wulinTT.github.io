$(function(){
    Tlunbo(".banner1",".banner1_kuai",".turn_yuan",[],".banner_Btn_zuo",".banner_Btn_you",1,"#4bd39b",2000,0,"#fff");



    //banner选项卡
    const btn=document.querySelectorAll(".banner .neikuan ul li");
    const lis=document.querySelectorAll(".banner_list");
    xianxiangka1(btn,lis);

    //北京选项卡
    const bei1=$(".nav_left")[0];
    const bei2=$(".city_list")[0];
    const zhe1=$(".zhe_line")[0];
    xianxiangka3(bei1,bei2,zhe1);
    const bei3=$(".city_info");
    xianxiangkaC(bei3);
    function xianxiangkaC(city3){
        city3[0].style.backgroundColor="#f33628";
        city3[0].style.color="#fff";
        for(let i=1;i<city3.length;i++){
            city3[i].onmouseover=function(){
                 city3[i].style.backgroundColor="#f8f3f2";
                 city3[i].style.color="#d22e22";
             }
               city3[i].onmouseout=function(){
                 city3[i].style.backgroundColor="#fff";
                 city3[i].style.color="#aba8a8";
               }
        }
      }



    //我的京东
    const btn1=document.querySelectorAll(".nav_right li")[4];
    const lis1=document.querySelector(".nav_right_list");
    const zhe2=document.querySelectorAll(".zhe_line")[1];
    xianxiangka3(btn1,lis1,zhe2);

    //客户服务
    const btn2=document.querySelectorAll(".nav_right li")[10];
    const lis2=document.querySelector(".nav_right_list_ke");
    const zhe3=document.querySelectorAll(".zhe_line")[2];
    xianxiangka3(btn2,lis2,zhe3);

    //网站导航
    const btn3=document.querySelectorAll(".nav_right li")[12];
    const lis3=document.querySelector(".nav_right_list_wang");
    const zhe4=document.querySelectorAll(".zhe_line")[3];
    xianxiangka3(btn3,lis3,zhe4);
    
    //手机京东
    const btn4=document.querySelectorAll(".nav_right li")[14];
    const lis4=document.querySelector(".banner_list_shou");
    const jiao=document.querySelectorAll(".xuanzhuan_jiao")[0];
    xianxiangka9(btn4,lis4,jiao);
    function xianxiangka9(btn,con,jiao){
        btn.onmouseover=function(){
           con.style.display="block";
           jiao.style.display="block";
           btn.style.boxShadow="1px 1px 10px #ccc";
         }
           btn.onmouseout=function(){
             con.style.display="none";
             jiao.style.display="none";
             btn.style.boxShadow="none";
        }   
}

})




//顶部导航缓慢出现
orderTu(".floor",".zuo_lou",".zuolou2",".top_D",".lou1_last","header","",["#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c"]);



//右边固定定位
function yougu(you1,you2){
    let t;
    for(let i=0;i<you1.length;i++){
        // for(let j=0j<you1.length;j++){
        //     you2[j].style.display="block";
        // }
        // console.log(you1.length);
        you1[i].onmouseover=function(){
           t=setTimeout(function(){
                animate(you2[i],{right:32},300);
                 you1[i].style.backgroundColor="#ce3b42";
           },500)
           // you1[i].classList.add("activa");
           
           
        }
         you1[i].onmouseout=function(){
            if(t){
               clearTimeout(t);
            }
            you1[i].style.backgroundColor="#7a6e6e";
            animate(you2[i],{right:-36},300);
        }
    }
}
const you11=$(".you_lou_i");
// console.log(you11);
const you22=$(".you_lou_list");
// console.log(you22);
yougu(you11,you22);




//右边固定定位返回顶部
function dbTZ(btn){
  let sobj=scrollobj();
  btn.onclick=function(){
    animate(sobj,{scrollTop:0},500);
           
  }
}
const DB=$(".you_db")[0];
dbTZ(DB);



//京东直播轮播图
TTlunbo(".zhibo_tu",".pinzhi_content_tuwen_shang",".pinzhi_content_tuwen_you a ul li",[],".shipin_Btn_zuo",".shipin_Btn_you",1,"#f41046",2000,0,"#fff",".shipin_intro1",".chenji_intro",1,0);

function TTlunbo(pic,bigbannerBox,lis,colorArr,zuoBtn,youBtn,tuActiveO,liActivebgColor,lunboTime,tuO,lisColor,Z1,Z2,ziActiveZ,ziZ){


    const tu=$(pic);
    const banner=$(bigbannerBox)[0];
    const li=$(lis);
    const color=colorArr;
    const leftBtn=$(zuoBtn)[0];
    const rightBtn=$(youBtn)[0];
    const zzi1=$(Z1);
    const zzi2=$(Z2);



    
    for(let m=0;m<tu.length;m++){
        zzi1[m].style.opacity=0;
        zzi2[m].style.opacity=0;
        tu[m].style.opacity=0;
    }
    tu[0].style.opacity=tuActiveO;
    zzi1[0].style.opacity=ziActiveZ;
    zzi2[0].style.opacity=ziActiveZ;

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
            zzi1[i].style.opacity=ziZ;
            zzi2[i].style.opacity=ziZ;
            li[i].style.background=lisColor;
            banner.style.background=color[i];
          }
          // tu[j].style.opacity=tuActiveO;
          animate(tu[j],{opacity:1},500);
          zzi1[j].style.opacity=ziActiveZ;
          zzi2[j].style.opacity=ziActiveZ;
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
        zzi1[i].style.opacity=ziZ;
        zzi2[i].style.opacity=ziZ;
        li[i].style.background=lisColor;
        banner.style.background=color[i];
      }
        // tu[num].style.opacity=tuActiveO;
        animate(tu[num],{opacity:1},500,function(){
          flag=true;
        });
        zzi1[num].style.opacity=ziActiveZ;
        zzi2[num].style.opacity=ziActiveZ;
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





//京东秒杀左右轮播
jdlb(".jingdongmiaosha_box_dw",".jingdongmiaosha_con",".miaosha_anniu_zuo",".miaosha_anniu_you");



//排行榜选项卡
 function paihangbang(a,b,c){
    for(let i=0;i<a.length;i++){
        // console.log(a.length);
        for(let j=0;j<a.length;j++){
            b[j].style.zIndex=1;
            c[j].style.display="none";
        }
        b[0].style.zIndex=2;
        c[0].style.display="block";
        a[i].onmouseover=function(){
           b[i].style.zIndex=2;
           c[i].style.display="block";
       }
     
       a[i].onmouseout=function(){
        for(let m=0;m<a.length;m++){
          b[m].style.zIndex=1;
          c[m].style.display="none";
        }
       
         c[i].style.display="block";  
       }

    }
       
    }

const p1=$(".pai_nav1");
const p2=$(".paihangbang_tuwen");
const p3=$(".pai_xiahuaxian");
paihangbang(p1,p2,p3);
// console.log(p3);





//banner右边促销、公告选项好卡
function cuxiao(){
  const cu1=$(".gonggao_title1");
  const cu2=$(".cuxiao_neirong");
  const cu3=$(".cu_red_line")[0];
  const arr=[14,75];
  for(let i=0;i<cu1.length;i++){
    cu1[i].onmouseover=function(){
      for(let j=0;j<cu1.length;j++){
        cu2[j].style.zIndex=1;
      }
      animate(cu3,{left:arr[i]},200)
      cu2[i].style.zIndex=2;
    }
  }
}
cuxiao();






//话费选项卡
const hua1=$(".huafei_box");
const hua2=$(".huafei_list")[0];
const hua3=$(".jiahao");
// const hua4=$(".tilte_a");
// const hua5=$(".huafei_list1");
// const hua6=$(".huafei_xian");
// console.log(hua3);
function huafei(hf1,hf2,hf3){
  for(let i=0;i<hf1.length;i++){
    // console.log(hf1.length);
    // for(let j=0:j<hf1.length;j++{
    hf2.style.opacity=0;
    // }
    hf1[i].onmouseover=function(){
    // hf1.style.display="none";
      animate(hf2,{opacity:1,top:0},200);
      // hf4.style.color="#d03239";
      // hf5.style.zIndex=2;
      // hf6.style.display="block";
    }
  }
  for(let j=0;j<hf3.length;j++){
    hf3[j].onclick=function(){
      animate(hf2,{opacity:0,top:205},200);
      // hf4.style.color="#666";
      // hf5.style.zIndex=1;
      // hf6.style.display="block";
    }
  } 
}
huafei(hua1,hua2,hua3);




//抢8元话费券
const qiang1=$(".hot_tu")[0];
const qiang2=$(".qiangquan")[0];
qiangquan(qiang1,qiang2);
function qiangquan(q1,q2){
  q1.onmouseover=function(){
    q2.style.color="#e42121";
  }
  q2.onmouseover=function(){
    q2.style.color="#e42121";
  }
  q1.onmouseout=function(){
    q2.style.color="#5653f2";
  }
  q2.onmouseout=function(){
    q2.style.color="#5653f2";
  }
}






//话费、机票、酒店选项卡
const hjj1=$(".huafei_title");
const hjj2=$(".huafei_list1");
const hjj3=$(".tilte_a");
const hjj4=$(".huafei_xian");
huajijiu(hjj1,hjj2,hjj3,hjj4);

function huajijiu(hj1,hj2,hj3,hj4){
  for(let i=0;i<hj1.length;i++){
    // console.log(hj1.length);
    for(let j=0;j<hj1.length;j++){
       hj2[i].style.zIndex=1;
    }
    hj1[i].onmouseover=function(){
      hj2[i].style.zIndex=2;
      hj3[i].style.color="#d03239";
      hj4[i].style.display="block";
    }
    hj1[i].onmouseout=function(){
      for(let m=0;m<hj1.length;m++){
        hj2[m].style.zIndex=1;
        hj3[m].style.color="#666";
        hj4[m].style.display="none";
      }
        hj2[i].style.zIndex=2;
        hj3[i].style.color="#d03239";
        hj4[i].style.display="block";
    }
  }
}





//通屏图片遮罩选项卡
const T1=$(".tongping_kuang");
// console.log(T1);
const T2=$(".topgping_zhezhao");
Tzhezhao(T1,T2);
function Tzhezhao(TT1,TT2){

  for(let i=0;i<TT1.length;i++){
    TT1[i].onmouseover=function(){
      animate(TT2[i],{opacity:0.4},300);
    }
    TT1[i].onmouseout=function(){
      animate(TT2[i],{opacity:0},300);
    }
  }
}



//导航二维码下拉图片选项卡
const ma=$(".mama");
const ma_n=$(".ma_con");
function mavN(M1,M2){
  for(let i=0;i<M1.length;i++){
     M1[i].onmouseover=function(){
     M2[i].style.display="block";
  }
    M1[i].onmouseout=function(){
      M2[i].style.display="none";
    }
  }
 
}
mavN(ma,ma_n);












//购物车选项卡
const zhao1=$(".shopping_kuang")[0];
const zhao2=$(".shopping_list")[0];
zhao(zhao1,zhao2);





//下边左右轮播图
LRlunbo1(".aiguang_box1",".aiguang_tu1",".aikuang_turn_zuo1",".aikuang_turn_you1")
LRlunbo1(".aiguang_box2",".aiguang_tu2",".aikuang_turn_zuo2",".aikuang_turn_you2")
LRlunbo1(".aiguang_box3",".aiguang_tu3",".aikuang_turn_zuo3",".aikuang_turn_you3")
LRlunbo1(".aiguang_box4",".aiguang_tu4",".aikuang_turn_zuo4",".aikuang_turn_you4")
LRlunbo1(".aiguang_box5",".aiguang_tu5",".aikuang_turn_zuo5",".aikuang_turn_you5")
LRlunbo1(".aiguang_box6",".aiguang_tu6",".aikuang_turn_zuo6",".aikuang_turn_you6")
LRlunbo1(".aiguang_box7",".aiguang_tu7",".aikuang_turn_zuo7",".aikuang_turn_you7")
LRlunbo1(".aiguang_box8",".aiguang_tu8",".aikuang_turn_zuo8",".aikuang_turn_you8")
LRlunbo1(".aiguang_box9",".aiguang_tu9",".aikuang_turn_zuo9",".aikuang_turn_you9")
LRlunbo1(".aiguang_box10",".aiguang_tu10",".aikuang_turn_zuo10",".aikuang_turn_you10")
LRlunbo1(".aiguang_box11",".aiguang_tu11",".aikuang_turn_zuo11",".aikuang_turn_you16")
LRlunbo1(".aiguang_box12",".aiguang_tu12",".aikuang_turn_zuo12",".aikuang_turn_you12")
LRlunbo1(".aiguang_box13",".aiguang_tu13",".aikuang_turn_zuo13",".aikuang_turn_you13")
LRlunbo1(".aiguang_box14",".aiguang_tu14",".aikuang_turn_zuo14",".aikuang_turn_you14")
LRlunbo1(".aiguang_box15",".aiguang_tu15",".aikuang_turn_zuo15",".aikuang_turn_you15")
function LRlunbo1(tupian,imgBox,zuoBtn,youBtn){
    const tu=$(tupian);
    const img=$(imgBox)[0];
    const imgW=parseInt(window.getComputedStyle(img,null).width);
    // console.log(imgW)
    const leftBtn=$(zuoBtn)[0];
    // console.log(leftBtn)
    const rightBtn=$(youBtn)[0];
    

    //初始化开始
    for(let i=0;i<tu.length;i++){
      tu[i].style.left=imgW+"px";
    }
    tu[0].style.left=0;
    // var t=setInterval(move,lunboTime);
    var now=0;
    var next=0;
    var flag=true;
   
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
          // alert(1)
          next--;
           if(next<0){
          next=tu.length-1;
              // return;
           }
        
            tu[next].style.left=-imgW+"px";
            animate(tu[now],{left:imgW},500);
        }
        //轮播
       
        animate(tu[next],{left:0},500,function(){
          flag=true;
          now=next;
        })

    }

      leftBtn.onclick=function(){
        
         if(flag){

           move("r");
         }
      }
      rightBtn.onclick=function(){
        if(flag){
          move("l");
        }
          
      }
     
    }









//话费选项卡
function huafei1(btn,con,zizi){
     for(let i=0;i<btn.length;i++){
            con[0].style.display="block";
             btn[0].style.background="#e01222";
             zizi[0].style.color="#fff";
        btn[i].onmouseover=function(){
           for(let m=0;m<con.length;m++){
             con[m].style.display="none";
             btn[m].style.background="#fff";
             zizi[m].style.color="#666";
           }
             con[i].style.display="block";
             btn[i].style.background="#e01222";
             zizi[i].style.color="#fff";
         }
  }
}
const hx1=$(".h_chong");
const hx2=$(".xiangxi1");
const hx3=$(".h_chong a");
huafei1(hx1,hx2,hx3);








//机票、酒店左右轮播
function move(btns,imgs){
  var num=0;
  var z=5;
  imgs[0].classList.add("active");
  btns.forEach(function(btn,index){
    // num++;
    // if(num==imgs.length){
    //         num=0;
    // }
    // if(num==0){
    //         num=imgs.length;
    // }
      btn.onmouseover=function(){
          if(index==num){
              return;
          }
          if(index<num){
              imgs[num].classList.add("rightOut");
              imgs[index].classList.add("rightIn");
               imgs[index].style.zIndex=z++;
               // num=index;
               // num++;
          }else if(index>num){
              imgs[num].classList.add("leftOut");  //当前张
              imgs[index].classList.add("leftIn");   //点击张
               imgs[index].style.zIndex=z++;
               // num=index;
               // num--;
          }
          

      }
  })
}
var btns1=document.querySelectorAll(".piaopaio");
var imgs1=document.querySelectorAll(".xiangxi2");
move(btns1,imgs1);
var btns2=document.querySelectorAll(".jiudian");
var imgs2=document.querySelectorAll(".xiangxi3");
move(btns2,imgs2);
var btns3=document.querySelectorAll(".youxi1");
var imgs3=document.querySelectorAll(".xiangxi4");
move(btns3,imgs3);