$(function(){
	for(var i=0;i<10;i++)
	{
		for(var j=0;j<10;j++)
		{
			var lei=Math.random()>0.9;

			$("<div></div>")
			.attr("id",i+"-"+j)
			.addClass(function(){
				return "block "+(lei?"lei":"")
			})
			// {x:i,y:j,islei:lei}可通过e.data获取传递的参数
			.on("mousedown",{x:i,y:j,islei:lei},clickHandler)
			.appendTo(".scene");
		}
	}
	// click没有which属性 左键1 右键3 事件处理函数以handler结尾
	function clickHandler(e){
		if (e.which==1)
		{
			// call改变this指向
			zuojiHandler.call(this,e);
		}else if(e.which==3)
		{
			youjiHandler.call(this,e);
		}
	}
	function concat(x,y){
		return x+"-"+y;
	}
	function zuojiHandler(e){
		if ($(this).is(".flag"))
		{
			return;
		}
		if (e.data.islei)
		{
			alert("lose");
			$(".lei").addClass("show");
	

		}else{
			var pos=e.data;
			var num=0;
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			// if ($("#"+concat(pos.x-1,pos.y-1)).is(".lei"))
			// {
			// 	num++;
			// }
			for (var i=pos.x-1;i<=pos.x+1;i++)
			{
				for (var j=pos.y-1;j<=pos.y+1;j++) 
				{
					if($("#"+i+"-"+j).is(".lei")) 
					{
						console.log($("#"+i+"-"+j).length);
						num++;
					}
				}
			}
			$(this).text(num).addClass("num");
		}
	}
	function youjiHandler(e){
		if ($(this).is(".num"))
		{
			return;
		}
		$(this).toggleClass("flag");
		if ($(".flag").length==$(".lei").length) 
			{
				if ($(".flag").length==$(".lei.flag").length)
				{
					alert("success");
				}else{
					alert("wrong");
				}
			}
	}
	// contextmenu鼠标右击事件
	// 阻止右击默认事件
	$(document).on("contextmenu",false)
})