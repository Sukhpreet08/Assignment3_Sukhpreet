import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment3';
  fakeStudentsList: any[];
constructor(private api: HttpClient, private router: Router) {
}
  ngOnInit(): void {
  this.getStudents();
  }
  getStudents(): void {
this.api.get<any[]>('assets/fakeStudents.json').subscribe(x => {
this.fakeStudentsList = x;
this.router.navigate(['/', this.fakeStudentsList[0].recordNo]);
}, error => {

});
  }
}
