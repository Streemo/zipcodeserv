Template.layout.onCreated(function(){
	var self = this;
	self.mlsReady = new ReactiveVar(false);
	Meteor.subscribe('mls', function(){
		self.mlsReady.set(true);
	})
})

Template.layout.helpers({
	mlsReady: function(){
		return Template.instance().mlsReady.get();
	}
})