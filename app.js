 function Employee (ID ,fullName,department,level,imageURL){
    this.ID=ID;
    this.fullName=fullName;
    this,department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=SalaryCalculating(level);

function SalaryCalculating (level){
switch(level){
    case "Junior":
       this.salary=Math.floor(Math.random()*(1000-500))+500;
       break;
    case "Mid-Senior":
        this.salary=Math.floor(Math.random()*(1500-1000))+1000;
        break;
    case "Senior":
        this.salary=Math.floor( Math.random()*(2000-1500))+1500;
        break;
}

return this.salary;

}


}


function render(employee){

    console.log( "Employee Name :"+employee.fullName+"           Salary :" +employee.salary+"$")
    
}



const employee1= new Employee(1000,"Ghazi Samer ","Administration","Senior","#") ;
const employee2= new Employee(1001,"Lana Ali    ","Finance","Senior","#") ;
const employee3= new Employee(1002,"Tamara Ayoub","Marketing","Senior","#") ;
const employee4= new Employee(1003,"Safi Walid  ","Administration","Mid-Senior","#") ;
const employee5= new Employee(1004,"Omar Zaid   ","Development","Senior","#") ;
const employee6= new Employee(1005,"Rana Saleh  ","Development","Junior","#") ;
const employee7= new Employee(1006,"Hadi Ahmad  ","Finance","Mid-Senior","#") ;


const employees=[ employee1,employee2,employee3,employee4,employee5,employee6,employee7];
 


for(let i=0;i< employees.length ;i++){
    render(employees[i]);
    }