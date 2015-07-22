var React = require('react')

var B = require('./b')

module.exports = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		var numEntities = 2
		var entities = []
		var timeStep = {
			max: 300,
			min: 200
		};
		for (var i = 1; i <= numEntities; i++) {
			var timeStep = Math.random() * (timeStep.max - timeStep.min) + timeStep.min
			entities.push(
				<B timeStep={timeStep} id={i}/>
			)
		}

		return (
			<div id='world'>
				{entities}
			</div>
		)
	}
})



// World.prototype.sense = function(id) {
// 	return $.grep(this.entities, function(e) {
// 		return e.id != id;
// 	});
// }