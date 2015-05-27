var expect = chai.expect;

var B = sinon.stub();

describe("World", function() {
	describe("constructor", function() {
		it("should have a size", function() {
			var world = new World();
			expect(world.size).to.exist;
		})

		it("should call initializeEntities", function() {
			var world = new World();
			// var world.renderEntities = sinon.spy();
			expect(world.initializeEntities.called).to.be.true
		})

		it("should have an array of entities", function() {
			var world = new World();
			expect(world.entities).to.be.a('array')
		})

		it("should call renderEntities", function() {
			var world = new World();
			// var world.renderEntities = sinon.spy();
			expect(world.renderEntities.called).to.be.true
		})
	})
})