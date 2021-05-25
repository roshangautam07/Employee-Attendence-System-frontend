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



}