define(function(require) {
	var angular = require('angular');
	var elgg = require('elgg');
	var ngSanitize = require('./ngSanitize');
	var ngResource = require('./ngResource');
	var moment = require('./moment');
	var FactoryMap = require('elgg/structs/FactoryMap');
	var Menu = require('elgg/menus/Menu');
	
	return angular.module('elgg', [
		ngSanitize.name,
		ngResource.name,
		moment.name,
	])
		.directive('elggComments', require('../directives/elggComments/elggComments'))
		.directive('elggFocusModel', require('../directives/elggFocusModel/elggFocusModel'))
		.directive('elggFriendlyTime', require('../directives/elggFriendlyTime/elggFriendlyTime'))
		.directive('elggMenu', require('../directives/elggMenu/elggMenu'))
		.directive('elggResource', require('../directives/elggResource/elggResource'))
		.directive('elggResponses', require('../directives/elggResponses/elggResponses'))
		.directive('elggRiver', require('../directives/elggRiver/elggRiver'))
		.directive('elggRiverComment', require('../directives/elggRiverComment/elggRiverComment'))
		.directive('elggRiverItem', require('../directives/elggRiverItem/elggRiverItem'))
		.directive('elggUsers', require('../directives/elggUsers/elggUsers'))
		.directive('whenScrolled', require('../directives/whenScrolled/whenScrolled'))
		.service('elggResourceFactory', require('elgg/http/ResourceFactory'))
		.value('elgg', elgg)
		.value('elggMenus', new FactoryMap(function() {
			return new Menu();
		}))
		.value('elggSession', elgg.session)
		.value('elggUser', elgg.session.user)
});
