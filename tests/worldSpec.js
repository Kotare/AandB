// 'use strict';
var expect = chai.expect;

describe("World", function() {
	beforeEach(function() {
		this.sandbox = sinon.sandbox.create();
		this.entity = sinon.createStubInstance(B);
		this.B = this.sandbox.stub(window, "B").returns(this.entity)
		this.world = new World();
	})

	afterEach(function() {
		this.sandbox.restore();
	})

	describe("initialize", function() {
		it("!? initializes entities & stores them in this.entities", function() {
			expect(this.world.entities[0]).to.eq(this.entity);
			expect(this.world.entities[1]).to.eq(this.entity);
		})
	})

	describe("#sense()", function() {
		it("returns all entities", function() {
			var response = this.world.sense(0);
			expect(response).to.include(this.entity)
			expect(response.length).to.equal(this.world.entities.length)
		})
	})
})