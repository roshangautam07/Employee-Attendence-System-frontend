import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeeAttendance } from "./EmployeeAttendanceModel";

export class Employee{
    id:number=0;
    firstName:string="";
    middleName:string="";
    lastName:string="";
    gender:string="";
    dob:string="";
    address:string="";
    contact:string="";
    isActive:boolean=true;
    attendences:Array<EmployeeAttendance> = new Array<EmployeeAttendance>();

    formEmployeeGroup:FormGroup;
    constructor(){
        var formBuilder = new FormBuilder();
        this.formEmployeeGroup = formBuilder.group({});

        this.formEmployeeGroup.addControl("EmployeeFirstNameControl",
        new FormControl('',Validators.required));

        this.formEmployeeGroup.addControl("EmployeeLastNameControl",
        new FormControl('',Validators.required));

        this.formEmployeeGroup.addControl("EmployeeGenderControl",
        new FormControl('',Validators.required));

        this.formEmployeeGroup.addControl("EmployeeDOBControl",
        new FormControl('',Validators.required));
    }

}