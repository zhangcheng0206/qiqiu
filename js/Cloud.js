;(function(){
	function Cloud(){
		//ele
		this.ele = document.createElement("div");
		this.ele.className="cloud";
		this.birth();
		document.body.appendChild(this.ele);
	}
	Cloud.prototype={
		constructor:Cloud,
		move:function(){
			if(this.x < - this.w){
				console.info("birth.....");
				this.birth();
			}
			else{
				this.x = this.x - this.speed;
				this.ele.style.left = this.x +"px";
			}
		},
		birth:function(){
			this.speed = unit.r(2,5)/5;  //向左移动的速度
			this.x = unit.r(document.body.offsetWidth,document.body.offsetWidth +400)
			this.y = unit.r(10,100);
			this.ele.style.left = this.x +  "px";
			this.ele.style.top  = this.y +  "px";
			this.w = unit.r(80,180);
			this.ele.style.width  = this.w   +"px";
			this.ele.style.height = this.w/2 +"px"
		}
	}
	
	window.Cloud = Cloud;
			

})()
