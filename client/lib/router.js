FlowRouter.route('/', {
	action: function(){
		BlazeLayout.render('layout',{main: 'main', nav:'nav'})
	}
})

FlowRouter.triggers.enter([fade])
FlowRouter.triggers.exit([fade])