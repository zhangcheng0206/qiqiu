;(function(){
	var addScore = {
				
				ele:document.createElement("div"),
				set:function(){
					var that  = this;
					this.ele.className = "addscore";
					this.ele.addEventListener("animationend",function(){
						that.ele.className = "addscore";
					})
					//把它加到body上面
					document.body.appendChild(this.ele);
				},
				update:function(yourscore){
					this.ele.innerHTML = "+"+yourscore;
					this.ele.className = "addscore move1"
				}
			}
	
	window.addScore = addScore;
	
})()
