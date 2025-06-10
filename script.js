let rollDiceBtnEl = document.getElementById("rollDicebutton");
let diceChangerEl = document.getElementById("diceChanger");
let card = document.querySelector(".onemaincontainer");

let icons = [
    '<i class="fa-solid fa-dice-one"></i>',
    '<i class="fa-solid fa-dice-two"></i>',
    '<i class="fa-solid fa-dice-three"></i>',
    '<i class="fa-solid fa-dice-four"></i>',
    '<i class="fa-solid fa-dice-five"></i>',
    '<i class="fa-solid fa-dice-six"></i>'
];

rollDiceBtnEl.onclick = function() {
    let randomIndex = Math.floor(Math.random() * 6); // Random number 0 to 5
    let diceNumber = randomIndex + 1;

    // Show animated dice icon
    diceChangerEl.innerHTML = icons[randomIndex];
    diceChangerEl.classList.add("animate-roll");

    // Remove animation class after animation
    setTimeout(() => {
        diceChangerEl.classList.remove("animate-roll");
    }, 400); // Match animation duration

    // Add to history
    let div = document.createElement("div");
    div.classList.add("onemaincontainer-1");
    div.innerHTML = `
        <p class="text">Roll: <span>${diceNumber}</span></p>
        <div class="icon">${icons[randomIndex]}</div>
    `;
    card.appendChild(div);
};