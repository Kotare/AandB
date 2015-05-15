function World() {
	this.entities = this.generateEntities(); //{a: [], b: []}
}

World.prototype.generateEntities = function() {
	var initialEntities = []
	for (var i = 1; i <= 2; i++) {
		initialEntities.push(new B(i))
	}
	return initialEntities
}

World.prototype.renderEntities = function() {
	var LocationHelper = new LocationHelper
	for (var entity of this.entities) {
		$('#world').append(entity.$element)
	}
}

World.prototype.propagateTime = function() {
	for (var entity of this.entities) {
		entity.time() // b.time()
	}
}

World.prototype.sense = function(callback) {
	return this.entities
}