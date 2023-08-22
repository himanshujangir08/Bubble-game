function makeBubble() {
    bubble = ""

    for (let i = 1; i <= 200; i++) {
        let bubbleNum = Math.floor(Math.random() * 10)
        bubble += `<div class="mini-bubble">${bubbleNum}</div>`
        document.querySelector(".bottom-border").innerHTML = bubble;
    }
}
makeBubble();

timer = 60;
function makeTimer() {
    setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeRun").innerHTML = timer;
        }
        else {
            clearInterval(timer);
            document.querySelector(".bottom-border").innerHTML = "<h1>Game Over!</h1>"
        }
    }, 1000)
}
makeTimer();


let hitNum = 0
function makeHit() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitRun").innerHTML = hitNum
}
makeHit();

score = 0;
function makeScore() {
    score += 10;
    document.querySelector("#scoreRun").innerHTML = score
};

document.querySelector(".bottom-border").addEventListener("click", (elem) => {
    let makeGame = Number((elem.target.innerHTML))
    if (makeGame === hitNum) {
        makeScore();
        makeHit();
        makeBubble();
    }
})
