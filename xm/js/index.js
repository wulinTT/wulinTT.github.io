$(function(){

	//banner轮播图
    Tlunbo(".banner_tu img",".bannerBox",".gundong_yuan",[],".banner-Btn-zuo",".banner-Btn-you",1,"#fff",2000,0,"#999");
    

    //导航选项卡
    const anniu=document.querySelectorAll(".nav-info");
    const list=document.querySelectorAll(".nav_list");
    xianxiangka4(anniu,list);




    //导航选项卡
    const btn=document.querySelectorAll(".bannerNav ul li");
    const xiala=document.querySelectorAll(".bannerNavLis");
    // // const xialaC=$(".bannerNavLis_content");
    // // const changdu=value.querySelectorAll(".bannerNavLis_content").length;
    xianxiangka10(btn,xiala);

//     function xianxiangka1(btn,con){
//      for(let i=0;i<btn.length;i++){
//         btn[i].onmouseover=function(){
//         	// console.log(con[i]);
//         	let len=con[i].children.length;
//         	// console.log(len);
//            // for(let j=0;j<con.length;j++){
//            	 con[i].style.display="block";
//            	 con[i].style.width=len*240;
//              // con[i].style.width=aa*bb+"px";
//            // }
//          }
//            btn[i].onmouseout=function(){
//            // for(let j=0;j<con.length;j++){
//              con[i].style.display="none";
//            // }
//         }   
// 	}
// }

  






   //小米明星单品轮播
   jdlb(".tuijian_box",".tujian_tu",".danping-Btn_zuo",".danping-Btn_you");





   //搭配隐藏列表
    const kuang1=$(".drawimg1");
    const content1=$(".yincang1");
    // console.log(content1);
   xianxiangka7(kuang1,content1);

  //配件隐藏列表
    const kuang2=$(".drawimg2");
    const content2=$(".yincang2");
    xianxiangka7(kuang2,content2);

  //周边隐藏列表
    const kuang3=$(".drawimg3");
    const content3=$(".yincang3");
    xianxiangka7(kuang3,content3);



   //为你推荐
   jdlb(".tuijianbox1",".tuijian_tu1",".btn-zuo1",".btn-you1");



   // 内容左右轮播效果
   LRlunbo(".neirong_con1",".neirong_word1",".neirong_Btn_zuo1",".neirong_Btn_you1",".yuanquan1","#fff","#ccc","#ff6700","#fff")
   LRlunbo(".neirong_con2",".neirong_word2",".neirong_Btn_zuo2",".neirong_Btn_you2",".yuanquan2","#fff","#ccc","#ff6700","#fff")
   LRlunbo(".neirong_con3",".neirong_word3",".neirong_Btn_zuo3",".neirong_Btn_you3",".yuanquan3","#fff","#ccc","#ff6700","#fff")
   LRlunbo(".neirong_con4",".neirong_word4",".neirong_Btn_zuo4",".neirong_Btn_you4",".yuanquan4","#fff","#ccc","#ff6700","#fff")



  //搭配选项卡
  const aa=$(".dapei_Nav_wenzi");
  const bb=$(".xiala_list1");
  const x1=$(".xiahuaxian1");
  const cl1=$(".zi1_c");
  xianxiangka3(aa,bb,x1,cl1)

  //配件选项卡
  const cc=$(".peijian_Nav_wenzi");
  const dd=$(".xiala_list2");
  const x2=$(".xiahuaxian2");
  const cl2=$(".zi2_c");
  xianxiangka3(cc,dd,x2,cl2)


 //周边选项卡
  const ee=$(".zhoubian_Nav_wenzi");
  const ff=$(".xiala_list3");
  const x3=$(".xiahuaxian3");
  const cl3=$(".zi3_c");
  xianxiangka3(ee,ff,x3,cl3)




//购物车选项卡
function xianxiangka5(btn,con,icon3,shop3){
    const gouwuche=$(btn)[0];
   // console.log(gouwuche);
    const lis=$(con)[0];
    const icon1=$(icon3)[0];
    const shop1=$(shop3)[0];
        lis.style.height=0;
        gouwuche.onmouseover=function(){ 
            gouwuche.style.background="#fff";
            lis.style.display="block";
            icon1.style.color="#ff6700";
            shop1.style.color="#ff6700";
            animate(lis,{height:90},100);
        }
        gouwuche.onmouseout=function(){
            gouwuche.style.background="#424242";
            // lis.style.display="none";
            icon1.style.color="#fff";
            shop1.style.color="#fff";
            animate(lis,{height:0},100,function(){

            });
        }   
    
  }
xianxiangka5(".shopping",".gouwu_list",".iconfont",".shopping-wenzi");






//底部24小时客服
const kefu=$(".kefu-kuang")[0];
const kefuW=$(".kefu-kuang-wenzi")[0];
const kefuI=$(".kefu_icon")[0];
xuan(kefu,kefuW,kefuI);














})