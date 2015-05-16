function B(id) {
		this.id = id; // increment on creation?
		this.class = 'b';
		this.$element = $('<div id="' + this.id + '" class="' + this.class + '"></div>')
		this.diameter = 30; // superclass
		this.path = {
			currentCoords: {
				x: 50,
				y: 50
			},
			vector: new Victor(30, 30) //backwards-pointing vector, randomise later
		}
	}
	// superclass
	// this.behaviours = { // toggle?
	// 	default: [ function() {this.moveAbout()}, function() {this.poop()} ],
	// 	this.class: {
	// 		0: [ function() {this.procreate()} ], // continue moving?
	// 		5: [ function() {this.wiggle()} ]
	// 	},
	// 	'a': {
	// 		0: [ function() {this.stopMovingAbout()}, function() {this.shake()} ] // handle toggling behaviours like this?
	// 		5: [ function() {this.moveAbout()}, function() {this.poop()} ]
	// 	},
	// 	'poop': {
	// 		0: [ function() {this.diarreah} ] // turn off after a specified time?
	// 	}
	// }

B.prototype.time = function(world, timeStep) { // superclass
	// entities = world.sense(entities);

	// this.vector << updated
	// new coords

	this.moveAbout(timeStep) // Remove into react later!!!!!!!!!!!!!!!!!!!
	// args = world.sense(entities, objects, ideas, sound);
	// this.check(entities) //<< make callback of world.sense() above
};

B.prototype.moveAbout = function(timeStep) {
	this.path = this.newPath();
	var newTopLeftCoords = locationHelper.vectorToTopLeftCoords({
		vector: this.vector,
		entitySize: {
			x: this.diameter,
			y: this.diameter
		}
	});
	locationHelper.animateTo({
		$element: this.$element,
		newTopLeftCoords: newTopLeftCoords,
		timeStep: timeStep
	});
};

B.prototype.newPath = function() {
	var newBearing = this.path.vector.verticalAngle() + ((Math.Random() * bearingVariation) - (bearingVariation / 2));
	var vectorXNew = this.path.vector.magnitude() * Math.sin(newBearing);
	var vectorYNew = this.path.vector.magnitude() * Math.cos(newBearing);
	var newVector = new Victor(vectorXNew, vectorYNew);
	var xNew = this.path.currentCoords.x - newVector.x;
	var yNew = this.path.currentCoords.y + newVector.y;
	return {
			currentCoords: {
				x: xNew,
				y: yNew
			},
			vector: newVector
		};
}


// B.prototype.check = function(entities) { // superclass
// 	for (var entity of entities) {
// 		var proximity = LocationHelper.proximity({
// 											subject: {vector: this.vector, 		diameter: this.diameter},
// 											object:  {vector: entity.vector, 	diameter: entity.diameter}
// 										});
// 		this.react(this.class, proximity) //<< make callback of LocationHelper.proximity() above
// 	}
// }

// B.prototype.react = function(class, proximity) {
// 	for (var prox = proximity; prox <= 100; prox++) {
// 		if (this.behaviours.class.prox) {
// 			for (var funct of functions) {
// 				funct()
// 			}
// 		}
// 	};
// }