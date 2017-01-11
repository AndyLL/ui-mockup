var app = angular.module('app', ['ngMaterial'])

app.controller('MainController', function($scope){
		$scope.device_info = {
			name: '001',
			serialNumber: '87932013SF11',
			lastHeartbeat: '2016-08-08 06:06:06 EST'
		}
	})
	.controller('ListController', function($mdDialog){
		var _self = this
		
		_filter = {}
		_self.items = [
			{
				position: 10,
				assetID: '',
				lockerSize: '11 * 12',
				recharger: 'Scanner charger',
				tag: 'true',
				status: 'Available',
				link: ''
			},
			{
				position: 11,
				assetID: '',
				lockerSize: '11 * 12',
				recharger: 'Scanner charger',
				tag: 'true',
				status: 'Available',
				link: ''
			},
			{
				position: 12,
				assetID: '',
				lockerSize: '11 * 12',
				recharger: '',
				tag: '',
				status: 'Available',
				link: ''
			},
			{
				position: 20,
				assetID: '9999',
				lockerSize: '11 * 12',
				recharger: '',
				tag: '',
				status: 'Reserved',
				link: ''
			},
			{
				position: 21,
				assetID: '6688',
				lockerSize: '11 * 12',
				recharger: '',
				tag: '',
				status: 'Reserved',
				link: ''
			}
		]

	  	// get all possible filter options 
	  	_self.getStatus = function(){
	  		return (_self.items || [])
				.map(function (items) { 
			  		return items.status 
			  	})
			  	.filter(function (status, idx, arr) { 
			  		return arr.indexOf(status) === idx 
			  	})
	  	}

		_self.filterByStatus = function(items){
			try {
				return _self.filter[items.status] || noFilter(_self.filter)
			}
			catch(e){
				console.log(e)
			} 
	  	}
	  	
	  	// if no filter option is chosen
	  	function noFilter(filterObj) {
			return Object
				.keys(filterObj)
				.every(function (key) { 
		  			return !filterObj[key]
		  		})
	  	}

	  	// toggle dropdown menu
	  	_self.openMenu = function($mdOpenMenu, ev) {
		  	originatorEv = ev;
		  	$mdOpenMenu(ev);
		};
	})





