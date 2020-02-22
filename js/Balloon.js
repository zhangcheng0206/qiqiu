;(function(){
	
	var markList = {
		"1" : "0px 0px",
		"2" : "-96px 0px",
		"3" : "-192px 0px",
		"4" : "-288px 0px",
		"5" : "0px -122px",
		"6" : "-96px -122px",
		"7" : "-192px -122px",
		"8" : "-288px -122px"
	}
	
	function Balloon(){
//	元素：ele 。用来承载气球的dom元素
		this.ele = document.createElement("div");
		var that =this;
		this.ele.addEventListener("animationend",function(){
			//alert("动画end...");
			that.birth();
		})
		document.body.appendChild(this.ele);
		this.birth();
	}
	
	Balloon.prototype = {
		constructor:Balloon,
		move:function(){
			this.y = this.y - this.speed;
			
			if(this.y < -122 ){
				//飞出界，要重生
				console.info("飞出界，要重生");
				this.birth();
			}
			else{
				this.ele.style.top = this.y + "px"; //反馈到dom元素上
			}
		},
		blow:function(){
			this.ele.className = "balloon baozha";
			
		},
		birth:function(){	
			this.ele.className = "balloon";
//				1．分值（对应不同的背景图）：mark
			this.mark = unit.r(1,8);
//				2．速度：speed
			this.speed = this.mark;
//				3．坐标：x,y
			this.x = unit.r(0,document.body.offsetWidth - 96 );
			this.y = document.body.offsetHeight + unit.r(122,2*122);
			//this.y = 500;
			
			this.ele.style.left = this.x +"px";
			this.ele.style.top = this.y + "px";
				
			//根据分值设置不同的背景
			this.ele.style.backgroundPosition = markList[this.mark];
		}
	}
	
	
	window.Balloon = Balloon;
	
})();
			