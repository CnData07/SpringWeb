var container = document.querySelector('#main')
// 获取浏览器视窗高度
var viewHeight = document.documentElement.clientHeight
// 获取滚动的页数
var pageNum = document.querySelectorAll('.page').length
// 初始化当前位置, 距离原始顶部距离
var currentPosition = 0
// 设置页面高度
container.style.height = viewHeight + 'px'


$(window).resize(function(){
    container = document.querySelector('#main')
    viewHeight = document.documentElement.clientHeight
    container.style.height = viewHeight + 'px'
})


// 向下滚动页面
function goDown() {
    if (currentPosition > -viewHeight * (pageNum - 1)) {
        currentPosition = currentPosition - viewHeight
        container.style.top = currentPosition + 'px'
    }
}

// 向上滚动页面
function goUp() {
    if (currentPosition < 0) {
        currentPosition = currentPosition + viewHeight
        container.style.top = currentPosition + 'px'
    }
}



// 节流函数
function throttle(fn, delay) {
    let baseTime = 0
    return function () {
        const currentTime = Date.now()
        if (baseTime + delay < currentTime) {
            fn.apply(this, arguments)
            baseTime = currentTime
        }
    }
}



// 初始鼠标滚动
var handlerWheel = throttle(scrollMove, 1000)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property
// firefox的页面滚动事件其他浏览器不一样
if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
    document.addEventListener('mousewheel', handlerWheel)
} else {
    document.addEventListener('DOMMouseScroll', handlerWheel)
}

function scrollMove(e) {

    if (e.deltaY > 0) {
        goDown()
    } else {
        goUp()
    }
}






// 处理移动端滑动
var touchStartY = 0
document.addEventListener('touchstart', event => {
    touchStartY = event.touches[0].pageY
})
var handleTouchEnd = throttle(touchEnd, 500)
document.addEventListener('touchend', handleTouchEnd)

function touchEnd(e) {
    var touchEndY = e.changedTouches[0].pageY
    if (touchEndY - touchStartY < 0) { // 向上滑动, 页面向下滚动
        goDown()
    } else {
        goUp()
    }
}