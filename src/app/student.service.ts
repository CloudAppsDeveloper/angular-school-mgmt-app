import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentApiUrl=environment.ApiEndpoint+"/v1/student/";
  userApiUrl=environment.ApiEndpoint+"/v1/users/";
  constructor(private http:HttpClient) { }

  
  getStudentsList(){
    console.warn("studetslist");
    return this.http.get(this.studentApiUrl);
  }
  saveStudent(data: any){

  console.warn("save student",data);
  return this.http.post(this.studentApiUrl,data)
  }

  updateStudent(id:any, data: any){

    console.warn("update student",data);
    return this.http.put(this.studentApiUrl+id,data)
    }

  deleteStudent(id:any){
    console.warn("delete student:",id);
    return this.http.delete(this.studentApiUrl+id)
  }
  getStudent(id:any){
    console.warn("get student:",id);
    return this.http.get(this.studentApiUrl+id)
  }

  registerUser(data:any){
    return this.http.post(this.userApiUrl,data)
  }

  login(data:any){
    return this.http.post(this.userApiUrl+'login',data)
  }
}
