const canvas = document.getElementById("snakeCanvas");
const context = canvas.getContext("2d");

function resizeCanvas() {
    const size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = (size * 2/3);
    canvas.height = (size * 2/3);

    // Redraw your content on the canvas (if needed)
    // You can put your drawing code here.
}

resizeCanvas()
window.addEventListener("resize", resizeCanvas());
