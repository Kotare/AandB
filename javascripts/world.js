function World() {
	this.entities = {}; //{a: [], b: []}
}

World.prototype.renderEntities = function() {
	var LocationHelper = new LocationHelper
	var b = new B()
}

World.prototype.propagateTime = function() {
	for (var entity of entities) {
		entity.time() // b.time()
	}
}

World.prototype.sense = function(callback) {
	return this.entities
}