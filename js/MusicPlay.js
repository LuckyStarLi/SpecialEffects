var audio1, range1, numb = -1;
window.onload = function() {
	audio1 = document.getElementById("audio");
	range1 = document.getElementById("input");
	var startOrPause = document.getElementsByClassName("button")[0];
	var nextSong = document.getElementsByClassName("button")[1];
	var arr = ['data/haoxiangni.mp3', 'data/Cassadee Pope - Good Times.mp3', 'data/Chris Brown - Up To You.mp3',
		'data/关诗敏 - 听见下雨的声音 (Live) (关诗敏胜出).mp3', 'data/庄心妍 - 不想做决定.mp3', 'data/张学友 - 心如刀割.mp3',
		'data/张碧晨 - 不要忘记我爱你 (《神犬小七》电视剧主题曲).mp3', 'data/张靓颖 - 终于等到你 (《咱们结婚吧》电视剧主题曲).mp3',
		'data/鹿晗 - 我们的明天 (《重返20岁》电影主题曲).mp3',
		'data/李代沫 - 简单的事.mp3'
	]
	startOrPause.onclick = function() {
			if(audio1.paused) {
				if(audio1.currentSrc == '') {
					var random = Math.floor(Math.random() * 10) % 2;
					/*当前播放歌曲地址*/
					numb = random;
					audio1.src = arr[numb];
				}
				audio1.play();
				startOrPause.innerHTML = '暂停播放';
			} else {
				audio1.pause();
				startOrPause.innerHTML = '开始播放';
			}

		}
		/*-------下一首--------*/
	nextSong.onclick = function() {
			//numb记录当前播放的歌曲
			if(numb == -1) {
				numb = Math.floor(Math.random() * 10) % 2;
			}
			if(numb < arr.length - 1) {
				numb++
			} else {
				numb = 0
			}
			audio1.src = arr[numb];
			audio1.play();
			startOrPause.innerHTML = '暂停播放';
		}
		/*-----监测audio播放进度------*/
	audio1.addEventListener('timeupdate', function() {
		//audio1.currentTime     拿到播放时间或设置播放时间
		//audio1.duration    总共播放时间
		var progress = audio1.currentTime / audio1.duration
		range1.value = (range1.max - range1.min) * (progress + range1.min)
	})

}

function change1() {
	var progress = (range1.value - range1.min) / (range1.max - range1.min)
		//设置当前播放时间
	audio1.currentTime = audio1.duration * progress
}