var appRoute=angular.module("appRoute",['ngRoute']);
appRoute.config(function($routeProvider,$locationProvider){
	console.log("route")
	$routeProvider
	  .when('/',{
	  	templateUrl:'app/views/pages/home.html',
	  })
	  .when('/about',{
	  	templateUrl:'app/views/pages/about.html'
	  })
	  .when('/register',{
	  	templateUrl:'app/views/pages/users/register.html',
	  	controller:"regCtrl",
	  	controllerAs:"register"
	  })
	  .when("/login",{
	  	templateUrl:'app/views/pages/users/login.html'
	  })
	  .when('/logout',{
	  	templateUrl:'app/views/pages/users/logout.html'
	  })
	  .when('/profile',{
	  	templateUrl:'app/views/pages/users/profile.html'
	  })
	  .otherwise({
        redirectTo:'/'
	  })
	  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false
	  });
})