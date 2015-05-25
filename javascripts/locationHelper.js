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


LocationHelper.prototype.moveTo = function(args) {
	args.$element.css({
		top: args.newTopLeftCoords.y + 'px',
		left: args.newTopLeftCoords.x + 'px'
	})
}

LocationHelper.prototype.nextVectorOnSmoothPath = function(args) { // test with jasmine spies (~ mocks/doubles) on Math.random()!
	var newBearing = args.currentVector.verticalAngle() +
		((Math.random() * args.bearingVariation) -
			(args.bearingVariation / 2));
	var vectorXNew = args.magnitude * Math.sin(newBearing);
	var vectorYNew = args.magnitude * Math.cos(newBearing);
	return new Victor(vectorXNew, vectorYNew);
}

LocationHelper.prototype.newCoordsFromNewVector = function(args) {
	// vector coordinate system points up and right,
	// dom coordinate system points down and right
	var xNew = args.currentCoords.x - args.vector.x;
	var yNew = args.currentCoords.y + args.vector.y;
	return { x: xNew, y: yNew }
}