Template.office.helpers({
	score: function(){
		var score = Math.log(1/(1-_.values(this.cache)[0]));
		if (score < 1000){
			return Math.round(score);
		} else if (score < 1000000) {
			return ((score - score % 100)/1000).toString() + "k"
		} else if (score < 1000000000){
			return ((score - score % 100000)/1000000).toString()+'m'
		} else {
			return ((score - score % 100000000)/1000000000).toString()+'b'
		}
	}
})