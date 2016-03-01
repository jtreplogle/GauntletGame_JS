describe("The specs for Weapons", function() {

// 1
	it("should have a 'Weapon' function", function() {
		expect(Weapon).toBeDefined();
	})

// 2
	it("should have a 'Dagger' function on the prototype of 'Weapon'", function() {
		expect(Dagger).toBeDefined();
	});

// 3
	it("should have a 'BroadSword' function on the prototype of 'Weapon'", function() {
		expect(BroadSword).toBeDefined();
	});

// 4
	it("should have a 'WarAxe' functionon the prototype of 'Weapon'", function() {
		expect(WarAxe).toBeDefined();
	});

});