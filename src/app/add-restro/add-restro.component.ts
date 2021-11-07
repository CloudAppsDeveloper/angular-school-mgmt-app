import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {

  alert:boolean=false;
  student = new FormGroup({
    acadamicYear: new FormControl(''),
    admissionNo: new FormControl(''),
    studentFirstName: new FormControl(''),
    studentLastName: new FormControl(' '),
    gender: new FormControl('')

   })
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(){
    
    this.studentService.saveStudent(this.student.value).subscribe((response)=>{
      console.warn("response:"+response);
      this.alert=true;
      this.student.reset({})
      
    });

  }

  closeAlert(){
    this.alert=false;
  }

}
