var React = require('react')

var B = require('./b')

module.exports = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		var numEntities = 2
		var entities = []
		var timeStepRange = {
			max: 300,
			min: 200
		};
		var size = 40
		var pathStep = size / 10
		for (var i = 1; i <= numEntities; i++) {
			var timeStep = Math.random() * (timeStepRange.max - timeStepRange.min) + timeStepRange.min
			entities.push(
				<B timeStep={timeStep} id={i} size={size} pathStep={pathStep} />
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