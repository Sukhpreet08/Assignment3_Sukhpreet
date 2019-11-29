import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fake-student-detail',
  templateUrl: './fake-student-detail.component.html',
  styleUrls: ['./fake-student-detail.component.css']
})
export class FakeStudentDetailComponent implements OnInit {
recordNo;
  studentData;
  constructor(private router: ActivatedRoute, private api: HttpClient) { }

  ngOnInit() {
    this.router.paramMap.subscribe(x=>{
       this.recordNo=x.get("recordNo");
       this.api.get<any[]>('assets/fakeStudents.json').subscribe(student=>{
         this.studentData=student.filter(p=>p.recordNo==this.recordNo)[0];

       })
    })
  }

}
