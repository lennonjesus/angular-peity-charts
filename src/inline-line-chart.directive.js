(function () {
  'use strict';

  angular.module('angular-peity-charts')
    .directive( 'inlineLineChart', inlineLineChart);

    inlineLineChart.$inject = ['BuildChart'];

    function inlineLineChart(BuildChart) {
      return new BuildChart("line");
    }

})();
