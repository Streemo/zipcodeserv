Meteor.methods({
	'getSeed': function(userData){
		if (!Match.test(userData, Patterns.UserData)){
			throw new Meteor.Error('malformed-input')
		}
		var BRAIN = Meteor.settings.BRAIN;
		var input = [
			userData.sqFt > BRAIN.BIGHOME ? 1 : 0,
			userData.age < BRAIN.AGE ? 1 : 0,
			userData.sellPrice > BRAIN.MANSION ? 1 : 0,
			userData.own === "yes" ? 1 : 0,
		]
		return {success:true,input:input, mls: userData.mls}
	},
	insertListings: function(request){
		if (request.thought !== Meteor.settings.BRAIN.THOUGHT){
			return {success:false, reason:'unauthorized'};
		}
		var totals = {agents:{},offices:{},number:0};
		request.list.forEach(function(listing){
			try {
				Listings.insert(listing);
				totals.number++
				totals.agents[listing.agent] = true
				totals.offices[listing.office] = true
			} catch(error){
			}
		})
		return totals;
	}
})







