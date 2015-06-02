'use strict';
var locationHelper = new LocationHelper(); // "required"

SmoothMovementExtension.call(B.prototype); // () adds smoothMove as a mixin to B

function B(args) {
	// Properties set externally
	this.world = args.world
	this.id = args.id; // increment on creation?
	this.timeStep = args.timeStep;

	// B class properties
	this.klass = 'b';
	this.diameterHeightPercent = 0.02; // superclass
	this.pathStepPercent = 0.001;
	this.maxTotalBearingVariationDegrees = 90; // MAX
	this.reactions = {
		'default': this.moveAbout.bind(this),
		// a: this.reactionsToA,
		'b': this.reactionsToB.bind(this)
	}

	// Launch initial actions
	this.calculateInitialProperties()
	this.born();
	// this.emmit(new, klass='b', id=this.id)
	// // // // this.viewModel = new React.Component B // creates view-model (with sprite)
}

B.prototype.calculateInitialProperties = function() {
	this.diameter = this.diameterHeightPercent * this.world.size;
	this.pathStep = this.pathStepPercent * this.world.size;
	this.path = {
		currentCoords: {
			x: this.world.size * 0.5,
			y: this.world.size * 0.5
		},
		vector: new Victor(0, - (this.pathStep)) //backwards-pointing vector, randomise later
	};
}

B.prototype.reactionsToB = function(proximity) {
		// console.log(proximity)
	if (proximity < 10) {
		this.smoothMovement() // Remove into react later!!!!!!!!!!!!!!!!!!!
	} // elseif (proximity > 10) {
}

B.prototype.reactionsToWall = function(proximity) {
		// console.log(proximity)
}

B.prototype.reactionsToClick = function(proximity) {
		// console.log(proximity)
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

B.prototype.born = function() { // superclass
	this.time = setInterval(this.check.bind(this), this.timeStep); //http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running	
};

B.prototype.check = function() {
	var entities = this.world.sense(this.id); // args = world.sense(entities, objects, ideas, sound);
	// console.log(entities)
	// entities.pop(this)
	// console.log(entities)
	this.react(entities);
};

B.prototype.react = function(entities) { // superclass
	for (var entity of entities) {
		var proximity = locationHelper.calculateDistanceBetween({
											subject: { coords: this.path.currentCoords, 		diameter: this.diameter },
											object:  { coords: entity.path.currentCoords, 	diameter: entity.diameter }
										});
		this.reactions[entity.klass](proximity) //<< make callback of LocationHelper.proximity() above
	}
};

	// for (var prox = proximity; prox <= 100; prox++) {
	// 	if (this.behaviours.class.prox) {
	// 		for (var funct of functions) {
	// 			funct()
	// 		}
	// 	}
	// };
