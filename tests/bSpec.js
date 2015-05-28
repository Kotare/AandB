var expect = chai.expect,
	locationHelperProximity = sinon.spy(LocationHelper.prototype, "proximity");

describe("B", function() {

	beforeEach(function() {
	// var sandbox = sinon.sandbox.create();
	// 	var A1 = {
	// 		diameter: 50,
	// 		path: function() {
	// 			return {
	// 				currentCoords: {
	// 					x: 20,
	// 					y: 30
	// 				}
	// 			}
	// 		}
	// 	}
	// 	var world = sandbox.stub(World.prototype, "sense", function() {
	// 		return [A1]
	// 	});
	// 	console.log(world);
	// 	var args = {
	// 		id: 1,
	// 		world: world,
	// 		timeStep: 2000
	// 	}
	// 	b = new B(args);
	})

	describe("when created", function() {
		it("it is displayed on page")
	})
	describe("autonomous behaviour when", function() {
		describe("far from all entities", function() {
			it("moves about")

			it("poops")
		})
		describe("close to another of the same class", function() {
			it("moves about")

			it("shakes")
		})
	})
	describe("user interactions", function() {
		describe("on mouse/finger down", function() {
			it("squirms")
			it("squeals")
			it("is draggable")
		})
		describe("on mouse/finger up", function() {
			it("resumes autonomous behaviour")
		})
	})
})