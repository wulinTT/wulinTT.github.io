function $(select, obj=document) {
    if (typeof select == "function") {
        window.onload = function () {
            select();
        }
    } else if (typeof select == "string") {
        return obj.querySelectorAll(select);
    }
}


//手机营业厅
var lis1 = $(".you1")[0];
var list1 = $(".shouji_list")[0];
var title = $(".shouji_title")[0];
var icon1 = $(".iconfont")[0];
xuanxiangka1(lis1, list1, title, icon1);

//登录
var lis2 = $(".you2")[0];
var list2 = $(".login_list")[0];
var login = $(".login")[0];
var icon2 = $(".iconfont")[1];
xuanxiangka1(lis2, list2, login, icon2);
function xuanxiangka1(btn1, con1, t1, icon) {
    btn1.onmouseover = function () {
        btn1.style.background = "#fff";
        con1.style.display = "block";
        icon.style.color = "#25b2fe";
        t1.style.color = "#25b2fe";
    }
    btn1.onmouseout = function () {
        btn1.style.background = "#f6f6f6";
        con1.style.display = "none";
        icon.style.color = "#ccc";
        t1.style.color = "#888";
    }
}


//全部省份
var taiyuan = $(".taiyuan")[0];
var didian = $(".location")[0];
var body1 = $("body")[0];
xuanxiangka2(taiyuan, didian, body1)

function xuanxiangka2(btn2, con2, b) {
    btn2.onclick = function (e) {
        e.stopPropagation();
        con2.style.display = "block";
    }
    b.onclick = function () {
        con2.style.display = "none";
    }
}


var back = $(".fanhui")[0];
var backL = $(".fanhui_list")[0];
var didian1 = $(".location")[0];
var body2 = $("body")[0];
xuanxiangka3(back, backL, didian1, body2);

function xuanxiangka3(btn3, con3, dd, b) {
    btn3.onclick = function (e) {
        e.stopPropagation();
        con3.style.display = "block";
    }
    b.onclick = function () {
        dd.style.display = "none";
    }
}


//banner导航选项卡
var nav = $(".nav_con");
var navL = $(".nav_list");
xuanxiangka4(nav, navL);

function xuanxiangka4(btn4, con4) {
    Array.from(btn4).forEach(function (btn, index) {
        btn.onmouseover = function () {
            btn.style.background = "#e6e2e4";
            con4[index].style.display = "block";
        }
        btn.onmouseout = function () {
            btn.style.background = "#ccc";
            con4[index].style.display = "none";
        }
    })
}


//公告选项卡
var gao = $(".gonggao_con")[0];
var zuo = $(".btn_left")[0];
var you = $(".btn_right")[0];
var li = $(".gonggao_con li");
gonggao(gao,zuo,you,li);
function gonggao(gao,zuo,you) {
    var t=setInterval(move, 3000);
    function move(temp="l") {
        if(temp=="l"){
            let first = gao.firstElementChild;
            first.style.width = 0;
            gao.appendChild(first);
            first.style.width = 480 + "px";
        }else if(temp="r"){
            let first = gao.firstElementChild;
            let last=gao.lastElementChild;
            last.style.width = 0;
            gao.insertBefore(first,last);
            last.style.width = 480+"px";
        }

    }
    you.onclick=function(){
        move("r");
    }

    zuo.onclick=function(){
        move("l");
    }
    for(let i=0;i<li.length;i++){
      li[i].onmouseover=function(){
        clearInterval(t);
    }
        li[i].onmouseout=function(){
            t=setInterval(move, 3000);
        }  
    }
    zuo.onmouseover=function(){
        clearInterval(t);
    }
        zuo.onmouseout=function(){
            t=setInterval(move, 3000);
        }  
    
    you.onmouseover=function(){
        clearInterval(t);
    }
    you.onmouseout=function(){
        t=setInterval(move, 3000);
    }  
}





//banner下边轮播






rolling(".gundong", ".lunbo", ".lunbo_kuang", ".left", ".right");
function rolling(Banner, Img, A, Left, Right) {
    var banner = $(Banner)[0];
    var img = $(Img)[0];
    var a = $(A)[0];
    var left = $(Left)[0];
    var right = $(Right)[0];
    var width = parseInt(getComputedStyle(a, null).width);
    var t = setInterval(move, 1500)

    function move() {
        animate(img, {left: -width}, 500, function () {
            let last = img.lastElementChild
            let first = img.firstElementChild
            img.appendChild(first)
            img.style.left = "0"
            flag = true
        })
    }

    banner.onmouseover = function () {
        clearInterval(t)
    }
    banner.onmouseout = function () {
        t = setInterval(move, 1500)
    }


    let flag = true;
    left.onclick = function () {
        if (flag) {
            flag = false;
            let last = img.lastElementChild
            let first = img.firstElementChild
            img.style.left = -width + "px"
            img.insertBefore(last, first)
            animate(img, {left: 0}, 500, function () {
                flag = true
            })
        }

    }
    right.onclick = function () {
        if (flag) {
            flag = false;
            move()
        }
    }


}




//banner轮播图
function lunbo(){
var box=document.querySelector(".banner_box");
var btns=document.querySelectorAll(".btnBox li");
var imgs=document.querySelectorAll(".banner_qu li");
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var t=setInterval(move,3000);
var num=0;
var z=5;
function move(){
    imgs[num].classList.add("leftOut");
    btns[num].classList.remove("active");
    num++;
    if(num==imgs.length){
        num=0;
    }
    btns[num].classList.add("active");
    imgs[num].classList.add("leftIn");
    imgs[num].style.zIndex=z++;
}
imgs.forEach(function(img){
    img.addEventListener("animationend",function(){
        img.className="";
        flag=true;
    })
})
box.onmouseover=function(){
    clearInterval(t);
}
box.onmouseout=function(){
    t=setInterval(move,3000);
}


btns.forEach(function(btn,index){
    btn.onclick=function(){
        if(index==num){
            return;
        }
        if(index<num){
            imgs[num].classList.add("rightOut");
            imgs[index].classList.add("rightIn");
            imgs[index].style.zIndex=z++;
        }else if(index>num){
            imgs[num].classList.add("leftOut");  //当前张
            imgs[index].classList.add("leftIn");   //点击张
            imgs[index].style.zIndex=z++;
        }
        btns[num].classList.remove("active");
        btns[index].classList.add("active");
        num=index;

    }

})
var flag=true;
next.onclick=function(){
    if(flag){
        flag=false;
        move();
    }
}
prev.onclick=function(){
    if(flag){
        flag=false;
        imgs[num].classList.add("rightOut");
        btns[num].classList.remove("active");
        num--;
        if(num==-1){
            num=imgs.length-1;
        }
        imgs[num].classList.add("rightIn");
        imgs[num].style.zIndex=z++;
        btns[num].classList.add("active");
    }
}
}
lunbo();

function lb(){
var banner=document.querySelector(".gundong");
var box=document.querySelector(".lunbo");
var prev=document.querySelector(".left");
var next=document.querySelector(".right");
var t=setInterval(move,5000);
var num=4;
let flag=true;
function move() {
    box.style.transition="all 1s";
    num++;
    box.style.marginLeft=-num*295+"px";
}
//    给box过渡结束事件
box.addEventListener("transitionend",function(){
//        当num=12时 让box返回到 初始的位置 num=4 marginLeft变为4*295
    if(num==12){
        box.style.transition="none";
        num=4;
        box.style.marginLeft=-num*295+"px";
    }
    if(num==0){
        box.style.transition="none";
        num=8;
        box.style.marginLeft=-num*295+"px";
    }
    flag=true;
})
banner.onmouseover=function(){
    clearInterval(t);
}
banner.onmouseout=function(){
    t=setInterval(move,1000);
}
next.onclick=function () {
    if(flag){
        flag=false;
        move();
    }
}
prev.onclick=function () {
    if(flag){
        flag=false;
        num-=2;
        move();
    }
}
}
lb();


 


