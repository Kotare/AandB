var locationHelper = new LocationHelper(); // "required"

smoothMove.call(B.prototype); // () adds smoothMove as a mixin to B

function B(args) {
	this.world = args.world
	this.id = args.id; // increment on creation?
	this.klass = 'b';
	this.timeStep = args.timeStep;
	this.$element = $('<div></div>');
	this.$element.attr('id', this.id);
	this.$element.addClass(this.klass);
	this.diameter = 30; // superclass
	this.pathStep = 0.2;
	this.bearingVariation = Math.PI / 6;
	this.path = {
		currentCoords: {
			x: 50,
			y: 50
		},
		vector: new Victor(0, -(this.pathStep)) //backwards-pointing vector, randomise later
	};
	this.$element.css({
		width: this.diameter,
		height: this.diameter,
		top: this.path.currentCoords.y + '%',
		left: this.path.currentCoords.x + '%'
	});
	this.reactions = {
		'default': this.moveAbout.bind(this),
		// a: this.reactionsToA,
		// 'b': this.moveAbout.bind(this)
		'b': this.reactionsToB.bind(this)
	}
	this.born();
}

B.prototype.reactionsToB = function(proximity) {
	console.log(proximity)
	if (proximity < 5) {
		this.moveAbout() // Remove into react later!!!!!!!!!!!!!!!!!!!
	}
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
	var entities = this.world.sense(this, function(entities) {
		this.process(entities);
	}); // args = world.sense(entities, objects, ideas, sound);
};

B.prototype.process = function(entities) { // superclass
	for (var entity of entities) {
		var proximity = locationHelper.proximity({
											subject: { coords: this.path.currentCoords, 		diameter: this.diameter },
											object:  { coords: entity.path.currentCoords, 	diameter: entity.diameter }
										});
		this.react(entity.klass, proximity) //<< make callback of LocationHelper.proximity() above
		// this.react('default', proximity) //<< make callback of LocationHelper.proximity() above
	}
};

B.prototype.react = function(klass, proximity) {
	this.reactions[klass](proximity)
}




	// for (var prox = proximity; prox <= 100; prox++) {
	// 	if (this.behaviours.class.prox) {
	// 		for (var funct of functions) {
	// 			funct()
	// 		}
	// 	}
	// };
