var app = angular.module('app', ['ngMaterial']);

app
	.controller('MainController', function($scope){
		$scope.device_info = {
			name: 'Asset Device 001',
			serialNumber: '87932013SF11',
			lastHeartbeat: '2016-08-08 06:06:06 EST'
		}
	})
	.controller('listController', function($scope){
		$scope.reservations = [
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
	})
	.controller('filterController', function DemoCtrl($mdDialog) {
		this.reserverd = true;
		this.available = true;

		this.openMenu = function($mdOpenMenu, ev) {
		  	originatorEv = ev;
		  	$mdOpenMenu(ev);
		};
  	});