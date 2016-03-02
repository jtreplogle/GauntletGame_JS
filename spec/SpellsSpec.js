describe("The Spec for Spells", function() {

// 1
	it("should have a parent function called Spell defined", function() {
		expect(Gauntlet.SpellBook.Spell).toBeDefined();
	})

// 2
	it("should have a Sphere function defined", function() {
		expect(Gauntlet.SpellBook.Sphere).toBeDefined();
	})

	it("should have a Gauntlet.Combatants.Monster", function() {
		expect(Gauntlet.Combatants.Monster).toBeDefined();
	})

// 3
	it("should have a DeathSpell function defined", function() {
		expect(Gauntlet.SpellBook.DeathSpell).toBeDefined();
	})

// 4
	it("should reduce the oponent's health to zero or less when DeathSpell is used", function() {
		var UglyOrc = new Gauntlet.Combatants.Monster();
		UglyOrc.health = 100;
		UglyOrc.setWeapon(new WarAxe());
		// UglyOrc.generateClass();

		var Jeremy = new Gauntlet.Combatants.Player();
		console.log("hello");
		Jeremy.setWeapon(new DeathSpell());
		Jeremy.generateClass();
		console.log("Jeremy Weapon",Jeremy.weapon);
		// expect(UglyOrc.health - Jeremy.damage).toBeLessThan(1);
	})



});