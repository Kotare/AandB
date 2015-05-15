function EntityHelper() {

}

EntityHelper.prototype.proximity = function(args) {
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

EntityHelper.prototype.getDist = function(args, axis) {
	return Math.abs(args.subject.coords.axis - args.object.coords.axis) -
									(args.subject.size.axis + args.object.size.axis) / 2;
}