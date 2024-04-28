const adaConfetti = document.getElementById("confetti")
const confetti = require('canvas-confetti');


adaConfetti.addEventListener("click", () => {
    const myCanvas = document.createElement('canvas');
    myCanvas.style.width = "50vh";
    myCanvas.style.height = "50vh"
    myCanvas.style.position = "fixed"
    myCanvas.style.inset = 0;
    myCanvas.style.zIndex = 99;
    document.body.appendChild(myCanvas);

    const myConfetti = confetti.create(myCanvas, { resize: true, });

    myConfetti({
        particleCount: 750,
        spread: 160
        // any other options from the global
        // confetti function
    });
})