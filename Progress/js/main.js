var progress = document.querySelector('.pyl-progress');
//获取body高度&&浏览器高度&&滚动条距离顶部高度
var _bodyH = document.body.scrollHeight;
var _winH = window.innerHeight;
var _scrollTop = 0;

if(_bodyH - _winH <= 0){
	progress.style.width = "0%";
}


// 滚动鼠标
function mouseScroll(e){
	_scrollTop = document.body.scrollTop
	progress.style.width = (_scrollTop/(_bodyH - _winH)*100) + '%';
}

document.addEventListener('scroll',mouseScroll,false);
