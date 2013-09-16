// Generated by CoffeeScript 1.6.3
(function() {
  var app;

  app = angular.module("d3Charts", []);

  app.controller('chartCtrl', function($scope) {
    var cleanWidgets;
    $scope.widgets = [];
    $scope.newVar = "";
    $scope.addVar = function() {
      $scope.widgets.push($scope.newVar);
      cleanWidgets();
      return console.log($scope.widgets);
    };
    $scope.removeVar = function() {
      $scope.widgets.pop();
      cleanWidgets();
      return console.log($scope.widgets);
    };
    return cleanWidgets = function() {
      return $scope.widgets = _.compact($scope.widgets);
    };
  });

  app.directive('csBar', function() {
    return {
      restrict: "A",
      scope: {
        widgets: "="
      },
      template: '<div id="barchart">{{info}}</div>',
      link: function(scope, element, attrs) {
        var chart, y;
        element.bind("click", function() {
          return console.log("click this");
        });
        chart = d3.select("#barchart");
        chart.append("svg").attr("width", "100%").attr("height", "400px");
        y = 0;
        return scope.$watch('widgets', function(n, o) {
          var rectObjects;
          rectObjects = d3.selectAll("rect")[0].length;
          y = rectObjects * 35;
          chart.selectAll("svg").selectAll("rect").data(n).enter().append("rect").attr("height", "30px").attr("rx", "5").attr("ry", "5").classed("rect", true).attr("width", function(datum) {
            return datum;
          }).attr("y", function(datum) {
            return y += 30;
          }).attr("x", function(datum) {
            return 0;
          });
          chart.selectAll("svg").selectAll("text").data(n).enter().append("text").text(function(d) {
            return Math.round(d);
          }).attr("y", function(datum) {
            return y + 15;
          }).attr("x", function(datum) {
            return Number(datum) + 5;
          });
          chart.selectAll("svg").selectAll("rect").data(n).exit().transition().remove();
          return chart.selectAll("svg").selectAll("text").data(n).exit().transition().remove();
        });
      }
    };
  });

}).call(this);
