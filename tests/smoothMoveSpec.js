var expect = chai.expect;

describe("behavour/SmoothMove", function() {
	var smoothMove;
	var sandbox = sinon.sandbox.create();

	beforeEach(function() {
		smoothMove = new SmoothMove();
	})

	afterEach(function() {
		sandbox.restore()
	})

	describe("moveAbout", function() {
		it("tells body to move to new position along same course within specified path variation")
	})
})