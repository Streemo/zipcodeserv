Patterns = {};

Patterns.Coordinates = Match.Where(function(value){
	check(value,{lat: Number, lng: Number})
	return true;
})

Patterns.String = Match.Where(function(value){
	check(value,String);
	return !! value.trim();
})

Patterns.Birthday = Match.Where(function(value){
	check(value,String);
	return value.search(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) > -1
})


Patterns.Positive = Match.Where(function(value){
	var num = Number(value);
	check(num, Match.Integer);
	return num > 0;
})

Patterns.UserData = Match.Where(function(value){
	check(value, {
		mls: Patterns.String,
		age: Patterns.Positive,
		sellPrice: Patterns.Positive,
		sqFt: Patterns.Positive,
		own: Match.OneOf('yes','no')
	})
	return true;
})