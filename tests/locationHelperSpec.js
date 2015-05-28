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
		it("returns a the correct closest distance between circular entities of different sizes")
	})

	describe("#nextVectorOnSmoothPath()", function() {
		it("returns a vector")

		it("returned vector is different to passed vector")
	})

	describe("#newCoordsFromNewVector()", function() {
		it("returns coordinates")

		it("returned coords are different from passed coords")
	})

	describe("#moveTo()", function() {
		it("calls #coordsToTopLeftCoords to convert from entity centric coords in JS to top-left DOM coord 0")
	})
}) 