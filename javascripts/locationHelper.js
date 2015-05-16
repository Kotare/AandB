function LocationHelper() {

}

LocationHelper.prototype.proximity = function(args) {
	var xDist = Math.abs(args.subject.coords.x - args.object.coords.x)
	var yDist = Math.abs(args.subject.coords.y - args.object.coords.y)
	var centreDistance = Math.sqrt(xDist*xDist + yDist*yDist);
	return centreDistance - (args.subject.diameter + args.object.diameter) / 2;
}

LocationHelper.prototype.nextCoordsForSmoothRandomMove = function(args) {
	var newCoords;
	if (args.coords.prev === undefined) {
		newCoords = this.locationBasedNextCoords(args)
	} else {
		newCoords = this.vectorBasedNextCoords(args)
	}
	return newCoords
}

LocationHelper.prototype.locationBasedNextCoords = function(args) {
	var xNew = args.coords.now.x + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
	var yNew = args.coords.now.y + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
	return {x: xNew, y: yNew};
}

LocationHelper.prototype.vectorBasedNextCoords = function(args) {
	var currentBearing = Math.atan((args.coords.prev.x - args.coords.now.x)/
													 	(args.coords.prev.y - args.coords.now.y));
	var newBearing = currentBearing + Math.random() * args.bearingMaxVariation;
	var xNew = args.percentScreenMove * Math.sin(newBearing);
	var yNew = args.percentScreenMove * Math.cos(newBearing);
	return {x: xNew, y: yNew};
}