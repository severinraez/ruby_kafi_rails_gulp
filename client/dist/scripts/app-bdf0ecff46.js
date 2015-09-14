(function(){angular.module("postInnoweek",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ui.router"])}).call(this),function(){angular.module("postInnoweek").service("webDevTec",function(){var data,getTec;data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"haml",title:"HAML",url:"http://haml.info/",description:"Beautiful, DRY, well-indented, clear markup: templating haiku.",logo:"haml.png"}],getTec=function(){return data},this.getTec=getTec})}.call(this),function(){angular.module("postInnoweek").directive("acmeNavbar",function(){var NavbarController,directive;return NavbarController=function(moment){var vm;vm=this,vm.relativeDate=moment(vm.creationDate).fromNow()},directive={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:NavbarController,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("postInnoweek").directive("acmeMalarkey",function(){var MalarkeyController,directive,linkFunc;return MalarkeyController=function($log,githubContributor){var activate,getContributors,vm;vm=this,activate=function(){return getContributors().then(function(){$log.info("Activated Contributors View")})},getContributors=function(){return githubContributor.getContributors(10).then(function(data){return vm.contributors=data,vm.contributors})},vm.contributors=[],activate()},linkFunc=function(scope,el,attr,vm){var typist,watcher;watcher=void 0,typist=malarkey(el[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),el.addClass("acme-malarkey"),angular.forEach(scope.extraValues,function(value){typist.type(value).pause()["delete"]()}),watcher=scope.$watch("vm.contributors",function(){angular.forEach(vm.contributors,function(contributor){typist.type(contributor.login).pause()["delete"]()})}),scope.$on("$destroy",function(){watcher()})},directive={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:linkFunc,controller:MalarkeyController,controllerAs:"vm"}})}.call(this),function(){angular.module("postInnoweek").factory("githubContributor",["$log","$http",function($log,$http){var apiHost,getContributors,service;return apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular",getContributors=function(limit){var getContributorsComplete,getContributorsFailed;return getContributorsComplete=function(response){return response.data},getContributorsFailed=function(error){$log.error("XHR Failed for getContributors.\n"+angular.toJson(error.data,!0))},limit||(limit=30),$http.get(apiHost+"/contributors?per_page="+limit).then(getContributorsComplete)["catch"](getContributorsFailed)},service={apiHost:apiHost,getContributors:getContributors}}])}.call(this),function(){angular.module("postInnoweek").controller("MainController",["$timeout","webDevTec","toastr",function($timeout,webDevTec,toastr){var activate,getWebDevTec,showToastr,vm;vm=this,activate=function(){getWebDevTec(),$timeout(function(){vm.classAnimation="rubberBand"},4e3)},showToastr=function(){toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),vm.classAnimation=""},getWebDevTec=function(){vm.awesomeThings=webDevTec.getTec(),angular.forEach(vm.awesomeThings,function(awesomeThing){awesomeThing.rank=Math.random()})},vm.awesomeThings=[],vm.classAnimation="",vm.creationDate=1441268865585,vm.showToastr=showToastr,activate()}])}.call(this),function(){angular.module("postInnoweek").run(["$log",function($log){return $log.debug("runBlock end")}])}.call(this),function(){angular.module("postInnoweek").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){return $stateProvider.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),$urlRouterProvider.otherwise("/")}])}.call(this),function(){angular.module("postInnoweek").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}.call(this),function(){angular.module("postInnoweek").config(["$logProvider","toastr",function($logProvider,toastr){return $logProvider.debugEnabled(!0),toastr.options.timeOut=3e3,toastr.options.positionClass="toast-top-right",toastr.options.preventDuplicates=!0,toastr.options.progressBar=!0}])}.call(this),angular.module("postInnoweek").run(["$templateCache",function($templateCache){$templateCache.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),$templateCache.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);