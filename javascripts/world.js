'use strict';
function World() {
	this.entities = this.initializeEntities();
}

World.prototype.initializeEntities = function() {
	var initialEntities = []
	var numEntities = 2
	var timeStep = {
		max: 300,
		min: 200
	};
	for (var i = 1; i <= numEntities; i++) {
		initialEntities.push(new B({
				id: i,
				world: this,
				timeStep: Math.random() * (timeStep.max - timeStep.min) + timeStep.min
		}))
	}
	return initialEntities
}

World.prototype.sense = function(id) {
	return $.grep(this.entities, function(e) {
		return e.id != id;
	});
}