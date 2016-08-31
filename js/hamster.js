window.onload = function() {
	var gamediv = document.getElementById("gamediv")
		//启动定时器  函数 时间单位毫秒 即每隔1秒调用function一次
	setInterval(function() {
		//随机老鼠
		var x = Math.floor(Math.random() * 100) % 9
			//拿到div中所有的子视图
		var img = gamediv.children[x]
			//设置为老鼠
		img.src = 'img/game/2.png'
			//让一张图片变成草丛 随机草丛
		x = Math.floor(Math.random() * 100) % 9
		img = gamediv.children[x]
		img.src = 'img/game/5.jpg'
	}, 400)
}
var numb = 0 //记录当前分数
function beat(obj) {
	var srcstr = obj.src
	if(srcstr.charAt(srcstr.length - 5) == 2) {
		obj.src = 'img/game/5.jpg'
		numb++
		document.getElementById('source').innerHTML = "当前得分：" + numb
	}
}