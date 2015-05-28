// 'use strict';
var expect = chai.expect;

describe("World", function() {
	var world;
	var sandbox = sinon.sandbox.create();

	beforeEach(function() {
		world = new World();
		var B = sandbox.stub();
	})

	afterEach(function() {
		sandbox.restore();
	})

	describe("constructor", function() {
		// it("has a size", function() {
		// 	expect(world.size).to.exist;
		// })

		it("calls initializeEntities()", function() {
			var initializeEntities = sandbox.spy(World.prototype, "initializeEntities");
			world = new World();
			expect(initializeEntities.calledOnce).to.be.true;
			World.prototype.initializeEntities.restore();
		})

		// it("has an array of entities", function() {
		// 	expect(world.entities).to.be.a('array');
		// })

		it("calls renderEntities()", function() {
			var renderEntities = sandbox.spy(World.prototype, 'renderEntities');
			world = new World;
			expect(world.renderEntities.called).to.be.true;
			World.prototype.renderEntities.restore();
		})
	})

	describe("#initializeEntities()", function() {
		it("returns an array", function() {
			var response = world.initializeEntities();
			expect(response).to.be.a('array')
		})

		it("returned array is not empty", function() {
			var response = world.initializeEntities();
			expect(response).to.not.be.empty;
		})

		it("returned array contains at least one entity") // test for Entity superclass?
	})

	describe("#renderEntities()", function() {
		it("adds all entities to the DOM") // Testable? View-model separation? Samson, help!
	})

	var response; //help
	describe("#sense()", function() {
		beforeEach(function() {
			var B1 = { id: 1 }
			var B2 = { id: 2 }
			// console.log(world.entities);
			world = new World()
			var worldEntities = sandbox.stub( world, "entities", function() { return [B1, B2]; })
			console.log(world.sense(1));
			var response = world.sense(1);
		})
		it("returns an array", function() {
			expect(world.sense(1)).to.be.a('array')
		})

		it("returns all entities except one", function() {
			expect(world.sense(1).length).to.equal(world.entities.length-1)
		})

		it("doesn't return the entity with the id passed", function() {
			var response = world.sense(0);
			var entityIDs = [];
			for (var i = 0; i <  response.length; i++) {
				 entityIDs.push(response[i].id);
			};
			expect(entityIDs).to.not.include(1)
		})
	})
})