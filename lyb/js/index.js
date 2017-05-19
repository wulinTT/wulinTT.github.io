$(function(){
	const textarea=$(".lybBox textarea")[0];
	const btn=$(".lybBox input[type=button]")[0];
	const con=$(".con ul")[0];
	const ys=$(".tishi span")[0];
	const ks=$(".tishi b")[0];
	const zg=40;
	// console.log(con);
	textarea.onkeydown=btn.onclick=function(e){   //onkeydown可以识别shift键和ctrl键
		if(e.type=="click"||(e.keyCode==13&&e.ctrlKey)){    //同时按下ctrl键和回车键提交
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
			
			textarea.value="";    //一提交就去掉
		// console.log(text);
			if(text.trim()==""){	 //识别空格
				textarea.value="";    //还原为原来的样子
				return;      //终止执行，下边就不执行
			}

			let list=$("<li>");     //创建li标签
			list.innerHTML=text;     //标签中的内容等于输入的内容
			con.appendChild(list);    //将输入的内容保存下来
		}
		
	}

	// textarea.onkeypress=textarea.onkeyup=function(){   //onkeyup时肯定有字了。onkeydown时第一次按下去时没有
	// 	textarea.oninput=function(){      //内容输入就会改变
     //    let text=textarea.value;
     //    let len=text.length;
     //    // let text
     //    // console.log(len);
     //    if(len>40){
     //    	text=text.substr(0,40);
     //    	textarea.value=text;
     //    	len=40;
     //    }
     //    ys.innerHTML=len;
     //    ks.innerHTML=zg-len;
     //
    //
	// }

   // textarea.onkeypress=function(){
   // 	   alert(1);   //能填上东西的
   // }
   //  textarea.onkeydown=function(){
   // 	   alert(2);     //按下shift键只弹出2，textarea中为显示内容
   // }







})