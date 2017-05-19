var btns=document.querySelectorAll(".btnBox li");
var imgs=document.querySelectorAll(".neikuan7 li");
var next=document.querySelector(".next");
var prev=document.querySelector(".prev");
var box=document.querySelector("header");
var nowbtn=btns[0];   
var nowimg=imgs[0];  
var st;
Array.from(btns).forEach(function(btn,index){ 
	
	btn.onmouseover=function(){     
		clearTimeout(st);
		st=setTimeout(function(){

			nowbtn.classList.remove("active");
			this.classList.add("active");   
			nowbtn=this;              
			nowimg.classList.remove("active");
			imgs[index].classList.add("active");    
			nowimg=imgs[index];    
			num=index;
		}.bind(this),200)    
	}
	
	
})
var t=setInterval(move,3000)   
var num=0;
function move(){
	num++;
	if(num==imgs.length){
		num=0;
	}
	if(num==-1){
		num=imgs.length-1;
	}
	nowbtn.classList.remove("active");
	btns[num].classList.add("active");
	nowbtn=btns[num];
	nowimg.classList.remove("active");
	imgs[num].classList.add("active");
	nowimg=imgs[num];
	
}


box.onmouseover=function(){
	clearInterval(t);
}
box.onmouseout=function(){
	t=setInterval(move,3000)
}
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
		num-=2;   
	    move();
	}
	
}
Array.from(imgs).forEach(function(img){
	img.addEventListener("transitionend",function(){   
			flag=true;
	})
})