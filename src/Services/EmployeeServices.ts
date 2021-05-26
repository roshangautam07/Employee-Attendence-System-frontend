import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const baseUrl="https://localhost:5001";
@Injectable()
export class EmployeeService{

    constructor(public http:HttpClient){}

    getAllEmployee(){
        return this.http.get(`${baseUrl}/Employee/GetAllEmployee`);
    }

    getAll(){
        return this.http.get(`${baseUrl}/Employee/ReadAll`)
    }

    getOne(id:any){
        return this.http.get(`${baseUrl}/Employee/Get/${id}`)
    }

    toggleStatus(id:any,status:any){
        return this.http.put(`${baseUrl}/Employee/toggleStatus/${id}`,status);

    }

    saveEmployee(emp:any){
        return this.http.post(`${baseUrl}/Employee/save`,emp);
    }

    updateEmployee(id:any,emp:any){
        return this.http.put(`${baseUrl}/Employee/updateEmployee/${id}`,emp);
    }

    saveAttendance(att:any){
        return this.http.post(`${baseUrl}/Employee/saveAttendance`,att);
    }
    


}