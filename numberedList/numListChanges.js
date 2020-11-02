var getLastname=function(people) {
    return people.lastName;
}
d3.select("body")
    .append("ol")
    .selectAll("li")
    .data(employees)
    .enter()
    .append("li")
    .text(getLastname)















