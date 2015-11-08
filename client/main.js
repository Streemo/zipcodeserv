Template.main.events({
	'click #getSeed': function(event,self){
		event.preventDefault();
		self.$(event.target).button('loading');
		var userData = {
			mls:Mls.findOne({state: $('#mlsSelect').val()}).mls,
			age: self.$('#enterYearBuilt').val(),
			sellPrice: self.$('#enterSellingPrice').val(),
			sqFt: self.$('#enterSqFt').val(),
			own: self.$('#ownSelect').val()
		}
		Meteor.call('getSeed', userData, function(error, result){
			if (error || !result.success){
				Messages.insert({color: 'red', text:Tips.get(error.error), location: 'findaddy'})
			} else {
				Brain.subscribe('agents',result.input, result.mls, function(){
					self.agentsReady.set(true);
				});
				Brain.subscribe('offices',result.input, result.mls, function(){
					self.officesReady.set(true);
				});
				self.qString.set('cache.'+result.input.join(''));
				$('body').fadeOut(600, function(){
					self.searched.set(true);
					$('body').fadeIn(400);
				})
			}
		})
	}
})


Template.main.onCreated(function(){
	var self = this;
	self.searched = new ReactiveVar(false);
	self.agentsReady = new ReactiveVar(false);
	self.officesReady = new ReactiveVar(false);
	self.qString = new ReactiveVar();
})

Template.main.helpers({
	officesReady: function(){
		return Template.instance().officesReady.get();
	},
	agentsReady: function(){
		return Template.instance().agentsReady.get();	
	},
	agents: function(){
		var qString = Template.instance().qString.get()
		var sort= {};
		sort[qString] = -1
		return Agents.find({},{sort:sort})
	},
	offices: function(){
		var qString = Template.instance().qString.get()
		var sort= {};
		sort[qString] = -1
		return Offices.find({},{sort: sort})
	},
	searched: function(){
		return Template.instance().searched.get();
	}
})