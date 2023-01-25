"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Make Alien Class
var Alien =
/*#__PURE__*/
function () {
  function Alien(name, img, hp) {
    _classCallCheck(this, Alien);

    this.name = name, this.img = img, this.hp = hp;
  }

  _createClass(Alien, [{
    key: "getAlienCard",
    value: function getAlienCard() {
      var getAlienCard = "\n        <article class =\"alien-card\">\n            <h2 class =\"alien-card__name\">".concat(this.name, "</h2>\n            <img class=\"alien-card__img\" src=").concat(this.img, " />\n            <p class=\"alien-card__hp\">").concat(this.hp, "</p>\n        </article>\n        ");
      return getAlienCard;
    }
  }]);

  return Alien;
}();

; // Elements

var alienContainer = document.querySelector(".alien-container"); // Aliens

var atkShip = new Alien("Zekvel", "./images/attack-ship.png", 45);
var defShip = new Alien("Ungan", "./images/defense-ship.png", 80);
var motherShip = new Alien("Zoneth", "./images/mother-ship.png", 100); // Display Aliens

alienContainer.innerHTML = atkShip.getAlienCard(); // Gameplay
// click on an alien ship, it looses health

alienContainer.addEventListener("click", function () {
  atkShip.hp = atkShip.hp - 12;

  if (atkShip.hp > 0) {
    alienContainer.innerHTML = atkShip.getAlienCard();
  } else {
    alienContainer.innerHTML = "";
  }
});