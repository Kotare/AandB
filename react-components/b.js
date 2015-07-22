var React = require('react')
var Victor = require('victor')

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentCoords: {
				x: 100,
				y: 100
			},
			vector: new Victor(0, - (this.pathStep)) //backwards-pointing vector, randomise later
		};
	},
	componentDidMount: function() { //born
		setInterval(this.moveAbout, this.props.timeStep)
	},
	moveAbout: function() {
		
	},
	render: function() {
		var size = 40 //px
		var bStyle = {
			position: 'absolute',
			background: 'red',
			borderRadius: '100%',
			width: size + 'px',
			height: size + 'px',
			top: this.state.currentCoords.y - size/2,
			left: this.state.currentCoords.x - size/2,
		} 
		return (
			<div style={bStyle} className='b' id={this.props.id}></div>
		)
	}
})