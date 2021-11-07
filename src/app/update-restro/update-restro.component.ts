import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {
  alert:boolean=false;
  student = new FormGroup({
    acadamicYear: new FormControl(''),
    admissionNo: new FormControl(''),
    studentFirstName: new FormControl(''),
    studentLastName: new FormControl(' '),
    gender: new FormControl('')

  })

  constructor(private studentService: StudentService, private route:ActivatedRoute ) { }

  ngOnInit(): void {

    console.warn(this.route.snapshot.params.id);
    this.studentService.getStudent(this.route.snapshot.params.id)
    .subscribe((response:any)=>{
        this.student = new FormGroup({
        acadamicYear: new FormControl(response['acadamicYear']),
        admissionNo: new FormControl(response['admissionNo']),
        studentFirstName: new FormControl(response['studentFirstName']),
        studentLastName: new FormControl(response['studentLastName']),
        gender: new FormControl(response['gender'])
    })
      
  })
  }
  updateStudent() {

    this.studentService.updateStudent(this.route.snapshot.params.id,this.student.value).subscribe((response:any) => {
      console.warn("response:" + response);
      this.alert = true;
      this.student.reset({})

    });

  }

  getStudent() {
    this.studentService.saveStudent(this.student.value).subscribe((response) => {
      console.warn("response:" + response);
      this.alert = true;
      this.student.reset({})

    });

  }
  closeAlert(){
    this.alert=false;
  }
}
