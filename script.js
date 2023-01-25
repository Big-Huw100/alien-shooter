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
};