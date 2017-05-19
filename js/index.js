$(function(){
var canvas=document.querySelectorAll("canvas");
var cobj1=canvas[0].getContext("2d");
var cobj2=canvas[1].getContext("2d");
var cobj3=canvas[2].getContext("2d");
var cobj4=canvas[3].getContext("2d");

$(".circle1").click(function(){
    $(this).hide(500);
    function circle(){
        cobj1.translate(150,100);
        cobj1.strokeStyle="#ffa2fc";
        cobj1.lineWidth=10;
        function art(deg){
            return deg*Math.PI/180;
        }
        var angle=0;
        var maxangle=90*0.01*360;
        var f;
        function progress(){
            angle++;
            cobj1.clearRect(-150,-100,300,200);
            cobj1.beginPath();
            cobj1.arc(0,0,50,-art(90),art(angle-90));
            cobj1.stroke();
            cobj1.fillText(Math.floor(angle/360*100)+"%",0,0);
            if(angle>maxangle){
                cancelAnimationFrame(f);
            }else{
                f=requestAnimationFrame(progress);
            }
        }
        progress();
        cobj1.textAlign="center";
        cobj1.textBaseline="middle";
        cobj1.font="40px 宋体";
        progress();
    }
    circle();
})
$(".circle2").click(function(){
    $(this).hide(500);
    cobj2.translate(150,100);
    function circle(){
        cobj2.strokeStyle="#cdff6f";
        cobj2.lineWidth=10;
        function art(deg){
            return deg*Math.PI/180;
        }
        var angle=0;
        var maxangle=90*0.01*360;
        var f;
        function progress(){
            angle++;
            cobj2.clearRect(-150,-100,300,200);
            cobj2.beginPath();
            cobj2.arc(0,0,50,-art(90),art(angle-90));
            cobj2.stroke();
            cobj2.fillText(Math.floor(angle/360*100)+"%",0,0);
            if(angle>maxangle){
                cancelAnimationFrame(f);
            }else{
                f=requestAnimationFrame(progress);
            }
        }
        progress();
        cobj2.textAlign="center";
        cobj2.textBaseline="middle";
        cobj2.font="40px 宋体";
        progress();
    }
    circle();
})
$(".circle3").click(function(){
    $(this).hide(500);
    cobj3.translate(150,100);
    function circle(){
        cobj3.strokeStyle="#ff832e";
        cobj3.lineWidth=10;
        function art(deg){
            return deg*Math.PI/180;
        }
        var angle=0;
        var maxangle=80*0.01*360;
        var f;
        function progress(){
            angle++;
            cobj3.clearRect(-150,-100,300,200);
            cobj3.beginPath();
            cobj3.arc(0,0,50,-art(90),art(angle-90));
            cobj3.stroke();
            cobj3.fillText(Math.floor(angle/360*100)+"%",0,0);
            if(angle>maxangle){
                cancelAnimationFrame(f);
            }else{
                f=requestAnimationFrame(progress);
            }
        }
        progress();
        cobj3.textAlign="center";
        cobj3.textBaseline="middle";
        cobj3.font="40px 宋体";
        progress();
    }
    circle();
})
$(".circle4").click(function(){
    $(this).hide(500);
    cobj4.translate(150,100);
    function circle(){
        cobj4.strokeStyle="#ff8477";
        cobj4.lineWidth=10;
        function art(deg){
            return deg*Math.PI/180;
        }
        var angle=0;
        var maxangle=10*0.01*360;
        var f;
        function progress(){
            angle++;
            cobj4.clearRect(-150,-100,300,200);
            cobj4.beginPath();
            cobj4.arc(0,0,50,-art(90),art(angle-90));
            cobj4.stroke();
            cobj4.fillText(Math.floor(angle/360*100)+"%",0,0);
            if(angle>maxangle){
                cancelAnimationFrame(f);
            }else{
                f=requestAnimationFrame(progress);
            }
        }
        progress();
        cobj4.textAlign="center";
        cobj4.textBaseline="middle";
        cobj4.font="40px 宋体";
        progress();
    }
    circle();
})

$(".section .nav").animate({left:140,opacity:1},2000);
$(".section .tu").animate({right:360,opacity:1},2000);
$(".welcome").animate({opacity:1},2000,"linear");

$(".neirong").click(function(){
    var index=$(".neirong").index(this);
        $(".zhe").eq(index).slideDown(500).parent().siblings().children(".zhe").slideUp(500);
})
    var t=0;

    // $(".circle").each(function(index,ele){
    //     t++;
    //     $(ele).animate({top:-15},t*1000,"easeInOutBounce");
    // })

    var textarea=$(".word textarea")[0];
    var btn=$(".word input[type=button]")[0];
    var con=$(".con_wenzi ul")[0];
    textarea.onkeydown=btn.onclick=function(e){
        if(e.type=="click"||(e.keyCode==13&&e.ctrlKey)){
            let reg=/你是傻瓜/g;
            //获取textarea的内容
            let text=textarea.value;
            while(textarea.value.match(reg)){
                let index=textarea.value.search(reg);
                let str1=textarea.value.slice(0,index);
                let str2=textarea.value.slice(index,index+4);
                str2=str2.replace(str2,"****");
                textarea.value=str1+str2;
                text=textarea.value;
            }

            textarea.value="";
            // console.log(text);
            if(text.trim()==""){
                textarea.value="";
                return;
            }

            var list=$("<li>");
            // list.innerHTML=text;
            list.html("text").appendTo(con);
        }

    }














})