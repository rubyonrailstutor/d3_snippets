// Generated by CoffeeScript 1.6.3
(function() {
  var Circle, circle;

  Circle = (function() {
    function Circle() {
      this.all = d3.selectAll("circle");
      this.target = d3.select("svg");
      this.data = [25, 35, 45];
      this.circles = d3.selectAll("circle");
      this.x = 10;
      this.selectAll();
      this.changeX();
      this.create();
      this.removeOne();
    }

    Circle.prototype.selectAll = function() {
      console.log("selectAll()");
      return $("#selectCircles").click(function() {
        var circles;
        circles = d3.selectAll("circle");
        return console.log(circles);
      });
    };

    Circle.prototype.changeX = function() {
      var _this = this;
      console.log("x");
      return $("#changeX").click(function() {
        console.log(_this.data);
        return _this.circles.data(_this.data).attr("r", function(d) {
          return Math.sqrt(d) * 8;
        }).attr("cx", function(d) {
          return _this.x += 100;
        });
      });
    };

    Circle.prototype.create = function() {
      var _this = this;
      return $("#create").click(function() {
        return _this.target.selectAll("circle").data(_this.data).enter().append("circle").transition().delay(1000).attr("r", function(d) {
          return d;
        }).attr("cx", function(d) {
          return _this.x += 100;
        }).attr("cy", function(d) {
          return 80;
        });
      });
    };

    Circle.prototype.removeOne = function() {
      var _this = this;
      return $("#removeOne").click(function() {
        _this.data.pop();
        console.log(_this.data);
        return _this.target.selectAll("circle").data(_this.data).exit().remove();
      });
    };

    Circle.prototype.make = function(qty) {
      var data;
      data = [];
      _(qty).times()(function() {
        return data.push(1);
      });
      return d3.selectAll("circle");
    };

    return Circle;

  })();

  circle = new Circle;

}).call(this);