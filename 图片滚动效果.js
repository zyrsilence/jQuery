$(function(){
	$.focus=function(id){
		var sWidth=$(id).width();
		var len=$(id).find("ul li").length;
		var index=0;

		var btn="<div class='btnBg'></div><div class='btn'>";
		for(var i=0;i<len;i++){
			var li=i+1;
			btn+="<span>"+li+"</span>";
		}
		btn+="</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(id).append(btn);
		$(id).find("div.btnbg").css("opacity",0.3);
		$(id+"div.btn span").css("opacity",0.3).mouseenter(function(){
			var index=$(id+"div.btn span" ).index(this);
			showPic(index);
		});
		$(id+".next").click(function(){
			index++;
			if(index==len){
				index=0;
			}
			showPic(index);
		});
		$(id+".pre").click(function(){
			index--;
			if(index==-1){
				index=len-1;
			}
			showPic(index);
		});
		$(id).hover(function(){
			clearInterval(picTimer);
		},function(){
			picTimer=setInterval(function(){
				showPic(index);
				index++;
				if(index==len){
					index=0;
				}
			},1000);
		});
		function showPic(index){
			var nowLeft=-index*sWidth;
			$(id+"ul").stop(true,false).animate({"left":nowLeft},300);
			$(id+"ul").stop(true,false).animate({"opacity":0.4},300).eq(index).
			stop(true,false).animate({"opacity":1},300);
		}

	};
});