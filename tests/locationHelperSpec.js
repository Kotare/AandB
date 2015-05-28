var expect = chai.expect;

describe("LocationHelper", function() {
	var locationHelper;
	var sandbox = sinon.sandbox.create();

	beforeEach(function() {
		locationHelper = new LocationHelper();
	})

	afterEach(function() {
		sandbox.restore();
	})

	describe("#proximity()", function() {
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
			expect(locationHelper.proximity(args)).to.equal(
				rightAngleTriangleSides.hypotenuse - (args.subject.diameter + args.object.diameter) / 2
			)
		})
	})

	describe("#nextVectorOnSmoothPath()", function() {
		it("returns a vector with correctly adjusted bearing & magnitude", function() {
			var args = {
				maxTotalBearingVariation: Math.PI / 4,
				magnitude: 1,
				currentVector: new Victor(0, -1)
			}
			var response = locationHelper.nextVectorOnSmoothPath(args)
			expect(response).to.respondTo('verticalAngle')
			expect(response.verticalAngle).to.be.within( 
				-args.maxTotalBearingVariation / 2, 
				args.maxTotalBearingVariation / 2
			)
			expect(response.magnitude()).to.be(args.magnitude)
		})
	})

	describe("#newCoordsFromNewVector()", function() {
		it("returns coordinates")

		it("returned coords are different from passed coords")
	})

	describe("#moveTo()", function() {
		it("calls #coordsToTopLeftCoords to convert from entity centric coords in JS to top-left DOM coord 0")
	})
}) 