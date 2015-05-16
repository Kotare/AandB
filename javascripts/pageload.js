locationHelper = new LocationHelper();

$(document).ready(function() {
	var world = new World();
	var timeStep = 10;
	world.renderEntities();

	var time = setInterval(function() {
		world.propagateTime(timeStep);

		//? world.addEntities
	}, timeStep);
});