function World() {
	this.entities = this.generateEntities(); //{a: [], b: []}
}

World.prototype.generateEntities = function() {
	var initialEntities = []
	for (var i = 1; i <= 100; i++) {
		initialEntities.push(new B(i))
	}
	return initialEntities
}

World.prototype.renderEntities = function() {
	for (var entity of this.entities) {
		$('#world').append(entity.$element)
	}
}

World.prototype.propagateTime = function(timeStep) {
	for (var entity of this.entities) {
		entity.time(timeStep) // b.time()
	}
}

World.prototype.sense = function(callback) {
	return this.entities
}