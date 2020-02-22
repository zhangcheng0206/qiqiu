;(function(){
	var game = {
		totalscore : 0, //总分数 
		frameIndex : 0,     //记录当前的游戏已经进行了多少帧
		balloonNumber:10,   //气球的数量
		cloudNumber:3,      //云朵的数量
		ballFrequently:6,   //50:2s; 25:1s 产生一个气球 ;这个值越大，产生气球越慢
		
		actor:[], //演员不止一个，所以用一个数组来表示
		updateScore:function(yourscore){
			this.totalscore += yourscore;
			score.update(this.totalscore);
			addScore.update(yourscore);
		},
		start:function(){
			var currentballoonNumber = 0; //当前的气球的数量
			var currentcloudNumber   = 0; //当前的云朵的数量
			var that = this;
			
			//做一些初始化的工作
			background.set();
			score.set();
			gun.set();
			addScore.set();

			document.body.addEventListener("mousemove",function(e){
				gun.update(e.clientX,e.clientY )
			});
			
			document.body.addEventListener("click",function(e){
				var v1 = new Audio("img/gun.mp3");
				v1.play();
				var mouseX = e.clientX;
				var mouseY = e.clientY;
				var yoursore = 0;
				for(var i =0 ;i < that.actor.length ; i++){
					//actor 中 有气球也有云朵，
					//我们只关心气球。
					var t = that.actor[i];
					if( t.__proto__.constructor === Balloon ) //是气球
					{
						var centerX = t.x + 96/2;
						var centerY = t.y + 122/2;
						var d = Math.pow( mouseX-centerX,2) + Math.pow(mouseY - centerY,2);
						if(d < Math.pow(96/2,2)){
							//气球被点中
							//alert("气球被点中");
							t.blow();
							yoursore += t.mark
						}
					}
				}
				
				game.updateScore(yoursore);//获取当前的分数
			})
			
			setInterval(function(){
				that.frameIndex++;
			
				if(that.frameIndex % that.ballFrequently == 0 && currentballoonNumber< that.balloonNumber){
					that.actor.push ( new Balloon() );
					currentballoonNumber++;
				}
				//that.ballFrequently*5让云朵出来的频率低一点
				if(that.frameIndex % (that.ballFrequently*5) == 0 && currentcloudNumber< that.cloudNumber){
					that.actor.push ( new Cloud() );
					currentcloudNumber++;
				}
				//更新到dom上.
				document.querySelector(".frameIndex").innerHTML ="游戏进行了：" + that.frameIndex+"帧";
				//不断让演员动起来，调用每一个演员的move方法
				for(var i = 0; i<that.actor.length;i++){
					that.actor[i].move();
				}

			},1000/25)
			
		}
	}
	
	window.game = game;
	
})()
