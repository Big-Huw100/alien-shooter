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
            <h2 class ="alien-card__name">${this.name}</h2>
            <img class="alien-card__img" src=${this.img} />
            <p class="alien-card__hp">${this.hp}</p>
        </article>
        `;
        return getAlienCard;
    }

    getDeadAlienCard() {
        const getDeadAlienCard = `
        <article class ="alien-card">
        </article>
        `;
        return getDeadAlienCard;
    }
};

// Elements

const alienContainer = document.querySelector(".alien-container");

// Aliens

const atkShip = new Alien("Zekvel", "./images/attack-ship.png", 45);
const defShip = new Alien("Ungan", "./images/defense-ship.png", 80);
const motherShip = new Alien("Zoneth", "./images/mother-ship.png", 100);

// Display Aliens

alienContainer.innerHTML = atkShip.getAlienCard();

// Gameplay

// click on an alien ship, it looses health

alienContainer.addEventListener("click", () => {
    atkShip.hp = atkShip.hp - 12;
    if (atkShip.hp > 0) {
        alienContainer.innerHTML = atkShip.getAlienCard();
    } else {
        alienContainer.innerHTML = "";
    }
});