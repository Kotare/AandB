function World() {
	this.$element = $('#world')
	this.size = Math.max( $(window).height(), $(window).width() )
	debugger
	this.entities = this.initializeEntities(); //{a: [], b: []}
	this.renderEntities()
}

World.prototype.initializeEntities = function() {
	var initialEntities = []
	var numEntities = 2
	var timeStep = {
		max: 300,
		min: 200
	}
	for (var i = 1; i <= numEntities; i++) {
		initialEntities.push(new B({
				id: i,
				world: this,
				timeStep: Math.random() * (timeStep.max - timeStep.min) + timeStep.min
		}))
	}
	return initialEntities
}

World.prototype.renderEntities = function() {
	for (var entity of this.entities) {
		this.$element.append(entity.$element)
	}
}

World.prototype.sense = function(id) {
	return $.grep(this.entities, function(e) {
		return e.id != id;
	});
}