import angular from 'angular';

import templateUrl from './404.html';

const module = angular
    .module('AngularJSStarter.pageNotFound', [])
    .component('pageNotFound', {
        templateUrl
    });

export default module.name;