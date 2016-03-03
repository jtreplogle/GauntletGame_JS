/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
  console.log("random",random);
  console.log("this.type",this.type);
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();


// A spell that kills the opponent by taking their current health and reducing it to <= zero.
Gauntlet.SpellBook.DeathSpell = function() {
  this.name = "Avada Kedavra";
  this.damage = 9000;

  // this.type = this.damageTypes[4];
};
Gauntlet.SpellBook.DeathSpell.prototype = new Gauntlet.SpellBook.Spell();

// A spell that summons an attack pet
Gauntlet.SpellBook.Pet = function() {
  this.name = "Attack Dog";
  this.damage = Math.floor(Math.random() * 5 + 8);

  // this.type = this.damageTypes[4];
};

// A spell that attacks enemy with lightning
Gauntlet.SpellBook.RaidensPower = function() {
  this.name = "lightning";
  this.damage = Math.floor(Math.random() * 7 + 10);

  // this.type = this.damageTypes["lightning"];
};

// A spell that attacks the enemy with a global flood
Gauntlet.SpellBook.NoahsArk = function() {
  this.name = "flood";
  this.damage = Math.floor(Math.random() * 40);

  // this.type = this.damageTypes["water"];
};

// A spell that attacks the enemy with mother nature
Gauntlet.SpellBook.Gaia = function() {
  this.name = "Gaia";
  this.damage = Math.floor(Math.random() * 33);

  // this.type = this.damageTypes["earth"];
}












