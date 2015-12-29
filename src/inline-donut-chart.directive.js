(function () {
  'use strict';

  angular.module('angular-peity-charts')
    .directive( 'inlineDonutChart', inlineDonutChart);

    inlineDonutChart.$inject = ['BuildChart'];

    function inlineDonutChart(BuildChart) {
      return new BuildChart("donut");
    }

})();
