(function () {
  'use strict';

  angular.module('angular-peity-charts')
    .directive( 'inlinePieChart', inlinePieChart);

    inlinePieChart.$inject = ['BuildChart'];

    function inlinePieChart(BuildChart) {
      return new BuildChart("pie");
    }

})();
