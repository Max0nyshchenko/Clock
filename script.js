let c = document.querySelector('.clock');
let d = document.querySelector('.date');

setInterval(() => {
    let today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let date = today.toDateString();

    c.innerText = `${hh.toString().padStart(2, '0')} : ${mm.toString().padStart(2, '0')} : ${ss.toString().padStart(2, '0')}`;
    d.innerText = date;
});