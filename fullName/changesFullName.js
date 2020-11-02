var getName=function(people){
    return people.firstName
}
var getLastname=function(people) {
    return people.lastName
}
var fullname=function(people) {
    return getName(people) + " " + getLastname(people)
}
d3.select("body")
    .append("div")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(fullname);






















