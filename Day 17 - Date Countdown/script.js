const countTo = "1 Jan 2024";

const c = setInterval(() => {

    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSecond = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60;

    const countDown = document.getElementById("countdown");

    countDown.textContent = `${days}Days ${format(hours)}Hrs : ${format(minutes)}Min : ${format(second)}s`

    if (totalSecond < 0) {
        clearInterval(c);
        countDown.textContent = "HAPPY NEW YEAR";
    }

}, 1000)


function format(t) {
    return t < 10 ? `0${t}` : t;
}