function B() {
}

B.prototype.time = function(world) {
	entities = world.sense();
	this.check(entities) //<< make callback of world.sense
};

B.prototype.check(entities) = function() {
	for (var entity of entities) {
		var proximity = Helper.proximity(this.coords, entity.coords);
		this.react(this.class, proximity)
	}
}