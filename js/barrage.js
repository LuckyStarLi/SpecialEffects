$(function() {
	//语法 $("选择器")方法
	var danmu = $("#danmu") // 拿到弹幕
	var send = $("#send")
	var comm = $("#conmm")
	var top = 0
	var dh = danmu.height()
	var dw = danmu.width()
		//发送信息的方法
	function SendMessage() {
		// 拿到输入框的内容
		var comVal = comm.val()
		if(comVal == "") {
			alert("请先输入内容 ! ")
			return
		} else {
			var p = $("<p>" + comVal + "</p>")
			danmu.append(p)
				//清空输入框的内容
			comm.val("")
				//设置css样式
			p.css({
					"top": top,
					"font-size": Math.floor(Math.random() * 20 + 16),
					"color": "#" + Math.floor(Math.random() * 16777215).toString(16)
				})
				//添加动画
			p.animate({
				"left": -dw
			}, Math.random() * 1000 + 10000, function() {
				p.move()
			})
			top = top + 60
			if(top > dh - 40) {
				top = 0
			}
		}

	}

	//点击send 事件
	send.click(function() {
		SendMessage()
	})
	comm.keypress(function() {
		var keycode = (event.keyCode ? event.keyCode : event.which)
		if(keycode == '13') {
			SendMessage()
		}

	})

})