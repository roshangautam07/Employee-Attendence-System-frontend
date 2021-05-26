import { HttpClient} from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "./EmployeeModel";

@Component({
    templateUrl:"./EmployeeAttendanceComponent.html"
})

export class AttendanceComponent{
    constructor(
        public http:HttpClient,
        public router:Router
    ){}
    selected:any=[];
    empObjs:Array<any> =[];
    ngOnInit():void{
        this.getAllAttendance();

    }

    getAllAttendance(){
        this.http.get(`https://localhost:5001/Employee/ReadAll`)
        .subscribe((res:any)=>{
            this.empObjs=res;
        },
        res=>{
            alert("fail");
        })
    }
    // attends:Array<any>=[];

    // loadAttendanceByEmployee(emps:any){
    //     this.attends = this.empObjs.find((emp:any)=>emp.firstName==emps.target.value)?.attendences;

    // }

    select(){
        this.selected;
    }
}