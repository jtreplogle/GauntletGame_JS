describe("the specs for Player", function (){


	it("should have a Gauntlet.Combatants.Human", function() {
		expect(Gauntlet.Combatants.Human).toBeDefined();
	})

	it("should have a Gauntlet.Combatants.Monster", function() {
		expect(Gauntlet.Combatants.Monster).toBeDefined();
	})

	it("should have a Gauntlet.Combatants.Player", function() {
		expect(Gauntlet.Combatants.Player).toBeDefined();
	})

	it("Gauntlet.Combatants.Player.prototype.generateClass", function() {
		expect(Gauntlet.Combatants.Player.prototype.generateClass).toBeDefined();
	})

	it("Gauntlet.Combatants.Player.prototype.setWeapon", function() {
		expect(Gauntlet.Combatants.Player.prototype.setWeapon).toBeDefined();
	})



	});