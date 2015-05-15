function EntityHelper() {

}

EntityHelper.prototype.proximity = function(args) {
	var proximity;
	xDist = Math.abs(args.subject.coords.x - args.subject.coords.x) -
					(args.subject.size.x + args.subject.size.x) / 2;
	yDist = Math.abs(args.subject.coords.y - args.subject.coords.y) -
					(args.subject.size.y + args.subject.size.y) / 2;
	if (xDist < 0 && yDist < 0) {
		proximity = 0; // COLLISION!!
	} else if (xDist > 0 && ydist > 0) {
		proximity = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
	} else if (xDist < 0 && yDist > 0) {
		proximity = yDist;
	} else if (yDist < 0 && xDist > 0) {
		proximity = xDist;
	}
	return proximity;
}