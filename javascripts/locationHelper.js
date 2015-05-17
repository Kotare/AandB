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
		top: args.newTopLeftCoords.y + '%',
		left: args.newTopLeftCoords.x + '%'
	})
}

LocationHelper.prototype.nextVectorOnSmoothPath = function(args) {
	var newBearing = args.currentVector.verticalAngle() +
		((Math.random() * args.bearingVariation) -
			(args.bearingVariation / 2));
	var vectorXNew = args.distanceToMove * Math.sin(newBearing);
	var vectorYNew = args.distanceToMove * Math.cos(newBearing);
	return new Victor(vectorXNew, vectorYNew);
}

LocationHelper.prototype.newCoordsFromNewVector = function(args) {
	// vector coordinate system points up and right,
	// dom coordinate system points down and right
	var xNew = this.path.currentCoords.x - newVector.x;
	var yNew = this.path.currentCoords.y + newVector.y;
	return { x: xNew, y: yNew }
}