var expect = chai.expect;

describe("LocationHelper", function() {

	beforeEach(function() {
		this.sandbox = sinon.sandbox.create();
		this.locationHelper = new LocationHelper();
	})

	afterEach(function() {
		this.sandbox.restore();
	})

	describe("#calculateDistanceBetween()", function() {
		it("returns a the correct closest distance between circular entities of different sizes", function() {
			var rightAngleTriangleSides = {
				a: 30,
				o: 40,
				hypotenuse: 50
			}
			var args = {
				subject: {
					diameter: 10,
					coords: {
						x: 0,
						y: 0
					}
				},
				object: {
					diameter: 10,
					coords: {
						x: rightAngleTriangleSides.a,
						y: rightAngleTriangleSides.o
					}
				}
			};
			expect(this.locationHelper.calculateDistanceBetween(args)).to.equal(
				rightAngleTriangleSides.hypotenuse - (args.subject.diameter + args.object.diameter) / 2
			)
		})
	})
}) 