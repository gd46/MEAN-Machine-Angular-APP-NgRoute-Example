angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

	.controller('mainController', function(){
		var vm = this;
		vm.bigMessage = 'A smoothed sea never made a skilled sailor';
	})

	.controller('homeController', function(){
		var vm = this;
		vm.message = 'This is the home page.';
	})

	.controller('aboutController', function(){
		var vm = this;
		vm.message = 'This is on the about page';
	})

	.controller('contactController', function(){
		var vm = this;
		vm.message = 'This is on the contact page';
	});
