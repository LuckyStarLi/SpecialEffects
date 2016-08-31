window.onload = function() {
	//创建canvas
	var canvas = document.getElementById('canvas')
		//设置背景色
	canvas.style.backgroundColor = 'black'
		//设置长宽
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	//拿到画布
	var context = canvas.getContext('2d')
		//创建数组保存圆对象
	var particles = []
	var particles1 = []
	var particles2 = []
	var particles4 = []
	var particles5 = []
	var particles6 = []
	setInterval(function() {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
				//清空画布
			context.clearRect(0, 0, canvas.width, canvas.height)
				//创建圆对象
			var particle = new Particle(canvas.width * 0.5, canvas.height * 0.3)
			var particle1 = new Particle(canvas.width * 0.3, canvas.height * 0.3)
			var particle2 = new Particle(canvas.width * 0.7, canvas.height * 0.3)
			var particle4 = new Particle(canvas.width * 0.5, canvas.height * 0.7)
			var particle5 = new Particle(canvas.width * 0.3, canvas.height * 0.7)
			var particle6 = new Particle(canvas.width * 0.7, canvas.height * 0.7)
				//					particle.updata()
				//把对象存入数组中
			particles.push(particle)
			particles1.push(particle1)
			particles2.push(particle2)
			particles4.push(particle4)
			particles5.push(particle5)
			particles6.push(particle6)
			for(var i = 0; i < particles.length; i++) {
				particles[i].updata()
				particles1[i].updata()
				particles2[i].updata()
				particles4[i].updata()
				particles5[i].updata()
				particles6[i].updata()
			}
		}, 10)
		//圆颗粒类 x,y－pos 为圆心坐标

	function Particle(xPos, yPos) {
		//坐标属性
		this.xPos = xPos
		this.yPos = yPos

		//x,y 方向变化量
		this.yVal = -5
		this.xVal = Math.random() * 4 - 2
			//定义重力因素，控制yVal的变化量
		this.gravity = 0.1

		//定义一个方法  画圆
		this.draw = function() {
				context.beginPath()
				context.arc(this.xPos, this.yPos, 5, 0, Math.PI * 2, true)
				context.closePath()
				context.fill()
			}
			//定义一个方法  更新圆
		this.updata = function() {
			//更新圆位置
			this.xPos = this.xPos + this.xVal
			this.yPos = this.yPos + this.yVal
			this.yVal = this.yVal + this.gravity

			//设置随机色 并画圆
			context.fillStyle = randomcolor()
			this.draw()
		}
	}
	//随机颜色
	function randomcolor() {
		//#ffffff 白色   (16777215)10
		return "#" + Math.floor(Math.random() * 16777215).toString(16)
	}
}