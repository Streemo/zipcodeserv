Template.message.helpers({
	message: function(){
		return Messages.findOne({location: this.location})
	}
})

Template.message.onCreated(function(){
	var self = this;
	var init = true;
	self.autorun(function(){
		var loc = self.data.location
		var message = Messages.findOne({location: loc})
		if (message && !init){
			var button = $('.btn-'+loc);
			button.fadeOut(400, function(){
				$('.message').fadeIn(600, function(){
					Meteor.setTimeout(function(){
						$('.message').fadeOut(1000, function(){
							Messages.remove({location: loc})
							button.button('reset');
							button.fadeIn(400);
						})
					},1500)
				})
			})
		}
	})
	init = false;
})	