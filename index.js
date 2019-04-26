const dragMe = (element, options = {}) => {
    const handler = options.handler || element
    let moving = false
    let startMousePosition = {x: 0, y: 0}
    let startElementPosition = {x: 0, y: 0}
    const move = (event) => {
        const moveX = event.clientX - startMousePosition.x
        const moveY = event.clientY - startMousePosition.y
        element.style.left = startElementPosition.x + moveX + 'px'
        element.style.top = startElementPosition.y + moveY + 'px'
    }
    handler.addEventListener('mousedown', function (event) {
        moving = true
        startMousePosition.x = event.clientX
        startMousePosition.y = event.clientY
        startElementPosition.x = parseInt(getComputedStyle(element).left)
        startElementPosition.y = parseInt(getComputedStyle(element).top)
    })
    handler.addEventListener('mouseup', function (event) {
        move(event)
        moving = false
    })
    document.addEventListener('mousemove', function (event) {
        if (!moving) return
        move(event)
    })

}
export default dragMe