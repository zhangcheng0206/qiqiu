;(function(){
	var score = {
				ele:document.createElement("div"),
				set:function(){
					this.ele.className = "score";
					//把它加到body上面
					document.body.appendChild(this.ele);
				},
				update:function(yourscore){
					this.ele.innerHTML = "得分：" + yourscore
				}
			}
	
	window.score = score;
	
})()
