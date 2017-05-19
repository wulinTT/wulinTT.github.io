$(function(){
	// alert(1)
	const btn1=$(".header_con")[1];
	const con1=$(".wechat_box")[0];
	xuanxiangka1(btn1,con1)


	const btn2=$(".header_con")[2];
	const con3=$(".wechat_box")[1];
	xuanxiangka1(btn2,con3)

	//购物车
	const btn6=$(".douwuche")[0];
	const con6=$(".shopping_list")[0];
	xuanxiangka1(btn6,con6)

	

	function xuanxiangka1(btn1,con1){
		btn1.onmouseover=function(){
			con1.style.display="block";
		}
		btn1.onmouseout=function(){
			con1.style.display="none";
		}
	}


	const btn5=$(".header_you_kuang")[2];
	const con5=$(".you_list")[0];
	xuanxiangka2(btn5,con5)
	function xuanxiangka2(btn1,con1){
		btn1.onmouseover=function(){
			// console.log(btn1);
			btn1.style.background="#fff";
			con1.style.display="block";
		}
		btn1.onmouseout=function(){
			btn1.style.background="#eee";
			con1.style.display="none";
		}
	}

  //banner导航下划线
	const btn7=$(".zhong_con");
	const con7=$(".zhong_line");
	xuanxiangka3(btn7,con7)

	function xuanxiangka3(btn1,con1){
		for(let i=0;i<btn1.length;i++){
			btn1[i].onmouseover=function(){
			   con1[i].style.display="block";
		}
		    btn1[i].onmouseout=function(){
			   con1[i].style.display="none";
		}
		}
		
	}

//banner右边选项卡
	const btn8=$(".fenlei_xiangxi");
	const con8=$(".xiangxi_list");
	xuanxiangka3(btn8,con8);

//banner轮播图
Tlunbo(".banner_Area1",".neikuan1",".dian",[],".banner_btn_zuo",".banner_btn_you",1,"#e5004f",3000,0,"#211616")

//楼层最左边左右轮播
LR1lunbo(".floor_kuang1",".floor_box1",".lunbo_btn_zuo1",".lunbo_btn_you1")
LR1lunbo(".floor_kuang2",".floor_box2",".lunbo_btn_zuo2",".lunbo_btn_you2")
LR1lunbo(".floor_kuang3",".floor_box3",".lunbo_btn_zuo3",".lunbo_btn_you3")
LR1lunbo(".floor_kuang4",".floor_box4",".lunbo_btn_zuo4",".lunbo_btn_you4")
LR1lunbo(".floor_kuang5",".floor_box5",".lunbo_btn_zuo5",".lunbo_btn_you5")
LR1lunbo(".floor_kuang6",".floor_box6",".lunbo_btn_zuo6",".lunbo_btn_you6")
LR1lunbo(".floor_kuang7",".floor_box7",".lunbo_btn_zuo7",".lunbo_btn_you7")
LR1lunbo(".floor_kuang8",".floor_box8",".lunbo_btn_zuo8",".lunbo_btn_you8")
LR1lunbo(".floor_kuang9",".floor_box9",".lunbo_btn_zuo9",".lunbo_btn_you9")
LR1lunbo(".floor_kuang1",".floor_box1",".lunbo_btn_zuo1",".lunbo_btn_you1")
function LR1lunbo(tupian,imgBox,zuoBtn,youBtn){
   const tu=$(tupian);
    const img=$(imgBox)[0];
    const imgW=parseInt(window.getComputedStyle(img,null).width);
    const leftBtn=$(zuoBtn)[0];
    const rightBtn=$(youBtn)[0];
  

    //初始化开始
    for(let i=0;i<tu.length;i++){
      tu[i].style.left=imgW+"px";
    }
    tu[0].style.left=0;
    var now=0;
    var next=0;
    var flag=true;
    //初始化结束



    function move(type="r"){
      flag=false;
      if(type=="r"){
          next++;
          if(next>tu.length-1){
          next=0;
          }
        
          tu[next].style.left=imgW+"px";
         
          animate(tu[now],{left:-imgW},700);
         }
         else if(type=="l"){
          next--;
           if(next<0){
          next=tu.length-1;
           }
        
            tu[next].style.left=-imgW+"px";
            animate(tu[now],{left:imgW},700);
        }
          animate(tu[next],{left:0},700,function(){
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











//时尚名品banner图轮播
LRlunbo(".zhong_tu1",".floor1",".btn_zuo1",".btn_you1",".lunbo_diandian","#ed3d94","#222",1000)
//户外运动banner图轮播
LRlunbo(".zhong_tu2",".floor2",".btn_zuo2",".btn_you2",".lis","#ed3d94","#222",1000)





//超值特卖选项卡
const chao1=$(".chaozhi_zuo_nav1");
const chao2=$(".chaozhi_zuo_list");
const chao3=$(".xuanzhuan");
const chao4=$(".chaozhi_zuo_xia");
chaozhi(chao1,chao2,chao3,chao4)
function chaozhi(zhi1,zhi2,zhi3,zhi4){ 
    for(let j=0;j<zhi1.length;j++){
      zhi2[j].style.display="none";
      zhi3[j].style.display="none";
      zhi4[j].style.display="none";
    }
    zhi2[0].style.display="block";
    zhi3[0].style.display="block";
    zhi4[0].style.display="block"; 
	for(let i=0;i<zhi1.length;i++){
		zhi1[i].onmouseover=function(){
      for(let j=0;j<zhi1.length;j++){
      zhi2[j].style.display="none";
      zhi3[j].style.display="none";
      zhi4[j].style.display="none";
    }
			zhi2[i].style.display="block";
			zhi3[i].style.display="block";
			zhi4[i].style.display="block";
		}
		
	}
}



//商场同款选项卡
const s1=$(".neikuan4_xia_you_nav_con");
const s2=$(".neikuan4_xia_you_con");
const s3=$(".hot_list");
tongkuan(s1,s2,s3)
function tongkuan(t1,t2,t3){
  for(let i=0;i<t1.length;i++){
    t1[i].onmouseover=function(){
      for(let j=0;j<t1.length;j++){
        t2[j].style.display="none";
        t3[j].style.display="none";
        t1[j].classList.remove("active");
      }
      t2[i].style.display="block";
      t3[i].style.display="block";
      t1[i].classList.add("active");
    }
  }

}



//遮罩
function zhao(a,b){
  for(let i=0;i<a.length;i++){
    a[i].onmouseover=function(){
      b[i].style.opacity=0.1;
    }
    a[i].onmouseout=function(){
      b[i].style.opacity=0;
    }
  } 
}
const z1=$(".neikuan6_tu1_kuang");
const z2=$(".zhezhao");
zhao(z1,z2);

const zz1=$(".hot_con");
const zz2=$(".zhe");
zhao(zz1,zz2);

const zzz1=$(".neikuan4_xia_zuo");
const zzz2=$(".zhe1");
zhao(zzz1,zzz2);

const ZZ1=$(".floor_xia_zhong_box");
const ZZ2=$(".zhe2");
zhao(ZZ1,ZZ2);


const p1=$(".xiaxia");
const p2=$(".zhaozhao");
zhao(p1,p2);




//楼层跳转
orderTu(".neikuan5",".tiaozhuan",".tiaozhuan_louceng",".tiaozhuan_kuang10","header",".tiaozhuan_conent",".tiaozhuan_dingbu")



















})
