Tips = {};
Tips.get = function(key){
	return this[key] || 'oops, try again'
}
Tips['api-fail'] = 'there was a problem getting data'
Tips['malformed-input'] = 'must enter positive numbers'