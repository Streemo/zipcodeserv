Template.nav.events({
	'click #refresh': function(event){
		event.preventDefault();
		Meteor._reload.reload();
	}
})