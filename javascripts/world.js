function World() {
	this.entities = {}; //{a: [], b: []}
}

World.prototype.renderEntities = function() {
	var b = new B()
}

World.prototype.propagateTime = function() {
	for (var entity in entities) {
		entity.time()
		// b.time()
	}
}

World.prototype.sense = function(callback) {
	return this.entities
}