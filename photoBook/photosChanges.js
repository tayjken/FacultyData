var getPhoto=function(people) {
    return people.photo;
}
d3.select("body")
    .selectAll("img")
    .data(employees)
    .enter()
    .append("img")
    .attr("src",getPhoto);







