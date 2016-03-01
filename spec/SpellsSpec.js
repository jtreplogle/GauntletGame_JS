describe("The Spec for Spells", function() {

	it("should have a parent function called Spell that is a prototype of Spellbook, which is a prototype of Gauntlet", function() {
		expect(Gauntlet.SpellBook.Spell).toBeDefined();
	})

	it("should have a function Gauntlet.SpellBook.Sphere", function() {
		expect(Gauntlet.SpellBook.Sphere).toBeDefined();
	})
});