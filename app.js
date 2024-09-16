const names = document.getElementById("names");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        names.style.animationName = "names";
    };
    if (window.scrollY > 200) {
        img3.style.animationName = "img3_opacity";
    };
    if (window.scrollY > 400) {
        img4.style.animationName = "img4_opacity";
    };
    if (window.scrollY > 700) {
        img5.style.animationName = "img5_opacity";
    };
    if (window.scrollY > 1100) {
        img6.style.animationName = "img6_opacity";
    }
})


let end = new Date('10/31/2024 17:00');
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        // document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    let day = document.getElementById("day");
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    day.innerText = days;
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;

    if (+hour.innerText < 10) {
        hour.innerText = 0 + hour.innerText
    }

    if (+second.innerText < 10) {
        second.innerText = 0 + second.innerText
    }

    if (+minute.innerText < 10) {
        minute.innerText = 0 + minute.innerText
    }
}

timer = setInterval(showRemaining, 1000);
