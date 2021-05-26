import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class EmployeeAttendance{
    id:number=0;
    attendanceDate:string="";
    attendanceTime:string="";
    status:string="";
    employeeId:number=0;

    formAttendanceGroup:FormGroup;
    constructor(){
        var formBuilder = new FormBuilder();
        this.formAttendanceGroup = formBuilder.group({});

        this.formAttendanceGroup.addControl("AttendanceDateControl",
        new FormControl('',Validators.required));

        this.formAttendanceGroup.addControl("AttendanceTimeControl",
        new FormControl('',Validators.required));

        this.formAttendanceGroup.addControl("AttendanceStatusControl",
        new FormControl('',Validators.required));

        
    }
}