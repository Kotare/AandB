'use strict';


var LocationHelper = {
	
	calculateDistanceBetween: function(args) {
		var xDist = Math.abs(args.subject.coords.x - args.object.coords.x)
		var yDist = Math.abs(args.subject.coords.y - args.object.coords.y)
		var centreDistance = Math.sqrt(xDist * xDist + yDist * yDist);
		return centreDistance - (args.subject.diameter + args.object.diameter) / 2;
	},

	toDegrees: function(angle) {
	  return angle * (180 / Math.PI);
	},

	toRadians: function(angle) {
	  return angle * (Math.PI / 180);
	}
}