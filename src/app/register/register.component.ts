import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean=false;
  user = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailId: new FormControl(''),
    username: new FormControl(''),
    userpassword: new FormControl('')

   })
  constructor(private studentService :StudentService ) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.warn("register user",this.user.value)
    this.studentService.registerUser(this.user.value).subscribe((response)=>{
      console.warn("response:"+response);
      this.alert=true;
     // this.student.reset({})
      
    });

  }
  closeAlert(){
    this.alert=false;
  }

}
