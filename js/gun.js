;(function(){
	var gun = {
		ele:document.createElement("div"),
		set:function () {
			this.ele.className = "gun"; 
			document.body.appendChild(this.ele);
		},
		update:function(mousex,mousey){
			//更新枪的位置，让它实现鼠标跟随的效果
			var left = mousex - 96/2;
			var top =  mousey  - 96/2;
			
			this.ele.style.left = left + "px";
			this.ele.style.top = top + "px";
			
		}
	}
	
	window.gun = gun;
	
})()
