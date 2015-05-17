function World() {
	this.$element = $('#world')
	this.entities = this.initializeEntities(); //{a: [], b: []}
	this.renderEntities()
}

World.prototype.initializeEntities = function() {
	var initialEntities = []
	for (var i = 1; i <= 50; i++) {
		initialEntities.push(new B(i, Math.random() * (100 - 3) + 3))
	}
	return initialEntities
}

World.prototype.renderEntities = function() {
	for (var entity of this.entities) {
		this.$element.append(entity.$element)
	}
}

World.prototype.sense = function(callback) {
	return this.entities
}