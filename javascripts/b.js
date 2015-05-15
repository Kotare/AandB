function B() {
	this.id = 1 // increment on creation?
	this.class = 'b'
	this.size = {x: 30, y: 30}; // superclass
	this.coords = {x: 30, y: 30}; // (centre!) superclass
	this.behaviours = { // toggle?
		default: [ function() {this.moveAbout()}, function() {this.poop()} ],
		this.class: {
			0: [ function() {this.procreate()} ], // continue moving?
			5: [ function() {this.wiggle()} ]
		},
		'a': {
			0: [ function() {this.stopMovingAbout()}, function() {this.shake()} ] // handle toggling behaviours like this?
			5: [ function() {this.moveAbout()}, function() {this.poop()} ]
		},
		'poop': {
			0: [ function() {this.diarreah} ] // turn off after a specified time?
		}
	}
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
		this.react(this.class, proximity) //<< make callback of proximity
	}
}

B.prototype.react = function(class, proximity) {
	for (var prox = proximity; prox <= 100; prox++) {
		if (this.behaviours.class.prox) {
			for (var funct of functions) {
				funct()
			}
		}
	};
}



