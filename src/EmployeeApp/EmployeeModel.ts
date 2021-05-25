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

}