$(document).ready(function(){
	var world = new World();
	world.renderEntities();

	var time = setInterval(function(){
		world.updateSurroundsForAllEntities();
		world.updateEntities();

		//? world.addEntities
	}, 500);
});