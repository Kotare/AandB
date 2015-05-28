var expect = chai.expect,
	locationHelperProximity = sinon.spy(LocationHelper.prototype, "proximity");

describe("B", function() {
	var b;
	var sandbox = sinon.sandbox.create();
	var world;

	beforeEach(function() {
		var A1 = {
			diameter: 50,
			path: function() {
				return {
					currentCoords: {
						x: 20,
						y: 30
					}
				}
			}
		}
		var world = sandbox.stub(World.prototype, "sense", function() {
			return [A1]
		});
		console.log(world);
		var args = {
			id: 1,
			world: world,
			timeStep: 2000
		}
		b = new B(args);
	})

	describe("constructor", function() {
		it("calls this.calculateInitialProperties()")

		it("calls this.born()")
	})

	describe("#")



})