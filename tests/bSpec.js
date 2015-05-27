var expect = chai.expect,
		locationHelperProximity = sinon.spy(LocationHelper.prototype, "proximity");

describe("B", function() {
	var b;
	var sandbox = sinon.sandbox.create();

	beforeEach(function() {
		// var world = sandbox.stub()
		var A1 = function() { 
			path: function() { 
				return {
					currentCoords: {
						x: 20,
						y: 30
					}
				}
			}
		}
		var args = sandbox.spy(world, "sense", function() { return [A1]; })
		b = new B(args);
	})

	describe("constructor", function() {
		it("has a class(klass)", function() {
			console.log(b);
			expect(b.klass).to.not.be.empty;
		})
	})
})