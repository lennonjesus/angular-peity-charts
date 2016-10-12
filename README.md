[Peity](http://benpickles.github.io/peity/) is a [jQuery](https://jquery.com/) plugin that converts an element's content into simple `<svg>` charts.

This project provides [AngularJS](https://angularjs.org/) directives that makes them easy to use in any project by binding data and options to a controller.

## Installation
This project, along with all of its dependencies are installed with [Bower](http://bower.io/): `bower install angular-peity-charts`.

## Set up
If you're familiar with how to include third-party modules in AngularJS, then you can probably skip this section. If you're new to the framework, this should help.

### Step 1
Include the file before the main app file:

```html
<script src="/bower_components/jquery/jquery.min.js"></script>
<script src="/bower_components/peity/jquery.peity.min.js"></script>
<script src="/bower_components/angular-peity-charts/angular-peity-charts.js"></script>
<script src="/js/app.js"></script>
```

### Step 3
Add `angular-peity-charts` to your app dependencies.
```javascript
var app = angular.module('myApp', [
    'angular-peity-charts'
]);
```

## Use it
This module creates four custom directives (tags) that can be used anywhere in your templates. Each directive uses two attributes that are bound to properties of a controller.

* **data** - This attribute is required and is used to supply the data points that the chart will display in an array.

* **options** - This attribute is not required. If used it should be an object with property names that match the available options for the type of chart being used. Information about specific options for each chart type is available at: [http://benpickles.github.io/peity/](http://benpickles.github.io/peity/).

#### Controller Example
```javascript
var cMod = angular.module('myApp.controllers', []);

cMod.controller( 'ChartCtrl', function ($scope) {

    /*
        This example is over simplified to demonstrate the relationship
        between the 'controller' and the 'template' with regard to loading
        the 'icon' value. Hopefully, you will be loading your controller with
        data from an actual API response. :)
    */
    $scope.PieChart = {
        data: [1, 2, 3, 4],
        options: {
            diameter: 150
        }
    };

    $scope.BarChart = {
        data: [1, 2, 3, 4],
        options: {
            width: 150,
            height: 150
        }
    };

    $scope.LineChart = {
        data: [1, 2, 3, 4, 3, 1],
        options: {
            width: 150,
            stroke: "#eee"
        }
    };

    $scope.DonutChart = {
        data: [1, 4]
    };
} );
```

#### Template Example
```html
<pie-chart data="PieChart.data" options="PieChart.options"></pie-chart>

<bar-chart data="BarChart.data" options="BarChart.options"></bar-chart>

<line-chart data="LineChart.data" options="LineChart.options"></line-chart>

<line-chart data="DonutChart.data" options="DonutChart.options"></line-chart>
```

## Acknowledgments
See the [LICENSES.md](LICENSES.md) file for copies of the referenced licenses.

Inspired from Benjamin ["maggiben"](https://github.com/maggiben) [ng-peity](https://github.com/maggiben/ng-peity)
