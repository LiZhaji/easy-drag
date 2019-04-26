const drugMe = (obj) => {
    obj.onmousedown = function (event) {
        //设置obj捕获所以鼠标摁下的事件，只有IE有此函数且renturn false对其无效
        obj.setCapture && obj.setCapture();

        // 计算鼠标和元素左上角的水平和垂直偏移量，否则点击鼠标默认会跳到元素左上角;兼容IE6
        event = event || window.event
        const displacementX =  event.clientX -  obj.offsetLeft
        const displacementY=  event.clientY -  obj.offsetTop
        document.onmousemove = function (event) {

            event = event || window.event
            var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft ;
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var left = event.clientX - displacementX + scrollLeft
            var top = event.clientY - displacementY + scrollTop
            obj.style.left = left + 'px'
            obj.style.top = top + 'px'
        }
        document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
    // 取消浏览器的默认拖拽搜索行为
    return false
}
module.exports = drugMe