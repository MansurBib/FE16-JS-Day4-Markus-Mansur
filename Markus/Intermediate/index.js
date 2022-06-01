const santa = (id) => {
    box = document.getElementById(id)
    box.style.opacity = "0"
}

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const bg = document.getElementById("bg")
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;
bg.style.backgroundColor = rgb