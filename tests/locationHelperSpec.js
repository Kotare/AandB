var expect = chai.expect;

describe("LocationHelper", function() {

	beforeEach(function() {
		this.sandbox = sinon.sandbox.create();
		this.locationHelper = new LocationHelper();
	})

	afterEach(function() {
		this.sandbox.restore();
	})

	describe("calculates #proximity()", function() {
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
			expect(this.locationHelper.proximity(args)).to.equal(
				rightAngleTriangleSides.hypotenuse - (args.subject.diameter + args.object.diameter) / 2
			)
		})
	})

	describe("#calculateNewPathStep() for an entity", function() {
		describe("returns a new path", function() {
			it("with correct new vector & new coords (based on path variation & magnitude)", function() {
				var args = {
					currentPath: {
						coords: {
							x: 10,
							y: 10
						},
						vector: new Victor(0, -1)
					},
					maxTotalBearingVariationDegrees: 45,
					magnitude: 1
				}
				
				var response = this.locationHelper.calculateNewPathStep(args)
				
				expect(response.vector).to.respondTo('verticalAngle')
				expect(response.vector.verticalAngleDeg()).to.be.within( 
					(args.currentPath.vector.verticalAngleDeg() - args.maxTotalBearingVariationDegrees / 2) % 360 - 180, 
					(args.currentPath.vector.verticalAngleDeg() + args.maxTotalBearingVariationDegrees / 2) % 360 - 180
				)
				expect(response.vector.magnitude()).to.equal(args.magnitude)

				expect(response.path).to.respondTo('x')
				expect(response.path).to.respondTo('y')
			})
		})
	})

	describe("#moveTo()", function() {
		it("[move to viewmodel?] calls #coordsToTopLeftCoords to convert from entity centric coords in JS to top-left DOM coord 0")
	})
}) 