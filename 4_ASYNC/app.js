const changeCol = (color, delay, cB) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        cB()
    }, delay)
    
}

changeCol('red', 1000, () => {
    changeCol('blue', 1000)
})