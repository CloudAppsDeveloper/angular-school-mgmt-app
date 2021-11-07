import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {

  constructor(private student:StudentService) { 
    
  }

  collection: any[] = [];
 //collection :any = {};
  ngOnInit(): void {
    this.student.getStudentsList().subscribe((result)=>{
      console.warn(result);
      this.collection=result as any[];
    });
  }

  deleteStudent(item: any){
    this.collection = this.collection.filter(e => e.id !== item)
    this.student.deleteStudent(item).subscribe((response)=>{
      console.warn("response:",response);
    });
  }

}
