var expect = chai.expect;

describe("SmoothMove", function() {
	var smoothMove;
	var sandbox = sinon.sandbox.create();

	beforeEach(function() {
		smoothMove = new SmoothMove();
	})

	afterEach(function() {
		sandbox.restore()
	})

	describe("#moveAbout", function() {
		it("sets new path")
		
		it("calls locationHelper.moveTo, passing an $element and new x&y coords")
	})
})