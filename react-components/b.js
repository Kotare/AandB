var React = require('react')
var Victor = require('victor')

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentCoords: {
				x: 0,
				y: 0
			},
			vector: new Victor(0, - (this.pathStep)) //backwards-pointing vector, randomise later
		};
	},
	render: function() {
		var bStyle = {
			width: '40px',
			height: '40px',
		} 
		return (
			<div style={bStyle} className='b' id={this.props.id}></div>
		)
	}
})