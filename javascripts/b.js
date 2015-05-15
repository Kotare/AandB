function B() {
	this.size = {x: 30, y: 30}; // superclass
	this.coords = {x: 30, y: 30}; // superclass
}

B.prototype.time = function(world) { // superclass
	entities = world.sense();
	this.check(entities) //<< make callback of world.sense
};

B.prototype.check = function(entities) { // superclass
	for (var entity of entities) {
		var proximity = entityHelper.proximity({
											subject: {coords: this.coords, 		size: this.size},
											object:  {coords: entity.coords, 	size: entity.size}
										});
		this.react(this.class, proximity)
	}
}



