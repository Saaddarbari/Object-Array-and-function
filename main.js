// Assignment 1: Building Your Friend List
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 1: Building Your Friend List");
console.log("*-------**-------**-------**-------**-------*");
var people = {
    friends: []
};
var friend1 = {
    firstName: "Saad",
    lastName: "Darbari",
    id: 1100,
};
var friend2 = {
    firstName: "Ameen",
    lastName: "Alam",
    id: 2209,
};
var friend3 = {
    firstName: "Hamza",
    lastName: "Alvi",
    id: 1229,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
console.log('\n');
// Assignment 2:Manipulating an Array: Rearranging Words
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 2:Manipulating an Array: Rearranging Words");
console.log("*-------**-------**-------**-------**-------*");
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am", "a");
var join = scrambledArray.join(" ");
console.log(join);
console.log('\n');
// Assignment 3: Company Product Catalog
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 3: Company Product Catalog");
console.log("*-------**-------**-------**-------**-------*");
var inventory = [];
var product1 = {
    name: "Iphone",
    model: "15",
    cost: 450000,
    quantity: 15
};
var product2 = {
    name: "realme",
    model: "c61",
    cost: 64000,
    quantity: 20
};
var product3 = {
    name: "Readme",
    model: "13pro",
    cost: 78000,
    quantity: 10
};
inventory.push(product1, product2, product3);
console.log("cost of Third Product ".concat(inventory[2].cost));
// Adding more element
var product4 = {
    name: "Infinix",
    model: "note 30",
    cost: 42000,
    quantity: 10
};
inventory.push(product4);
console.log("current inventory:", inventory);
console.log("Details of the fourth product:", inventory[3]);
inventory[0].quantity += 17;
console.log("Update first product quantity", inventory[0].quantity);
var removedProduct = inventory.splice(1, 1)[0];
console.log("Removed product:", removedProduct);
console.log("Updated inventory:", inventory);
console.log('\n');
// Assignment 4: Student List Organizer
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 4: Student List Organizer");
console.log("*-------**-------**-------**-------**-------*");
;
var students = [
    { name: "Saad", seniorStatus: true, IscompletedAssignment: true },
    { name: "Ali", seniorStatus: true, IscompletedAssignment: false },
    { name: "Hamza", seniorStatus: false, IscompletedAssignment: true },
    { name: "Ahmed", seniorStatus: true, IscompletedAssignment: true },
    { name: "Zain", seniorStatus: true, IscompletedAssignment: false },
    { name: "Haris", seniorStatus: false, IscompletedAssignment: true }
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (students) { return students.seniorStatus && students.IscompletedAssignment; });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior Students with Assignments :", seniorStudentsWithAssignments);
function removeIncompleteAssingmentStudents(students) {
    return students.filter(function (student) { return student.IscompletedAssignment; });
}
;
var removestuIncompleteStudents = removeIncompleteAssingmentStudents(students);
console.log("Updated list Those Student completed their Assignment ", removestuIncompleteStudents);
