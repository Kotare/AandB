function B(id, timeStep) {
		this.id = id; // increment on creation?
		this.class = 'b';
		this.timeStep = timeStep;
		this.$element = $('<div></div>')
		this.$element.attr('id', this.id)
		this.$element.addClass(this.class)
		this.diameter = 30; // superclass
		this.pathStep = 0.2;
		this.path = {
			currentCoords: {
				x: 50,
				y: 50
			},
			vector: new Victor(0, -(this.pathStep)) //backwards-pointing vector, randomise later
		}
		this.$element.css({
			width: this.diameter,
			height: this.diameter,
			top: this.path.currentCoords.y + '%',
			left: this.path.currentCoords.x + '%'
		})
		this.time()
	}
	// superclass
	// this.behaviours = { // toggle?
	// 	default: [ function() {this.moveAbout(354)}, function() {this.poop()} ],
	// 	this.class: {
	// 		proximity = 0: [ function() {this.procreate()} ], // continue moving?
	// 		proximity < 5: [ function() {this.wiggle()} ]
	// 		noise > 5: [ function() {this.wiggle()} ]
	// 	},
	// 	'a': {
	// 		0: [ function() {this.stopMovingAbout()}, function() {this.shake()} ] // handle toggling behaviours like this?
	// 		5: [ function() {this.moveAbout()}, function() {this.poop()} ]
	// 	},
	// 	'poop': {
	// 		0: [ function() {this.diarreah} ] // turn off after a specified time?
	// 	}
	// }

B.prototype.time = function() { // superclass
	this.time = setInterval(this.check.bind(this), this.timeStep) //http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running	
};

B.prototype.check = function() {
		// entities = this.world.sense(entities); // args = world.sense(entities, objects, ideas, sound);
		// this.process(entities) //<< make callback of world.sense() above
	this.moveAbout() // Remove into react later!!!!!!!!!!!!!!!!!!!
};

B.prototype.process = function(entities) { // superclass
	// 	for (var entity of entities) {
	// 		var proximity = LocationHelper.proximity({
	// 											subject: {vector: this.vector, 		diameter: this.diameter},
	// 											object:  {vector: entity.vector, 	diameter: entity.diameter}
	// 										});
	// 		this.react(this.class, proximity) //<< make callback of LocationHelper.proximity() above
	// 	}
}

// B.prototype.react = function(class, proximity) {
// 	for (var prox = proximity; prox <= 100; prox++) {
// 		if (this.behaviours.class.prox) {
// 			for (var funct of functions) {
// 				funct()
// 			}
// 		}
// 	};
// }

B.prototype.moveAbout = function() {
	this.path = this.newPath();
	// console.log(this.path);
	var newTopLeftCoords = locationHelper.coordsToTopLeftCoords({
		coords: this.path.currentCoords,
		entitySize: {
			x: this.diameter,
			y: this.diameter
		}
	});

	locationHelper.moveTo({
		$element: this.$element,
		newTopLeftCoords: newTopLeftCoords,
	});
};

B.prototype.newPath = function() {
	var bearingVariation = Math.PI / 6;
	var distanceToMove = this.path.vector.magnitude()
	var newVector = locationHelper.nextVectorOnSmoothPath({
		bearingVariation: bearingVariation,
		magnitude: distanceToMove,
		currentVector: this.path.vector
	})
	var newCoords = locationHelper.newCoordsFromNewVector({ // Vector points backwards in time
		currentCoords: this.path.currentCoords,
		vector: newVector
	})
	return {
		currentCoords: newCoords,
		vector: newVector
	};
}


