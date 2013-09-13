// Generated by CoffeeScript 1.6.3
(function() {
  var app;

  app = angular.module("d3Charts", []);

  app.controller('chartCtrl', function($scope) {
    return $scope.widgets = "";
  });

  app.directive('csBar', function() {
    return {
      restrict: "A",
      scope: {
        widgets: "="
      },
      template: '<div id="barchart">{{info}}</div>',
      link: function(scope, element, attrs) {
        var chart, data, x, y;
        element.bind("click", function() {
          return console.log("click this");
        });
        data = scope.widgets.split(",");
        chart = d3.select("#barchart");
        chart.append("svg").attr("width", "100%").attr("height", "400px");
        y = 0;
        x = 0;
        return scope.$watch('widgets', function(n, o) {
          var newData, oldData;
          newData = n.split(",");
          oldData = o.split(",");
          if (n && oldData.length !== newData.length) {
            console.log("length !=");
            chart.selectAll("svg").selectAll("rect").data(newData).enter().append("rect").attr("height", "30px").attr("rx", "5").attr("ry", "5").classed("rect", true).attr("width", function(datum) {
              return datum;
            }).attr("y", function(datum) {
              return y += 35;
            });
          }
          if (oldData.length === newData.length) {
            console.log("length ==");
            return chart.selectAll("svg").selectAll("rect").data(newData).transition().attr("width", function(datum) {
              return datum;
            }).attr("fill", function(datum) {
              return "#3366" + (x += 1);
            });
          }
        });
      }
    };
  });

}).call(this);
