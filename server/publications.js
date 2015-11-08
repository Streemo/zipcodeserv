Meteor.publish('mls', function(){
	return Mls.find();
})