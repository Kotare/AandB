var locationHelper = new LocationHelper(); // "required"

function smoothMove() {

	this.moveAbout = function() {
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

	this.newPath = function() {
		// var maxTotalBearingVariationDegrees = Math.PI / 6;
		var distanceToMove = this.path.vector.magnitude();
		var newVector = locationHelper.calculateNewPathStep({
			maxTotalBearingVariationDegrees: this.maxTotalBearingVariationDegrees,
			magnitude: distanceToMove,
			currentVector: this.path.vector
		});
		var newCoords = locationHelper.newCoordsFromNewVector({ // Vector points backwards in time
			currentCoords: this.path.currentCoords,
			vector: newVector
		});
		return {
			currentCoords: newCoords,
			vector: newVector
		};
	};
}