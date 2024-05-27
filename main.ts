// Assignment 1: Building Your Friend List
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 1: Building Your Friend List");
console.log("*-------**-------**-------**-------**-------*");

let people = {
    friends:[] as friend[]
};

type friend = {
    firstName:string,
    lastName:string,
    id?:number
};

let friend1:friend = {
    firstName:"Saad",
    lastName:"Darbari",
    id:1100,
};

let friend2:friend = {
    firstName:"Ameen",
    lastName:"Alam",
    id:2209,
};

let friend3:friend = {
    firstName:"Hamza",
    lastName:"Alvi",
    id:1229,
};

people.friends.push(friend1,friend2,friend3);
console.log(people);
console.log('\n');

// Assignment 2:Manipulating an Array: Rearranging Words
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 2:Manipulating an Array: Rearranging Words");
console.log("*-------**-------**-------**-------**-------*");

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2,4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1,0,"am","a");
let join = scrambledArray.join(" ");

console.log(join);
console.log('\n');
// Assignment 3: Company Product Catalog
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 3: Company Product Catalog");
console.log("*-------**-------**-------**-------**-------*");

let inventory = [] as Product[];

type Product = {
    name:string,
    model:string,
    cost:number,
    quantity:number
};

let product1:Product = {
    name:"Iphone",
    model:"15",
    cost:450000,
    quantity:15
};
let product2:Product = {
    name:"realme",
    model:"c61",
    cost:64000,
    quantity:20
};
let product3:Product = {
    name:"Readme",
    model:"13pro",
    cost:78000,
    quantity:10
};

inventory.push(product1,product2,product3);
console.log(`cost of Third Product ${inventory[2].cost}`);
// Adding more element
let product4:Product = {
    name:"Infinix",
    model:"note 30",
    cost:42000,
    quantity:10
};
inventory.push(product4);
console.log("current inventory:", inventory);
console.log("Details of the fourth product:", inventory[3]);

inventory[0].quantity += 17;
console.log("Update first product quantity", inventory[0].quantity); 

let removedProduct = inventory.splice(1, 1)[0];
console.log("Removed product:", removedProduct);

console.log("Updated inventory:", inventory);
console.log('\n');

// Assignment 4: Student List Organizer
console.log("*-------**-------**-------**-------**-------*");
console.log("Assignment 4: Student List Organizer");
console.log("*-------**-------**-------**-------**-------*");

interface student{
    name:string,
    seniorStatus:boolean,
    IscompletedAssignment:boolean
};
let students:student[] = [
    {name:"Saad",seniorStatus:true,IscompletedAssignment:true},
    {name:"Ali",seniorStatus:true,IscompletedAssignment:false},
    {name:"Hamza",seniorStatus:false,IscompletedAssignment:true},
    {name:"Ahmed",seniorStatus:true,IscompletedAssignment:true},
    {name:"Zain",seniorStatus:true,IscompletedAssignment:false},
    {name:"Haris",seniorStatus:false,IscompletedAssignment:true}
];
function findSeniorStudentsWithAssignments(students: student[]){
    return students.filter(students => students.seniorStatus && students.IscompletedAssignment);
}
let seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior Students with Assignments :",seniorStudentsWithAssignments);

function removeIncompleteAssingmentStudents(students: student[]): student[] {
    return students.filter((student) =>  student.IscompletedAssignment);
};
let removestuIncompleteStudents = removeIncompleteAssingmentStudents(students);
console.log("Updated list Those Student completed their Assignment ",removestuIncompleteStudents);
