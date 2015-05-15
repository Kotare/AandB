function LocationHelper() {

}

LocationHelper.prototype.proximity = function(args) {
	var proximity;
	xDist = this.getDist(args, 'x')
	yDist = this.getDist(args, 'y')
	if (xDist < 0 && yDist < 0) {
		proximity = 0; // COLLISION!!
	} else if (xDist > 0 && ydist > 0) {
		proximity = Math.sqrt(xDist*xDist + yDist*yDist);
	} else if (xDist > 0 && yDist < 0) {
		proximity = xDist;
	} else if (yDist > 0 && xDist < 0) {
		proximity = yDist;
	}
	return proximity;
}

LocationHelper.prototype.getDist = function(args, axis) {
	return Math.abs(args.subject.coords.axis - args.object.coords.axis) -
									(args.subject.size.axis + args.object.size.axis) / 2;
}

LocationHelper.prototype.nextCoordsForSmoothRandomMove = function(args) {
	var newCoords;
	if (args.coords.prev === undefined) {
		newCoords = locationBasedNextCoords(args)
	} else {
		newCoords = vectorBasedNextCoords(args)
	}
	return newCoords
}

LocationHelper.prototype.locationBasedNextCoords = function(args) {
	var xNew = args.currentCoords.xNow + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
	var yNew = args.currentCoords.yNow + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
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