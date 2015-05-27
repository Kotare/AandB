// 'use strict';
var expect = chai.expect;
		// sinon = require('sinon');

var B = sinon.stub();
console.log(B)

describe("World", function() {
	var world;

	beforeEach(function() {
		world = new World();
	})

	afterEach(function() {
		
	})

	describe("constructor", function() {
		it("has a size", function() {
			expect(world.size).to.exist;
		})

		it("calls initializeEntities()", function() {
			var initializeEntities = sinon.spy(World.prototype, "initializeEntities");
			world = new World();
			expect(initializeEntities.calledOnce).to.be.true;
			World.prototype.initializeEntities.restore();
		})

		it("has an array of entities", function() {
			expect(world.entities).to.be.a('array');
		})

		it("calls renderEntities()", function() {
			var renderEntities = sinon.spy(World.prototype, 'renderEntities');
			world = new World;
			expect(world.renderEntities.called).to.be.true;
			World.prototype.renderEntities.restore();
		})
	})

	describe("#initializeEntities", function() {
		it("returns an array", function() {
			var response = world.initializeEntities();
			expect(response).to.be.a('array')
		})

		it("is not empty", function() {
			var response = world.initializeEntities();
			expect(response).to.not.be.empty;
		})

		it("contains at least one entity")
	})

	describe("#renderEntities", function() {
		it("adds all entities to the DOM", function() {
			
		})
	})

	describe("#sense", function() {
		var B1 = sinon.stub( B, "id", function(arguments) { return 1; });
		var B2 = sinon.stub( B, "id", function(arguments) { return 2; });
		var worldEntities = sinon.stub( world, "entities", function() { return [B1, B2]; })
		console.log(world.entities);
		var response = world.sense(1);
		it("returns an array", function() {
			expect(response).to.be.a('array')
		})

		it("returns all entities except the entity with the id passed", function() {
			expect(response.length).to.equal(world.entities.length-1)
		})

		it("doesn't return the entity with the id passed", function() {
			expect(response)
		})
	})
})