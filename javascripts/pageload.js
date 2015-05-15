$(document).ready(function() {
	var world = new World();
	world.renderEntities();

	var time = setInterval(function() {
		world.propagateTime;

		//? world.addEntities
	}, 500);
});