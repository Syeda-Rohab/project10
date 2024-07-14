import inquirer from "inquirer";

class Student{
    name: string
    constructor(n:string){
        this.name=n
    }
}

class person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new person()

const programStart =async(persons:person)=>{
    do{
 console.log("Welcome!");
 const ans = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Whom would you like to interact with?",
    choices: ["staff","student","exit"]
 })
      }
    }

        
const ans = await inquirer.prompt({
    name:"select",
    type:"list",
    message:"Whom would you like to interact with?",
    choices: ["staff","student","exit"]
})
    
    
    if(ans.select == "staff"){
        console.log("You approach the staff room. Please feel free to ask any question.")
    }

else if(ans.select == "student"){
    const ans = await inquirer.prompt({
        name: "Student",
        type: "input",
        message: "Enter the student's name you wish to engage with:",
    })
    const student = persons.students.find(val => val.name == ans.Student);
}
if(!Student){
    const name = new Student(ans.student);
    persons.addStudent(name);
    console.log(`Hello i am ${name.name}. Nice to meet you!`);
    console.log("New student added");
    console.log("Current studentt list:");
    console.log(persons.students);
} else {
    console.log(`Hello i am ${Student.name}. Nice to see you again!`);
    console.log("Existing student list");
    console.log(persons.students);
}
 if (ans.select == "exit"){
    console.log("Exiting the program...");
    process.exit()
 
}while(true)
 
programStart(persons);
    