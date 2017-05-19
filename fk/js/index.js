
$(function(){

	//导航选项卡
  const wenzi=document.querySelectorAll(".daohang-wenzi");
  const list=document.querySelectorAll(".list");
  const lis_c=$(".list_content");

  xianxiangka1(wenzi,list);

  
  // xiala(".daohang-wenzi",".list");
//   function xianxiangka1(btn,con){

//      for(let i=0;i<btn.length;i++){
       
//         btn[i].onmouseover=function(){
//             let len=con[i].children.length;
//             // console.log(con[i].children.length);
//             // let lis_cH=parseInt(window.getComputedStyle(lis_c,null).height);
//             // console.log(lis_cH);
//             for(let j=0;j<con.length;j++){
//               con[j].style.height=0;
//             }
//             con[i].style.display="block";
//           animate(con[i],{height:len*30},200);
//         }
         
     
//           btn[i].onmouseout=function(){
//             animate(con[i],{height:0},200,function(){
//               con[i].style.display="none";
//             });
           
            
//           }   
//   }
// }




  

   //banner轮播图
   Tlunbo(".banner a img",".banner",".gundong_yuan",[],".jiantou-zuo",".jiantou-you",1,"red",2000,0,"#fff");
   // Tlunbo(pic,bigbannerBox,lis,colorArr,tuActiveO,liActivebgColor,lunboTime,tuO,lisColor)
   


   //微信选项卡  
   
  xianxiangka7(".weixin_kuang",".erweima");
  function xianxiangka7(tu,ma){
      const btn=$(tu)[0];
      const con=$(ma)[0];
        btn.onmouseover=function(){
          con.style.display="block";
        } 
        btn.onmouseout=function(){ 
          con.style.display="none";
        }
  }



   //购物车选项卡
  function xianxiangka5(btn,con,icon3,shop3){
    const gouwuche=$(btn)[0];
   // console.log(gouwuche);
    const lis=$(con)[0];
    const icon1=$(icon3)[0];
    const shop1=$(shop3)[0];
        gouwuche.onmouseover=function(){ 
           	gouwuche.style.background="#fff";
           	lis.style.display="block";
            icon1.style.color="#b71a21";
            shop1.style.color="#b71a21";
        }
        gouwuche.onmouseout=function(){
          	gouwuche.style.background="#b71a21";
          	lis.style.display="none";
            icon1.style.color="#fff";
            shop1.style.color="#fff"; 
        }   
	
  }
xianxiangka5(".gouwuche",".shopping_list",".iconfont",".shopping");



//返回顶部
  const dingwei3=$(".dingwei3")[0];
  let sobj=scrollobj();
  dingwei3.onclick=function(){
    animate(sobj,{scrollTop:0},1000);
  }
  



  






})