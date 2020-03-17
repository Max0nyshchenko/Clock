let c = document.querySelector('.clock');
let d = document.querySelector('.date');

setInterval(() => {
    let today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let date = today.toDateString();

    c.innerHTML = `
                    <span>${hh.toString().padStart(2, '0')}</span>
                    <span> : </span>
                    <span>${mm.toString().padStart(2, '0')}</span>
                    <span> : </span>
                    <span>${ss.toString().padStart(2, '0')}</span>
                    `;
    d.innerHTML = date;
});