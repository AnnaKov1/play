"use strict";
function setupPlayer(playerId, audioSrc) {
    const playerDiv = document.querySelector(`.${playerId}`);
    const playButton = playerDiv === null || playerDiv === void 0 ? void 0 : playerDiv.querySelector("button");
    const audio = new Audio(audioSrc);
    if (playButton) {
        playButton.addEventListener("click", () => {
            console.log(playButton);
            if (audio.paused) {
                audio.play();
                playButton.textContent = "Pause";
            }
            else {
                audio.pause();
                playButton.textContent = "Play";
            }
        });
        audio.addEventListener("ended", () => {
            playButton.textContent = "Play";
        });
    }
}
setupPlayer("player1", "./mp3/sample.mp3");
setupPlayer("player2", "./mp3/sample.mp3");
setupPlayer("player3", "./mp3/sample.mp3");
