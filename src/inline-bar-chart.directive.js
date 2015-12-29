(function () {
  'use strict';

  angular.module('angular-peity-charts')
    .directive( 'inlineBarChart', inlineBarChart);

    inlineBarChart.$inject = ['BuildChart'];

    function inlineBarChart(BuildChart) {
      return new BuildChart("bar");
    }

})();
