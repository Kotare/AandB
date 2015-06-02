var locationHelper = new LocationHelper(); // "required" ??

// calculate next position
// tell view model to update to there.

function SmoothMovementExtension() {

	this.smoothMovement = function() {
		this.calculateNewPathStep()
		// this.emit(this.path.coords, this.path.vector.verticalAngleDeg())
	}

	this.calculateNewPathStep = function() { // test with jasmine spies (~ mocks/doubles) on Math.random()!
		this.path.vector = this.calculateNewVector();
		this.path.coords = this.calculateCoords(newVector);
		this.viewModel.updatePosition(this.path.coords);
	}

	this.calculateNewVector = function() { // test with jasmine spies (~ mocks/doubles) on Math.random()!
			// var distanceToMove = this.path.vector.magnitude();
		var newBearingDegrees = args.currentVector.verticalAngleDeg() +
			((Math.random() * args.maxTotalBearingVariationDegrees) -
				(args.maxTotalBearingVariationDegrees / 2));
		var vectorXNew = args.magnitude * Math.sin(this.toRadians(newBearingDegrees));
		var vectorYNew = args.magnitude * Math.cos(this.toRadians(newBearingDegrees));
		return new Victor(vectorXNew, vectorYNew);
	}

	this.calculateCoords = function() {
		// vector coordinate system points up and right,
		// dom coordinate system points down and right
		var xNew = args.currentCoords.x - args.vector.x;
		var yNew = args.currentCoords.y + args.vector.y;
		return {
			x: xNew,
			y: yNew
		}
	}
}


		//rendering VM business - move out
		// var newTopLeftCoords = locationHelper.coordsToTopLeftCoords({
		// 	coords: this.path.currentCoords,
		// 	entitySize: {
		// 		x: this.diameter,
		// 		y: this.diameter
		// 	}
		// });

		// Call react VM in due course
		// locationHelper.moveTo({
		// 	$element: this.$element,
		// 	newTopLeftCoords: newTopLeftCoords,
		// });