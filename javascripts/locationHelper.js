'use strict';

function LocationHelper() {

}

LocationHelper.prototype.proximity = function(args) {
	var xDist = Math.abs(args.subject.coords.x - args.object.coords.x)
	var yDist = Math.abs(args.subject.coords.y - args.object.coords.y)
	var centreDistance = Math.sqrt(xDist * xDist + yDist * yDist);
	return centreDistance - (args.subject.diameter + args.object.diameter) / 2;
}

LocationHelper.prototype.coordsToTopLeftCoords = function(args) {
	var xCoord = args.coords.x - args.entitySize.x / 2
	var yCoord = args.coords.y - args.entitySize.y / 2
	return {
		x: xCoord,
		y: yCoord
	}
}

// MOVE TO VIEW MODEL
// LocationHelper.prototype.moveTo = function(args) {
// 	args.$element.css({
// 		top: args.newTopLeftCoords.y + 'px',
// 		left: args.newTopLeftCoords.x + 'px'
// 	})
// }

LocationHelper.prototype.calculateNewPathStep = function(args) { // test with jasmine spies (~ mocks/doubles) on Math.random()!
		console.log(args.maxTotalBearingVariationDegrees);
	var newVector = this.calculateNewVector({
		currentVector: args.currentPath.vector,
		maxTotalBearingVariationDegrees: args.maxTotalBearingVariationDegrees,
		magnitude: args.magnitude
	})
	var newCoords = this.calculateCoordsFromNewVector({
		currentCoords: args.currentPath.coords,
		vector: newVector
	})
	return {
		coords: newCoords,
		vector: newVector
	}
}

LocationHelper.prototype.calculateNewVector = function(args) { // test with jasmine spies (~ mocks/doubles) on Math.random()!
	var newBearingDegrees = args.currentVector.verticalAngleDeg() +
		((Math.random() * args.maxTotalBearingVariationDegrees) -
			(args.maxTotalBearingVariationDegrees / 2));
	var vectorXNew = args.magnitude * Math.sin(this.toRadians(newBearingDegrees));
	var vectorYNew = args.magnitude * Math.cos(this.toRadians(newBearingDegrees));
	return new Victor(vectorXNew, vectorYNew);
}

LocationHelper.prototype.calculateCoordsFromNewVector = function(args) {
	// vector coordinate system points up and right,
	// dom coordinate system points down and right
	var xNew = args.currentCoords.x - args.vector.x;
	var yNew = args.currentCoords.y + args.vector.y;
	return {
		x: xNew,
		y: yNew
	}
}

LocationHelper.prototype.toDegrees = function(angle) {
  return angle * (180 / Math.PI);
}

LocationHelper.prototype.toRadians = function(angle) {
  return angle * (Math.PI / 180);
}