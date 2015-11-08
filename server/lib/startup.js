Meteor.startup(function(){
	GeoMath.setUnits('US');
	GeoMath.google = new GeoCoder();
	places = {
		"AZ": "armls"
	}
})

