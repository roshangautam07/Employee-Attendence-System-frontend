import { HttpClient} from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "src/Services/EmployeeServices";
import { Employee } from "./EmployeeModel";

@Component({
    templateUrl:"./EmployeeAttendanceComponent.html"
})

export class AttendanceComponent{
    constructor(
        public http:HttpClient,
        public router:Router,
        public service:EmployeeService
    ){}
    selected:any=[];
    empObjs:Array<any> =[];
    ngOnInit():void{
        this.getAllAttendance();

    }

    getAllAttendance(){
       // this.http.get(`https://localhost:5001/Employee/ReadAll`)
       this.service.getAllEmployee()
            .subscribe((res:any)=>{
            this.empObjs=res;
        },
        res=>{
            alert("fail");
        })
    }
    attends:Array<any>=[];

    loadAttendanceByEmployee(emps:any){
        this.attends = this.empObjs.find((emp:any)=>emp.firstName==emps.target.value)?.attendences;

    }
//lazy loading
    select(){
        this.selected;
        this.http.get(`https://localhost:5001/Employee/GetAttendanceByEmployee/${this.selected.id}`)
            .subscribe((res:any)=>{
                this.attends=res;
            },
            (res:any)=>{
                alert("fail");
            })
    }
}