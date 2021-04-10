(() => {
    console.log("fire");
    const play = document.querySelector(".playButton"),
        stop = document.querySelector(".stopButton"),
        back = document.querySelector(".playBack"),
        forward = document.querySelector(".playForward"),
        next = document.querySelector(".playAnother"),
        show = document.querySelector(".showButton"),
        videoPlayer = document.querySelector("video"),
        videoSource = document.querySelector(".videoSource"),
        scriptDiv = document.querySelector(".transcript"),
        scriptContent = document.querySelector(".transcriptContent"),
        secondEpScript = "MURRAY FRANKLIN Yeah, that's not funny, that's notthe kind of humor we do on this show. JOKER Sorry. It's been a rough few months, Murray. I mean, after my mother died, the police came to question me at her funeral. Who does that? MURRAY FRANKLIN (too easy) Oh really? Were you a suspect? The audience laughs. JOKER Very funny, Murray. No, they came because I killed those three Wall Street guys.";

    secondEp = "videos/joker_part2.mp4";

    videoPlayer.removeAttribute('controls');

    function playVideo() {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    }

    function stopVideo() {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

    function backVideo() {
        videoPlayer.currentTime = videoPlayer.currentTime - 5;
    }

    function forwardVideo() {
        videoPlayer.currentTime = videoPlayer.currentTime + 5;
    }

    function playNextEpisode() {
        if (videoPlayer.src !== secondEp && videoSource.src !== secondEp) {
            videoSource.src = secondEp;
            videoPlayer.src = secondEp;
            scriptContent.textContent = secondEpScript;
            next.classList.add("hidden");
        }

    }

    function showScript() {
        if (scriptDiv.classList.contains("hidden")) {
            scriptDiv.classList.remove("hidden");
        } else {
            scriptDiv.classList.add("hidden");
        }
    }

    play.addEventListener("click", playVideo);
    stop.addEventListener("click", stopVideo);
    back.addEventListener("click", backVideo);
    forward.addEventListener("click", forwardVideo);
    next.addEventListener("click", playNextEpisode);
    show.addEventListener("click", showScript);
})();