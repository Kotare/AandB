function LocationHelper() {

}

LocationHelper.prototype.proximity = function(args) {
	var xDist = Math.abs(args.subject.coords.x - args.object.coords.x)
	var yDist = Math.abs(args.subject.coords.y - args.object.coords.y)
	var centreDistance = Math.sqrt(xDist*xDist + yDist*yDist);
	return centreDistance - (args.subject.diameter + args.object.diameter) / 2;
}

LocationHelper.prototype.coordsToTopLeftCoords = function(args) {
	var xCoord = args.coords.x - args.entitySize.x/2
	var yCoord = args.coords.y - args.entitySize.y/2
	return {x: xCoord, y: yCoord}
}

LocationHelper.prototype.animateTo = function(args) {
	args.$element.css({
		top: args.newTopLeftCoords.y, left: args.newTopLeftCoords.x
	})
}

// LocationHelper.prototype.nextVectorForSmoothRandomMove = function(args) {
// 	var newVector;
// 	if (args.vector.prev === undefined) {
// 		newVector = this.locationBasedNextVector(args)
// 	} else {
// 		newVector = this.vectorBasedNextVector(args)
// 	}
// 	return newVector
// }

// LocationHelper.prototype.locationBasedNextVector = function(args) {
// 	var xNew = args.vector.now.x + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
// 	var yNew = args.vector.now.y + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
// 	return {x: xNew, y: yNew};
// }

// LocationHelper.prototype.vectorBasedNextVector = function(args) {
// 	var currentBearing = Math.atan((args.vector.prev.x - args.vector.now.x)/
// 													 	(args.vector.prev.y - args.vector.now.y));
// 	var newBearing = currentBearing + Math.random() * args.bearingMaxVariation;
// 	var xNew = args.percentScreenMove * Math.sin(newBearing);
// 	var yNew = args.percentScreenMove * Math.cos(newBearing);
// 	return {x: xNew, y: yNew};
// }