// Make Alien Class

class Alien {
    constructor(name, img, hp) {
        (this.name = name),
        (this.img = img),
        (this.hp = hp)
    }

    getAlienCard() {
        const getAlienCard = `
        <article class ="alien-card">
            <img class="alien-card__img" src=${this.img} />
        </article>
        `;
        return getAlienCard;
    }
};

// Elements

const atkAlienContainers = document.querySelectorAll(".atk-alien-container");
const defAlienContainers = document.querySelectorAll(".def-alien-container");
const motherAlienContainers = document.querySelectorAll(".mother-alien-container");

// Aliens

const atkShip = new Alien("Zekvel", "./images/attack-ship.png", 45);
const defShip = new Alien("Ungan", "./images/defense-ship.png", 80);
const motherShip = new Alien("Zoneth", "./images/mother-ship.png", 100);

for (let i = 0; i < atkAlienContainers.length; i++) {
    // Display Aliens
    const atkShip = new Alien("Zekvel", "./images/attack-ship.png", 45);
    atkAlienContainers[i].innerHTML = atkShip.getAlienCard();
    // Gameplay
    atkAlienContainers[i].addEventListener("click", () => {
        atkShip.hp = atkShip.hp - 12;
        if (atkShip.hp > 0) {
            atkAlienContainers[i].innerHTML = atkShip.getAlienCard();
        } else {
            atkAlienContainers[i].innerHTML = "";
        }
    });
}

for (let i = 0; i < defAlienContainers.length; i++) {
    // Display Aliens
    const defShip = new Alien("Ungan", "./images/defense-ship.png", 80);
    defAlienContainers[i].innerHTML = defShip.getAlienCard();
    // Gameplay
    defAlienContainers[i].addEventListener("click", () => {
        defShip.hp = defShip.hp - 10;
        if (defShip.hp > 0) {
            defAlienContainers[i].innerHTML = defShip.getAlienCard();
        } else {
            defAlienContainers[i].innerHTML = "";
        }
    });
}

for (let i = 0; i < motherAlienContainers.length; i++) {
    // Display Aliens
    const motherShip = new Alien("Zoneth", "./images/mother-ship.png", 100);
    motherAlienContainers[i].innerHTML = motherShip.getAlienCard();
    // Gameplay
    motherAlienContainers[i].addEventListener("click", () => {
        motherShip.hp = motherShip.hp - 9;
        if (motherShip.hp > 0) {
            motherAlienContainers[i].innerHTML = motherShip.getAlienCard();
        } else {
            motherAlienContainers[i].innerHTML = "";
        }
    });
}
