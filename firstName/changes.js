var getName=function(people){
    return people.firstName;
}
d3.select("body")
.append("div")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getName);

























