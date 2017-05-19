$(function(){
   const sence=$(".sence")[0];
    const kaishi=$(".kaishi")[0];
    const kaishiT=$(".kaishi_title")[0];
   const zuigaofen=$(".score .zuigaofen span")[0];
   const defen=$(".score .defen span")[0];
   // console.log(defen);
   const pauseobj=$(".pause")[0];
   const controls=$(".controls")[0];
   const over=$(".over")[0];
   const restart=$(".restart")[0];
	// const gezi=$(".gezi");
     //实例化一个对象通过new方法
   // console.log(tcs1.sence);

    kaishiT.onclick=function(){
        let tcs1=new tcs(sence,zuigaofen,defen,pauseobj,over);
        // tcs1.play();
        kaishi.style.display="none";
		controls.style.display="block";
    }
    // restart.onclick=function(){
		//
    //     tcs1=new tcs(sence,zuigaofen,defen,pauseobj,over);
    // }
})


class tcs{     //类
	constructor(sence,zuigaofen,defen,pauseobj,over){    //构造函数

		//属性
        this.sence=sence;    //tcs1的属性=属性名（场景）
        this.zuigaofen=zuigaofen;
        this.defen=defen;
        this.pauseobj=pauseobj;
        this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];   //json格式
        this.shefx="right";    //默认方向
        this.shekeyflag=true;
        this.fenshu=0;
        this.state=true;
        this.startTime;
        this.dtime;
        this.maxfen;
        this.over=over;
        this.play();   //方法最后写，没有前面的属性方法就不能执行
       
	}
 

  
	//方法
    play(){
      let time=new Date();
      // console.log(time);
      this.startTime=time.getTime();
      this.dtime=this.startTime;
      if(Number(localStorage.zuigaofen)){
        this.zuigaofen.innerHTML=localStorage.zuigaofen;
        this.maxfen=localStorage.zuigaofen;
      }else{
        this.maxfen=0;
        this.zuigaofen.innerHTML=this.maxfen;
      }
      this.changedefen();
    	//创建场景
    	this.createSence();

    	//创建蛇
    	this.createShe();

    	//蛇如何移动
    	this.sheMove();
    	// console.log(this.she);
    	//控制蛇移动的方向
    	this.controlshe();

    	//创建实物
    	this.createfood();

      //暂停功能
      this.pause();
    }
    changedefen(){
      this.defen.innerHTML=this.fenshu;
      if(this.maxfen<this.fenshu){
        this.maxfen=this.fenshu;
      }
    }

    createSence(){
    	//行
    	for(let i=0;i<20;i++){
    		//列
    		for(let j=0;j<20;j++){
               let gezi=$("<div>");     //通过js创建div元素
               gezi.id=`${i}-${j}`;
               gezi.classList.add("gezi");    //给格子添加类名
               this.sence.appendChild(gezi);    //给场景追加子元素
    		}
    	}
    }

    createShe(){
  	// console.log(this.she);
        for(let i=0;i<this.she.length;i++){
    	    this.getElement(this.she[i]).classList.add("she");     //给蛇添加一个类名
    	
        }
    }

    sheMove(){
  	    let that=this;      //把this保存下来，this指实例化的对象tcs1
        this.t=setInterval(function(){
          that.dtime+=300;
          if((that.dtime-that.startTime)>1000){
            if(that.superfoodw){
               that.getElement(that.superfoodw).classList.remove("superfood");
            }
           
            let time=new Date();
            this.startTime=time.getTime();
            that.dtime=that.startTime;
            // that.createsuperfood();
          }
        	//如何添加新的蛇头
     	    let newtou;   //全局，里边的都可以访问到
     	    if(that.shefx=="right"){
     		    newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1}
     	    }
            if(that.shefx=="left"){
     		    newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1}
     	    }
     	    if(that.shefx=="top"){
     		    newtou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y}
     	    }
     	    if(that.shefx=="bottom"){
     		    newtou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y}
     	    }

         	if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19){
         		that.gameover();
         		return ;
         	}
         	for(let i=0;i<that.she.length;i++){
         		if(newtou.x==that.she[i].x&&newtou.y==that.she[i].y){
         			that.gameover();
         			return ;
         		}
         	}
            // alert(1)
         	//添加新的蛇头
            that.she.push(newtou);    //在添加新的头之前判断蛇是否与食物位置重合，重合就让食物消失，并且创建新的食物，游戏继续
            	if(newtou.x==that.foodw.x&&newtou.y==that.foodw.y){
            		// alert(1);
            		that.getElement(that.foodw).classList.remove("food");
            		that.createfood();
                that.fenshu++;
                that.changedefen();
            	}else{
            		let oldwei=that.she.shift(that.she[0]);
         			// console.log(oldwei);
         			that.removewei(oldwei);
         			that.createShe();
             
            	}
            	that.shekeyflag=true;    //打开开关，走完之后
     	},300)
    }

  	removewei(oldwei){
  		// getElement(oldwei);
  		// console.log(oldwei);
  		this.getElement(oldwei).classList.remove("she");
  	}

  	controlshe(){
  		let that=this;
  		window.onkeydown=function(e){
  		// console.log(e.keyCode);
  		if(that.shekeyflag){
  			that.shekeyflag=false;
  			if(e.keyCode==37){
  		   		if(that.shefx!=="right"){
  		   			that.shefx="left";
  		   		}
              	
  		   	}
  		   	if(e.keyCode==38){
  		   		if(that.shefx!=="bottom"){
  		   			that.shefx="top";
  		   		}
              	
  		   	}
  		   	if(e.keyCode==39){
  		   		if(that.shefx!=="left"){
              		that.shefx="right";
              	}
  		   	}
  		   	if(e.keyCode==40){
  		   		if(that.shefx!=="top"){
              		that.shefx="bottom";
              	}
              	
  		   	}
  		}
  		   	
  		}
  	}



  	createfood(){
  	 	this.foodw={}   //先创建，后定义属性
  	 	this.foodw.x=Math.floor(Math.random()*20);
  	 	this.foodw.y=Math.floor(Math.random()*20);
  	 	this.getElement(this.foodw).classList.add("food");
  	}
    // createsuperfood(){
    //   this.superfoodw={}   //先创建，后定义属性
    //   this.superfoodw.x=Math.floor(Math.random()*20);
    //   this.superfoodw.y=Math.floor(Math.random()*20);
    //   this.getElement(this.superfoodw).classList.add("superfood");
    // }
    gameover(){
      localStorage.zuigaofen=this.maxfen;
    	clearInterval(this.t);
    	// alert("游戏结束");
		this.over.style.display="block";
    }

    pause(){
      let that=this;
      this.pauseobj.onclick=function(){
        if(that.state){
          that.state=false;
          clearInterval(that.t);
          that.pauseobj.innerHTML="开始";
        }else{
          that.state=true;
          that.sheMove();
          that.pauseobj.innerHTML="暂停";
        }
        
      }
      
    }
  	getElement(weizhi){
  		let id=weizhi.x+"-"+weizhi.y;
  		return document.getElementById(id);
  	}









}