// Basic controller

const block = document.getElementById("Block")
const speed = 25

function moveBlockLeft() {
    const leftNumbers = block.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    
    if (left > 0) {
        block.style.left = `${left - speed}px`
    }
}

function moveBlockRight() {
    const leftNumbers = block.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if (left < 450) {
        block.style.left = `${left + speed}px`
    }
}

function moveBlockUp() {
    const bottomNumbers = block.style.bottom.replace("px", "")
    const bottom = parseInt(bottomNumbers, 10)

    if (bottom < 450) {
        block.style.bottom = `${bottom + speed}px`
    }
}

function moveBlockDown() {
    const bottomNumbers = block.style.bottom.replace("px", "")
    const bottom = parseInt(bottomNumbers, 10)

    if (bottom > 0) {
        block.style.bottom = `${bottom - speed}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveBlockLeft()
    }
    if (e.key === "ArrowRight") {
        moveBlockRight()
    }
    if (e.key === "ArrowUp") {
        moveBlockUp()
    }
    if (e.key === "ArrowDown") {
        moveBlockDown()
    }
})
