// var locationHelper = new LocationHelper(); // "required" ??

// calculate next position
// tell view model to update to there.

module.exports = {
	makeSmoothMovement: function() {
		this.calculateNewPathStep()
		// this.emit(this.path.coords, this.path.vector.verticalAngleDeg())
	},
	calculateNewPathStep: function() { // test with jasmine spies (~ mocks/doubles) on Math.random()!
		this.path.vector = this.calculateNewVector();
		this.path.currentCoords = this.calculateCoords(this.path.vector);
		// this.viewModel.updatePosition(this.path.coords);
	},
	calculateNewVector: function() { // test with jasmine spies (~ mocks/doubles) on Math.random()!
			// var distanceToMove = this.path.vector.magnitude();
		var newBearingDegrees = this.path.vector.verticalAngleDeg() +
			((Math.random() * this.maxTotalBearingVariationDegrees) -
				(this.maxTotalBearingVariationDegrees / 2));
		var vectorXNew = this.pathStep * Math.sin(LocationHelper.toRadians(newBearingDegrees));
		var vectorYNew = this.pathStep * Math.cos(LocationHelper.toRadians(newBearingDegrees));
		return new Victor(vectorXNew, vectorYNew);
	},
	calculateCoords: function() {
		// vector coordinate system points up and right,
		// dom coordinate system points down and right
		var xNew = this.path.currentCoords.x - this.path.vector.x;
		var yNew = this.path.currentCoords.y + this.path.vector.y;
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