var React = require('react')
var Victor = require('victor')
var LocationHelper = require('./../javascripts/locationHelper')

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentCoords: {
				x: 100,
				y: 100
			},
			vector: new Victor(0, - (this.props.pathStep)) //backwards-pointing vector, randomise later
		};
	},
	componentDidMount: function() { //born
		setInterval(this.makeSmoothMovement, this.props.timeStep)
	},
	makeSmoothMovement: function() {
		this.calculateNewPathStep()
		// this.emit(this.state.coords, this.state.vector.verticalAngleDeg())
	},
	calculateNewPathStep: function() { // test with jasmine spies (~ mocks/doubles) on Math.random()!
		this.state.vector = this.calculateNewVector();
		this.state.currentCoords = this.calculateCoords(this.state.vector);
		// this.viewModel.updatePosition(this.state.coords);
	},
	calculateNewVector: function() { // test with jasmine spies (~ mocks/doubles) on Math.random()!
			// var distanceToMove = this.state.vector.magnitude();
		var newBearingDegrees = this.state.vector.verticalAngleDeg() +
			((Math.random() * this.maxTotalBearingVariationDegrees) -
				(this.maxTotalBearingVariationDegrees / 2));
		var vectorXNew = this.pathStep * Math.sin(LocationHelper.toRadians(newBearingDegrees));
		var vectorYNew = this.pathStep * Math.cos(LocationHelper.toRadians(newBearingDegrees));
		return new Victor(vectorXNew, vectorYNew);
	},
	calculateCoords: function() {
		// vector coordinate system points up and right,
		// dom coordinate system points down and right
		var xNew = this.state.currentCoords.x - this.state.vector.x;
		var yNew = this.state.currentCoords.y + this.state.vector.y;
		return {
			x: xNew,
			y: yNew
		}
	},
	render: function() {
		var size = this.props.size //px
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