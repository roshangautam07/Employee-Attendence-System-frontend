import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/Services/EmployeeServices';
import { EmployeeAttendance } from './EmployeeAttendanceModel';
import { Employee } from './EmployeeModel';

@Component({
  templateUrl: './EmployeeComponent.html',
})
export class  EmployeeComponent{

  constructor(
            public router: Router, 
            public http: HttpClient,
            public empService:EmployeeService) { }

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
     //this.http.get(`https://localhost:5001/Employee/GetAllEmployee`)
     this.empService.getAll()
        .subscribe((res:any)=>{
            this.empObj=res;
        },
        res=>{
            alert("fail");
        })
 }
submit(){
    var empDTO:any={};
    empDTO.firstName=this.emp.firstName;
    empDTO.middleName=this.emp.middleName;
    empDTO.lastName=this.emp.lastName;
    empDTO.gender=this.emp.gender;
    empDTO.contact=this.emp.contact;
    empDTO.address=this.emp.address;
    empDTO.dob=this.emp.dob;
    empDTO.isActive=this.emp.isActive;
    if(this.emp.id==0){
    //this.http.post(`https://localhost:5001/Employee/save`,empDTO)
    this.empService.saveEmployee(empDTO)
            .subscribe(res=>this.Succes(res),
            res=>this.Error(res));
    }else{
        //this.http.put(`https://localhost:5001/Employee/updateEmployee/${this.emp.id}`,empDTO)
        this.empService.updateEmployee(this.emp.id,empDTO)
            .subscribe(res=>this.Succes(res),
            res=>this.Error(res));
    }
}

getOne(id: any){
  //  this.http.get(`https://localhost:5001/Employee/Get/${id}`)
  this.empService.getOne(id)
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
   // this.http.put(`https://localhost:5001/Employee/toggleStatus/${id}`,stat)
   this.empService.toggleStatus(id,stat)
            .subscribe((res:any)=>{
                this.getAll();
            },
            (res)=>{
                alert("Fail to update status");

            })
}

addAttendance(id: any){
   // this.http.get(`https://localhost:5001/Employee/Get/${id}`)
   this.empService.getOne(id)
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
       var attendDto:any={};
       attendDto.attendanceDate=this.atten.attendanceDate;
       attendDto.attendanceTime=this.atten.attendanceTime;
       attendDto.status=this.atten.status;
       attendDto.employeeId=this.atten.employeeId;
  //  this.http.post(`https://localhost:5001/Employee/saveAttendance`,attendDto)
  this.empService.saveAttendance(attendDto)
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