//每行显示图片数量
var cols = 3
window.onload = function() {
	layouySubview()
}

//排版页面
function layouySubview() {
	//拿到内容 content
	var content = document.getElementsByClassName('content')[0]
		//拿到所有的box  －－数组
	var boxs = document.getElementsByClassName('box')
		//储存3列的当前高度
	var heightofBoxs = []
	for(var i = 0; i < boxs.length; i++) {
		if(i < cols) {
			//代表为第一行图片
			heightofBoxs[i] =boxs[i].offsetHeight
		} else {
			//取出最小的高度
			var minHeight = Math.min.apply(null, heightofBoxs)
				//最小高度所在的列
			var minHeightIndex = 0
			for(var j = 0; j < heightofBoxs.length; j++) {
				if(minHeight == heightofBoxs[j]) {
					minHeightIndex = j
					break
				}
			}
				//设置boxs［i］的位置
		boxs[i].style.position = 'absolute'
		boxs[i].style.top = minHeight + 'px';
		boxs[i].style.left = boxs[minHeightIndex].offsetLeft+ 'px';
		heightofBoxs[minHeightIndex] = heightofBoxs[minHeightIndex] + boxs[i].offsetHeight
		}
	}
}