var React = require('react')

var B = require('./b')

module.exports = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		var numEntities = 100
		var entities = []
		var timeStepRange = {
			max: 1000/100,
			min: 3
		};
		var size = 40
		var pathStep = size / 40
		var maxTotalBearingVariationDegrees = 40
		for (var i = 1; i <= numEntities; i++) {
			var timeStep = Math.random() * (timeStepRange.max - timeStepRange.min) + timeStepRange.min
			entities.push(
				<B 
					timeStep={timeStep} 
					id={i} 
					size={size} 
					pathStep={pathStep}
					maxTotalBearingVariationDegrees={maxTotalBearingVariationDegrees} />
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