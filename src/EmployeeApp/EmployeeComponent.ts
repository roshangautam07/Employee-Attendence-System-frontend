import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeAttendance } from './EmployeeAttendanceModel';
import { Employee } from './EmployeeModel';

@Component({
  templateUrl: './EmployeeComponent.html',
})
export class  EmployeeComponent{

  constructor(
            public router: Router, 
            public http: HttpClient) { }

 emp:Employee = new Employee();
 atten:EmployeeAttendance = new EmployeeAttendance();
 empObj:Array<Employee> = new Array<Employee>();
 errors:any=[];
 errorss:any=[];
 currentButton:string='Save';
 isAttendanceAdd:boolean=false;
 id:number=0;
 name:any="";

 ngOnInit(): void {
    this.getAll();
  }

 getAll(){
     this.http.get(`https://localhost:5001/Employee/ReadAll`)
        .subscribe((res:any)=>{
            this.empObj=res;
        },
        res=>{
            alert("fail");
        })
 }
submit(){
    if(this.emp.id==0){
    this.http.post(`https://localhost:5001/Employee/save`,this.emp)
            .subscribe(res=>this.Succes(res),
            res=>this.Error(res));
    }else{
        this.http.put(`https://localhost:5001/Employee/updateEmployee/${this.emp.id}`,this.emp)
            .subscribe(res=>this.Succes(res),
            res=>this.Error(res));
    }
}

getOne(id: any){
    this.http.get(`https://localhost:5001/Employee/Get/${id}`)
            .subscribe((res:any)=>{
                this.emp.id=res.id;
                this.emp.firstName=res.firstName;
                this.emp.middleName=res.middleName;
                this.emp.lastName=res.lastName;
                this.emp.gender=res.gender;
                this.emp.contact=res.contact;
                this.emp.address=res.address;
                this.emp.dob=res.dob;
                this.emp.isActive=res.isActive;
                this.currentButton='Update';
            },
            res=>{

            })
}

statusToggle(id:any,status:any){
    var stat:any={};
    stat.isActive=status;
    this.http.put(`https://localhost:5001/Employee/toggleStatus/${id}`,stat)
            .subscribe((res:any)=>{
                this.getAll();
            },
            (res)=>{
                alert("Fail to update status");

            })
}

addAttendance(id: any){
    this.http.get(`https://localhost:5001/Employee/Get/${id}`)
            .subscribe((res:any)=>{
          this.isAttendanceAdd=true;
          this.id=res.id;
          this.atten.employeeId=res.id;
          this.name = this.empObj.find((cid:any)=>cid.id==this.id)?.firstName;

            },
            res=>{

            });
}

employeeAttendance(){
    this.http.post(`https://localhost:5001/Employee/saveAttendance`,this.atten)
            .subscribe((res:any)=>{
                this.atten.employeeId=0;
                this.isAttendanceAdd=false;
                this.getAll();
                this.atten = new EmployeeAttendance();
                alert(`Attendance of ${this.name} is Successfully Added`);
            },
            (res:any)=>{
                this.errorss=res.error;
            })
}

reset(){
    this.emp=new Employee();
    this.errors=[];
    this.currentButton='Save';
}

Succes(res:any){
    this.emp = new Employee();
    this.errors=[];
    this.currentButton='Save';
    this.getAll();
}
Error(res:any){
    this.errors=res.error;
}


}