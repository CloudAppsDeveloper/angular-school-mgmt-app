import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginUser = new FormGroup({
    username: new FormControl(''),
    userpassword: new FormControl('')

   })
   constructor(private studentService :StudentService ) { }

  ngOnInit(): void {
  }

  login(){
    console.warn("login",this.loginUser.value)
    this.studentService.login(this.loginUser.value).subscribe((response)=>{
      console.warn("response:"+response);
      
    });

  }
 
}
