var expect = chai.expect;

var B = sinon.stub();

describe("World", function() {
	describe("constructor", function() {
		it("should have a size", function() {
			var world = new World();
			expect(world.size).to.exist;
		})
	})
})