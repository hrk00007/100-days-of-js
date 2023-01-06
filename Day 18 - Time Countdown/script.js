//Time Countdown
let time = 100; //TIME in Minutes
let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
    let promoTimer = setInterval(() => {

        if (promoTime <= 0) {
            clearInterval(promoTimer);
            counting.innerHTML = "Promo Has Ended"
        } else {
            promoTime--;
            const days = Math.floor(promoTime / 3600 / 24);
            const hours = Math.floor(promoTime / 3600) % 24;
            const min = Math.floor(promoTime / 60) % 60;
            const sec = Math.floor(promoTime) % 60;
            counting.innerHTML = `TIME: ${format(hours)}Hrs : ${format(min)}Min : ${format(sec)}s`
        }

    }, 1000)
}

function format(t) {
    return t < 10 ? `0${t}` : t;
}

startCountdown();