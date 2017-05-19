$(function(){
	//搜索按钮
	const btn=document.querySelector(".search_Btn");
	const zhezhao=document.querySelector(".zhezhao");
    zhao(btn,zhezhao);

    // Tlunbo(".tv_tu",".anzhuang_con_tu","",[],"","",1,"",1000,0,"");
    //Tlunbo(pic,bigbannerBox,lis,colorArr,zuoBtn,youBtn,tuActiveO,liActivebgColor,lunboTime,tuO,lisColor){
    

   function TMlunbo(pic,bigbannerBox,tuActiveO,lunboTime,tuO){
        const tu=$(pic);
        const banner=$(bigbannerBox)[0];
        tu[0].style.opacity=tuActiveO;
        var num=0;
        var next=0;
        var t=setInterval(move,lunboTime);
        banner.onmouseover=function(){
           clearInterval(t);
        }
        banner.onmouseout=function(){
          t=setInterval(move,lunboTime);
        }
        function move(){
            num++;
            if(num>tu.length-1){
                num=0;
            }
        
        for(let i=0;i<tu.length;i++){
        tu[i].style.opacity=tuO;
        
        }
        animate(tu[next],{opacity:0},500);
        animate(tu[num],{opacity:1},500,function(){
            next=num;
        });
}

   }

   TMlunbo(".tv_tu",".anzhuang_con_tu",1,2000,0);





    //导航选项卡
    const nav=document.querySelectorAll(".nav_li");
	const lis=document.querySelectorAll(".nav_list");
    xianxiangka1(nav,lis);
    // console.log(btn1);
    // console.log(lis);

    //电视应用选项卡
    
   
    function aa(Tupian,Title,Da,Lis){
    	const da=$(Da);
        // console.log(da);
        const lis=$(Lis);
         const title=$(Title);
        const tupian=$(Tupian);
        for(let i=0;i<da.length;i++){
            // console.log(da.length);
        	da[i].onmouseover=function(){
        		tupian[i].style.opacity=0;
                title[i].style.opacity=0; 
                lis[i].style.opacity=1;
        	}
            da[i].onmouseout=function(){
                lis[i].style.opacity=0;
                tupian[i].style.opacity=1;
                title[i].style.opacity=1; 
            }
             
        }
    }
    aa(".youku",".youku_word",".yingyong_shang_kuang",".yingyong_list");



    function ee(List,Kuang){
        const list=$(List);
        list[0].style.display="block";
        const kuang=$(Kuang);
        for(let i=0;i<kuang.length;i++){
            kuang[i].onmouseover=function(){
              
                for(let j=0;j<list.length;j++){
                list[j].style.display="none";
                }
                list[i].style.display="block";
            }
         
        }
  
    }
     ee(".zhineng_list",".zhineng_you_kuang_con");
})