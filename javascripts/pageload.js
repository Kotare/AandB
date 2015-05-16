$(document).ready(function() {
	var world = new World();
	var timeStep = 500;
	var locationHelper = new LocationHelper();
	world.renderEntities();

	var time = setInterval(function() {
		world.propagateTime(timeStep);

		//? world.addEntities
	}, timeStep);
});