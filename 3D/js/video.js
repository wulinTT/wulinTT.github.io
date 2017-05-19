var video=document.querySelector("video");
var startbtn=document.querySelector(".start");
var reload=document.querySelector(".reload");
var progress=document.querySelector(".progress");
var inner=document.querySelector(".inner");
var now=document.querySelector("#now");    //span标签
var all=document.querySelector("#all");
var volumes=document.querySelector(".volume");
var bg=document.querySelector(".bg");
var vol=document.querySelector(".bg .vol");
var mask=document.querySelector(".mask");
var volinner=document.querySelector(".volinner");
var icon=document.querySelector(".volume span");
var fullscreen=document.querySelector(".fullscreen");
var container=document.querySelector(".container");
var l=progress.offsetWidth;

var startflag=true;
startbtn.onclick=function(){
    if(startflag){
        video.play();
        startbtn.innerHTML="&#xe6ca;";
    }else{
        video.pause();
        startbtn.innerHTML="&#xe61f;";
    }
    startflag=!startflag;
}

//重新载入
reload.onclick=function(){
    video.load();
    startbtn.innerHTML="&#xe61f;";
    startflag=true;
}

// currentTime	设置或返回音频/视频中的当前播放位置（以秒计）
// duration	返回当前音频/视频的长度（以秒计）
// canplay	当浏览器可以播放音频/视频时
// timeupdate	当目前的播放位置已更改时


var alltime=0;
var nowtime=0;
video.oncanplay=function(){
    alltime=video.duration;   //获取总时间
    all.innerHTML=time(alltime);   //调用函数，设置总时间的样式
}

//播放时
video.ontimeupdate=function(){
    nowtime=video.currentTime;     //当前播放时间
    now.innerHTML=time(nowtime);  //调用函数，设置播放时间的样式
    var width=nowtime/alltime;     //进度条宽度   当前播放时间/总时间
    //进度条宽度设置为百分比样式
    inner.style.width=width*100+"%";

}

//设置时间样式函数
function time(t){
    var minutes=Math.floor(t/60);   //分钟数
    var seconds=Math.floor(t%60);    //秒钟数
    return minutes+":"+(seconds<10?"0"+seconds:seconds);
}



//进度条
progress.onmousedown=function(e){
    var ox=e.offsetX;
    var bili=ox/l;
    var pos=bili*alltime;
    video.currentTime=pos;

    document.onmousemove=function(e){
        var ox=e.clientX-progress.offsetLeft;    //没有定位属性，就是距离浏览器的距离offsetLeft
        var bili=ox/l;
        var pos=bili*alltime;
        video.currentTime=pos;
    }
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
}


//hover.js
//音量的鼠标移入移出事件
hover(volumes,function(){
    bg.style.display="block";
},function(){
    bg.style.display="none";
    mask.onmousemove=null;
    mask.onmouseup=null;
})

// volume (0-1)	设置或返回音频/视频的音量

//音量位置
function fnvol(e){
    var oy=e.offsetY;
    oy=oy>100?100:oy;   //不能超出100
    var v=1-oy/100;
    video.volume=v;
    if(v==0){       //静音，icon图标切换
        icon.innerHTML="&#xe618;";
    }else{
        icon.innerHTML="&#xe62a;";
    }
    volinner.style.marginTop=oy+"px";
}


//给遮罩添加事件
mask.onmousedown=function(e){
    fnvol(e);
    mask.onmousemove=function(e){
        fnvol(e);
    }
    mask.onmouseup=function(){
        mask.onmousemove=null;
        mask.onmouseup=null;
    }
}

// muted	设置或返回音频/视频是否静音

//设置静音模式
var volflag=true;
icon.onclick=function(){
  if(volflag) {
      icon.innerHTML="&#xe618;";    //当点击音量图标时，icon图标切换为静音图标
      video.muted=true;           //音量为静音
  } else{
      icon.innerHTML="&#xe62a;";
      video.muted=false;
  }
  volflag=!volflag;

}


var fullflag=true;
//requestFullscreen()   全屏
//CancelFullscreen()    退出全屏
fullscreen.onclick=full;
    function full(){
       if(fullflag){
          fullscreen.innerHTML="&#xe659;";
          container.style.width="100%";
          container.style.height="100%";
       }else{
           fullscreen.innerHTML="&#xe616;";
           container.style.width="480px";
           container.style.height="400px";
       }
        fullflag=!fullflag;
        l=progress.offsetWidth;
    }
//双击
container.ondblclick=full;


//按esc键
document.onkeydown=function(e){
    if(e.keyCode==27){
        fullflag=false;
        full();
    }
}





