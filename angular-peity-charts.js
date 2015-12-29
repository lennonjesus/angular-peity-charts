var ngPeity = angular.module( 'angular-peity-charts', [] )
.factory('buildChartDirective', ['$window', '$timeout', function($window, $timeout) {

    return function(chartType) {
        return {
            restrict: 'E',
            scope: {
                data: "=",
                options: "="
            },
            link: function ( scope, element, attrs ) {

                var $span, options, chart;

                // Create container
                options = scope.options || {};
                $span = element.append('<span></span>');
                if (scope.data) {
                    $span.text(scope.data.join());
                }
                chart = $span.peity( chartType, options );

                // Debounce f() ripped from _.
                function debounce(func, wait, immediate) {
                     var timeout;
                     return function() {
                        var context = this, args = arguments;
                        $timeout.cancel(timeout);
                        timeout = $timeout(function() {
                            timeout = null;
                            if (!immediate) {
                                func.apply(context, args);
                            }
                        }, wait);
                        if (immediate && !timeout) {
                            func.apply(context, args);
                        }
                    };
                }

                // Redraw
                var delayedResize = debounce(function() {
                    var peity = chart.data()._peity;
                    peity.draw();
                }, 300);
                angular.element($window).bind('resize', delayedResize);

                // Update chart values
                scope.$watchCollection('data', function (newVal, oldVal) {
                    if (newVal) {
                        chart.text(newVal.join(",")).change();
                    }
                });

                // Update options
                scope.$watch('options', function (newVal, oldVal) {
                    var peity = chart.data()._peity;
                    peity.opts = $.extend(peity.opts, newVal);
                    peity.draw();
                });
            }
        };
    };
}])
.directive( 'inlinePieChart', ['buildChartDirective', function (buildChartDirective) {
    return buildChartDirective("pie");
}])
.directive( 'inlineBarChart', ['buildChartDirective', function (buildChartDirective) {
    return buildChartDirective("bar");
}])
.directive( 'inlineLineChart', ['buildChartDirective', function (buildChartDirective) {
    return buildChartDirective("line");
}]);
