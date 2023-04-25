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
      var getAlienCard = "\n        <article class =\"alien-card\">\n            <img class=\"alien-card__img\" src=".concat(this.img, " />\n        </article>\n        ");
      return getAlienCard;
    }
  }]);

  return Alien;
}();

; // Elements

var atkAlienContainers = document.querySelectorAll(".atk-alien-container");
var defAlienContainers = document.querySelectorAll(".def-alien-container");
var motherAlienContainers = document.querySelectorAll(".mother-alien-container"); // Aliens

var atkShip = new Alien("Zekvel", "./images/attack-ship.png", 45);
var defShip = new Alien("Ungan", "./images/defense-ship.png", 80);
var motherShip = new Alien("Zoneth", "./images/mother-ship.png", 100);

var _loop = function _loop(i) {
  // Display Aliens
  var atkShip = new Alien("Zekvel", "./images/attack-ship.png", 45);
  atkAlienContainers[i].innerHTML = atkShip.getAlienCard(); // Gameplay

  atkAlienContainers[i].addEventListener("click", function () {
    atkShip.hp = atkShip.hp - 12;

    if (atkShip.hp > 0) {
      atkAlienContainers[i].innerHTML = atkShip.getAlienCard();
    } else {
      atkAlienContainers[i].innerHTML = "";
    }
  });
};

for (var i = 0; i < atkAlienContainers.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  // Display Aliens
  var defShip = new Alien("Ungan", "./images/defense-ship.png", 80);
  defAlienContainers[_i].innerHTML = defShip.getAlienCard(); // Gameplay

  defAlienContainers[_i].addEventListener("click", function () {
    defShip.hp = defShip.hp - 10;

    if (defShip.hp > 0) {
      defAlienContainers[_i].innerHTML = defShip.getAlienCard();
    } else {
      defAlienContainers[_i].innerHTML = "";
    }
  });
};

for (var _i = 0; _i < defAlienContainers.length; _i++) {
  _loop2(_i);
}

var _loop3 = function _loop3(_i2) {
  // Display Aliens
  var motherShip = new Alien("Zoneth", "./images/mother-ship.png", 100);
  motherAlienContainers[_i2].innerHTML = motherShip.getAlienCard(); // Gameplay

  motherAlienContainers[_i2].addEventListener("click", function () {
    motherShip.hp = motherShip.hp - 9;

    if (motherShip.hp > 0) {
      motherAlienContainers[_i2].innerHTML = motherShip.getAlienCard();
    } else {
      motherAlienContainers[_i2].innerHTML = "";
    }
  });
};

for (var _i2 = 0; _i2 < motherAlienContainers.length; _i2++) {
  _loop3(_i2);
}