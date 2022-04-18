export default function Game() {
    const credits = document.getElementById('credits-value')

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const update = () => {
        let cr = parseInt(credits.dataset.credits) + 1;
        credits.dataset.credits = cr;

        cr = cr.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '); // "12 345 678"
        credits.innerHTML = cr;
    }

    if (credits) {
        setInterval(() => {
            update();
        }, 1000/60); // 60fps
    }
}