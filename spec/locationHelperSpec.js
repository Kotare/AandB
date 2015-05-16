describe('LocationHelper()', function() {
	var locationHelper = new LocationHelper();
	describe('proximity()', function() {
		it('detects collision', function() {
			var args = {
											subject: {coords: {x: 30, y: 30}, 		size: {x: 30, y: 30}},
											object:  {coords: {x: 30, y: 30}, 	size: {x: 30, y: 30}}
										};
			expect(locationHelper.proximity(args)).toEqual(0);
		})
	})
})