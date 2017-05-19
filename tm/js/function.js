
	//导航、楼层跳转
	function navT(loucen,btnbox,btn,nav,btncolor,btnactiveColor){

	
	const section=$(loucen);
	const box=$(btnbox)[0];
	const btn=$(btn);
	const nav=$(nav)[0];
	let sobj=scrollobj();
	const ch=document.documentElement.clientHeight;
	// console.log(sobj);
	

	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
		animate(sobj,{scrollTop:section[i].offsetTop},500)
           
		}
		
	}

    let flagx=true;   //导航慢慢出现
	let flags=true;   //导航慢慢消失
	window.onscroll=function(){
		 for(let i=0;i<section.length;i++){
			if(sobj.scrollTop+ch*0.5>=section[i].offsetTop){
				 for(let j=0;j<btn.length;j++){
				 	btn[j].style.background=btncolor;
			     }
                    btn[i].style.background=btnactiveColor;
               }
		}

		//设备1
		if(sobj.scrollTop>=600){
			if(flagx){     
				flagx=false;        //否则就会一直触发animate
				flags=true;         //保证导航在下的过程中又要上的时候，上的开关打开
				animate(nav,{top:0},500,function(){
					flagx=true;     //function里边的是animate执行完之后要干的
				});
			}
			box.style.display="block";
		}
		    //设备2
			else{
			    if(flags){
			   	  flags=false;
			   	  flagx=true;
                  animate(nav,{top:-50},500,function(){
                  	flags=true;
                  })
			   }
			   box.style.display="none";	
			}
			
		}
	
    setTimeout(function(){
    	animate(nav,{top:-50},1000);
    })


    }











//图片按序加载
function orderTu(loucen,btnbox,btn,nav,btncolor,btnactiveColorArr,url){
    const section=$(loucen);
	const box=$(btnbox)[0];
	const btn=$(btn);
	const nav=$(nav)[0];
	const btncolor=$(btncolor)[0];
	const btnactivecolorarr=btncoloractiveArr;
	let sobj=scrollobj();
	const ch=document.documentElement.clientHeight;
	// console.log(sobj);
	

	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
		animate(sobj,{scrollTop:section[i].offsetTop},500)
           
		}
		
	}

    let flagx=true;   //导航慢慢出现
	let flags=true;   //导航慢慢消失
	window.onscroll=function(){

		 for(let i=0;i<section.length;i++){
			if(sobj.scrollTop+ch*0.5>=section[i].offsetTop){   //出现在中间位置
				 for(let j=0;j<btn.length;j++){
				 	btn[j].style.background=btncolor;
			     }
                    btn[i].style.background=btnactivecolorarr[i];
               }

               if(sobj.scrollTop+ch>=section[i].offsetTop){
        	        let img=$("img",section[i]);
        	          // console.log(img);
        	        for(let j=0;j<img.length;j++){
        	      	   img[j].src=img[j].getAttribute(url);  //返回指定属性名的属性值
        	          // console.log(img[0].getAttribute("imgUrl"));
        	        }     
		        }
        

        }

		//设备1
		if(sobj.scrollTop>=600){
			if(flagx){     
				flagx=false;        //否则就会一直触发animate
				flags=true;         //保证导航在下的过程中又要上的时候，上的开关打开
				animate(nav,{top:0},500,function(){
					flagx=true;     //function里边的是animate执行完之后要干的
				});
			}
			box.style.display="block";
		}
		    //设备2
			else{
			    if(flags){
			   	  flags=false;
			   	  flagx=true;
                  animate(nav,{top:-50},500,function(){
                  	flags=true;
                  })
			   }
			   box.style.display="none";	
			}
			
		}
	
    setTimeout(function(){
    	animate(nav,{top:-50},1000);
    })
}














//拖拽
function tuozhuai(he){
    const box=$(he)[0];
	box.style.position="absolute";
	box.addEventListener("mousedown",down,false);
	let x;
	let y;;
	let chax;
	let chay
	let boxx;
	let boxy;
	function down(e){
        x=e.clientX;
		y=e.clientY;
		boxx=box.offsetLeft;
	    boxy=box.offsetTop;
		window.addEventListener("mousemove",move,false);
        window.addEventListener("mouseup",up,false);
	}
	function move(e){
		
		let mx=e.clientX;
        let my=e.clientY;
        chax=mx-x;
        chay=my-y;
        let lefts=boxx+chax;
        let tops=boxy+chay;
        if(lefts<=0){
           lefts=0;
        }
        if(tops<=0){
           tops=0;
        }
        box.style.left=lefts+"px";
        box.style.top=tops+"px";

	}
	 function up(){
        	window.removeEventListener("mousemove",move,false);
        }



}