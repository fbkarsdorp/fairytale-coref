function drawGraph(filename) {
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 1000 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([-1, 1])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .interpolate('basis')
        .x(function(d) { return x(d.position); })
        .y(function(d) { return y(d.sentiment); });

    var svg = d3.select("#sentiment").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv(filename, function(error, data) {
      data.forEach(function(d) {
        d.position = +d.position;
        d.sentiment = +d.sentiment;
      });

      x.domain(d3.extent(data, function(d) { return d.position; }));


      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end");

      svg.append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", line);

    });
}