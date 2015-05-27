describe('LocationHelper()', function() {
	var locationHelper = new LocationHelper();
	describe('proximity()', function() {
		it('detects collision', function() {
			var args = {
				subject: {
					coords: {
						x: 30,
						y: 30
					},
					diameter: 30
				},
				object: {
					coords: {
						x: 30,
						y: 30
					},
					diameter: 30
				}
			};
			expect(locationHelper.proximity(args) <= 0).toBeTruthy();
		});

		it('calculates correct proximity', function() {
			// coach
			var args = {
				subject: {
					coords: {
						x: 10,
						y: 30
					},
					diameter: 6
				},
				object: {
					coords: {
						x: 30,
						y: 10
					},
					diameter: 10
				}
			};
			var actualProximity = function() {
				var xDist = Math.abs(args.subject.coords.x - args.object.coords.x)
				var yDist = Math.abs(args.subject.coords.y - args.object.coords.y)
				var centreDistance = Math.sqrt(xDist * xDist + yDist * yDist);
				return centreDistance - (args.subject.diameter + args.object.diameter) / 2;
			}
			expect(locationHelper.proximity(args)).toEqual(actualProximity());
		});
	});

	describe('nextCoordsForSmoothRandomMove()', function() {
		it('calcuates next coords without previous coords', function() {
			var args = {
				coords: {
					now: {
						x: 30,
						y: 30
					},
					prev: undefined
				},
				percentScreenMove: 3,
				bearingMaxVariation: Math.PI / 2
			};
			expect(locationHelper.nextCoordsForSmoothRandomMove(args).x).toEqual(jasmine.any(Number));
		});

		it('calcuates next coords as a vector function', function() {
			var args = {
				coords: {
					now: {
						x: 30,
						y: 30
					},
					prev: undefined
				},
				percentScreenMove: 3,
				bearingMaxVariation: Math.PI / 2
			};
			expect(locationHelper.nextCoordsForSmoothRandomMove(args).x).toEqual(jasmine.any(Number));
		})
	})
})