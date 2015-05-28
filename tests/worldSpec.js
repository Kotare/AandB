// 'use strict';
var expect = chai.expect;

describe("World", function() {

	beforeEach(function() {
		this.sandbox = sinon.sandbox.create();
		this.world = new World();
		this.B = this.sandbox.stub();
		console.log(this.B);
	})

	afterEach(function() {
		this.sandbox.restore();
	})

	describe("constructor", function() {

		it("initializes 2x 'B' entities & stores them in this.entities", function() {
			// var fakeEntities = ['entity1', 'entity2']
			// // var initializeEntities = this.sandbox.stub(World.prototype, "initializeEntities", function() {
			// 	return fakeEntities
			// });

			world = new World();
			expect(world.entities).to.equal(fakeEntities);
		})

		it("calls renderEntities()", function() {
			var renderEntities = this.sandbox.spy(World.prototype, 'renderEntities');
			world = new World;
			expect(world.renderEntities.called).to.be.true;
			World.prototype.renderEntities.restore();
		})
	})

	describe("#initializeEntities()", function() {
		it("returned array is not empty", function() {
			var response = world.initializeEntities();
			expect(response).to.not.be.empty;
		})

		it("returned array contains at least one entity", function() {
			var response = world.initializeEntities();
			expect(response).to.respondTo('klass');
		}) // test for Entity superclass?
	})

	describe("#renderEntities()", function() {
		it("adds all entities to the DOM") // Testable? View-model separation? Samson, help!
	})


	describe("#sense()", function() {
		it("returns an array of all entities except the one with passed id", function() {
			var B1 = { id: 1 }
			var B2 = { id: 2 }
			var B3 = { id: 3 }
			// var world = new World()
			var worldEntities = sandbox.stub( world, "entities", function() { return [B1, B2, B3]; })
			var response = world.sense(2); // B2
			// var entityIDs = [];
			// // var response = world.sense(0);
			// for (var i = 0; i <  response.length; i++) {
			// 	 entityIDs.push(response[i].id);
			// };
			console.log(sandbox);
			console.log(response);
			expect(response).to.be.a('array')
			console.log(response);
			expect(response).to.include(B1, B3)
			console.log(response);
			expect(response).to.not.include(B2)
		})
	})
})