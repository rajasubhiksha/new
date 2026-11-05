/* SCREEN NAVIGATION */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (screenId === "cake") {
        resetCake();
    }
}


/* FLOATING STARS */

const sparkleLayer = document.createElement("div");

sparkleLayer.className = "sparkle-layer";

document.body.prepend(sparkleLayer);

const starSymbols = ["✦", "✧", "⋆", "·"];

for (let i = 0; i < 35; i++) {

    const star = document.createElement("span");

    star.className = "sparkle";

    star.textContent = starSymbols[
        Math.floor(Math.random() * starSymbols.length)
    ];

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize = (8 + Math.random() * 15) + "px";

    star.style.animationDuration =
        (6 + Math.random() * 10) + "s";

    star.style.animationDelay =
        (Math.random() * 10) + "s";

    sparkleLayer.appendChild(star);
}


/* BIRTHDAY CANDLES */

let blownCandles = 0;

function blowCandle(candle) {

    if (candle.classList.contains("blown")) {
        return;
    }

    candle.classList.add("blown");

    blownCandles++;

    const message = document.getElementById("cakeMessage");

    if (blownCandles === 1) {
        message.textContent =
            "One candle down! Keep goinggg ✨";
    }

    if (blownCandles === 2) {
        message.textContent =
            "Almost there, Mr Ragebaiter! 💙";
    }

    if (blownCandles === 3) {

        message.innerHTML =
            "HAPPIEST BIRTHDAYYY! 🎉💙<br>" +
            "May all your wishes come true!";

        setTimeout(function() {

            document.getElementById("kittyContainer")
                .classList.add("show-kitty");

            document.getElementById("kittySpeech")
                .textContent = "Pssst... Mr Ragebaiter! 🐾";

        }, 800);
    }
}


/* SEND A KISS */

function sendKiss() {

    const button = document.getElementById("kissButton");
    const screen = document.getElementById("cake");

    button.textContent = "KISSS DELIVERED! 💋";

    const flyingKiss = document.createElement("span");

    flyingKiss.className = "kiss-mark";
    flyingKiss.textContent = "💋";

    const buttonRect = button.getBoundingClientRect();
    const screenRect = screen.getBoundingClientRect();

    flyingKiss.style.left =
        (buttonRect.left - screenRect.left + buttonRect.width / 2) + "px";

    flyingKiss.style.top =
        (buttonRect.top - screenRect.top) + "px";

    screen.appendChild(flyingKiss);

    setTimeout(function() {

        flyingKiss.remove();

        const permanentKiss = document.createElement("span");

        permanentKiss.className = "permanent-kiss";
        permanentKiss.textContent = "💋";

        permanentKiss.style.left =
            (45 + Math.random() * 30) + "%";

        permanentKiss.style.top =
            (35 + Math.random() * 30) + "%";

        screen.appendChild(permanentKiss);

        document.getElementById("kittySpeech")
            .textContent = "Mwahhh! Kiss delivered! 💗";

    }, 1450);

}


/* RESET CAKE WHEN REOPENED */

function resetCake() {

    blownCandles = 0;

    document.querySelectorAll(".candle").forEach(function(candle) {
        candle.classList.remove("blown");
    });

    document.getElementById("cakeMessage").textContent =
        "Tap all three candles to make your wish! ✨";

    document.getElementById("kittyContainer")
        .classList.remove("show-kitty");

    document.getElementById("kissButton").textContent =
        "SEND A KISS 💋";

    document.querySelectorAll(".permanent-kiss, .kiss-mark")
        .forEach(function(mark) {
            mark.remove();
        });
}