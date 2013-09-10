// Generated by CoffeeScript 1.6.3
(function(){var e,t;e=function(){function e(e,t,n){this.confirmation=function(){return console.log("scatter is working")};this.data=[];this.width=e||"100";this.height=t||"200";this.target=d3.select(n);this.callActions();this.padding=50}e.prototype.callActions=function(){this.generateTitle();this.generateData();this.drawScatterSvg();this.renderScatter();this.renderLabels();return this.renderAxis()};e.prototype.generateTitle=function(){var e=this;return $("#scatterButton").click(function(){return e.target.append("h5").text($("#scatterName").val())})};e.prototype.generateData=function(){var e=this;return $("#generateData").click(function(){console.log("data");console.log(e.data);if(e.data.length===0){_(10).times(function(){return e.data.push([Math.round(Math.random()*325+5),Math.round(Math.random()*150+20)])});return $("#data").text(e.data)}})};e.prototype.drawScatterSvg=function(){var e=this;return $("#drawSVG").click(function(){console.log(e.target);return e.target.append("svg").attr("width",e.width+"px").attr("height",e.height+"px").classed("scatter",!0)})};e.prototype.renderScatter=function(){var e=this;return $("#render").click(function(){return e.target.selectAll("svg").selectAll("circle").data(e.data).enter().append("circle").attr("cx",function(t){return e.xScale()(t[0])}).attr("cy",function(t){return e.yScale()(t[1])}).attr("r",function(t){return Math.sqrt(e.width-t[1])})})};e.prototype.renderAxis=function(){var e=this;console.log("renderAxis called");return $("#axis").click(function(){e.target.selectAll("svg").append("g").attr("class","axis").attr("transform","translate(0,"+(e.height-e.padding)+")").call(d3.svg.axis().scale(e.xScale()).orient("bottom").ticks(3));return e.target.selectAll("svg").append("g").attr("class","axis").attr("transform","translate("+e.padding+",0)").call(d3.svg.axis().scale(e.yScale()).orient("left").ticks(3))})};e.prototype.xScale=function(){return d3.scale.linear().domain([1,d3.max(this.data,function(e){return e[0]})]).range([this.padding,this.width-this.padding])};e.prototype.yScale=function(){return d3.scale.linear().domain([1,d3.max(this.data,function(e){return e[1]})]).range([this.height-this.padding,this.padding])};e.prototype.renderLabels=function(){var e=this;return $("#labels").click(function(){return e.target.selectAll("svg").selectAll("text").data(e.data).enter().append("text").text(function(e){return e[0]+","+e[1]}).attr("x",function(t){return e.xScale()(t[0])}).attr("y",function(t){return e.yScale()(t[1])}).attr("fill","red")})};return e}();t=new e("500","200","#scatter")}).call(this);