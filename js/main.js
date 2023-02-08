//const moment = require("moment/moment");

const fd1 = document.getElementById("fd1");
const fd2 = document.getElementById("fd2");
const fd3 = document.getElementById("fd3");
const fd4 = document.getElementById("fd4");
const fd5 = document.getElementById("fd5");

const rt1 = document.getElementById("rt1");
const rt2 = document.getElementById("rt2");
const rt3 = document.getElementById("rt3");
const rt4 = document.getElementById("rt4");
const rt5 = document.getElementById("rt5");

const ct1 = document.getElementById("ct1");
const ct2 = document.getElementById("ct2");
const ct3 = document.getElementById("ct3");
const ct4 = document.getElementById("ct4");
const ct5 = document.getElementById("ct5");
const ct6 = document.getElementById("ct6");
const ct7 = document.getElementById("ct7");
const ct8 = document.getElementById("ct8");

const mls1 = document.getElementById("mls1");
const mls2 = document.getElementById("mls2");
const mls3 = document.getElementById("mls3");
const mls4 = document.getElementById("mls4");
const mls5 = document.getElementById("mls5");
const mls6 = document.getElementById("mls6");
const mls7 = document.getElementById("mls7");
const mls8 = document.getElementById("mls8");
const mls9 = document.getElementById("mls9");
const mls10 = document.getElementById("mls10");
const mls11 = document.getElementById("mls11");

function setTime() {
    fd1.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    fd2.innerHTML = moment().format('dddd');
    fd3.innerHTML = moment().format("MMM Do YY");
    fd4.innerHTML = moment().format('YYYY [escaped] YYYY');
    fd5.innerHTML = moment().format();

    rt1.innerHTML = moment("20111031", "YYYYMMDD").fromNow();
    rt2.innerHTML = moment("20120620", "YYYYMMDD").fromNow();
    rt3.innerHTML = moment().startOf('day').fromNow();
    rt4.innerHTML = moment().endOf('day').fromNow();
    rt5.innerHTML = moment().startOf('hour').fromNow();

    ct1.innerHTML = moment().subtract(10, 'days').calendar();
    ct2.innerHTML = moment().subtract(6, 'days').calendar();
    ct3.innerHTML = moment().subtract(3, 'days').calendar();
    ct4.innerHTML = moment().subtract(1, 'days').calendar();
    ct5.innerHTML = moment().calendar();
    ct6.innerHTML = moment().add(1, 'days').calendar();
    ct7.innerHTML = moment().add(3, 'days').calendar();
    ct8.innerHTML = moment().add(10, 'days').calendar();

    mls1.innerHTML = moment.locale();
    mls2.innerHTML = moment().format('LT');
    mls3.innerHTML = moment().format('LTS');
    mls4.innerHTML = moment().format('L');
    mls5.innerHTML = moment().format('l');
    mls6.innerHTML = moment().format('LL');
    mls7.innerHTML = moment().format('ll');
    mls8.innerHTML = moment().format('LLL');
    mls9.innerHTML = moment().format('lll');
    mls10.innerHTML = moment().format('LLLL');
    mls11.innerHTML = moment().format('llll');
}

setInterval(setTime, 1000);

setTime();