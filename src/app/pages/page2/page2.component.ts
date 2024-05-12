import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService, Student } from 'src/app/core/services/data.service';

enum Priority {
  first, second, third
}


export class Delivery {
  constructor(public num: string, public adress: string, public time: string, public conditions: string, public priority: Priority) {

  }
}
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  users: Delivery[] = [];
  students: Student[] = [];

  num = '';
  adress = '';
  time = " ";
  conditions = '';
  priority = 0;

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
      this.dataService.getStudents()
      .pipe(
        filter(data => data != null),
        map((data => (data.map(student => ({...student, group: student.group + ' 1 курс'})))))
      )
      .subscribe((students) => {
          this.students = students;
      })

  }


  addUser() {
    this.users.push(new Delivery(this.num, this.adress, this.time, this.conditions, this.priority));
    this.num = 'no data';
    this.adress = 'no data';
    this.time = " ";
    this.conditions = 'no data';
    this.priority = 0;
  }

  onNameChange(): void {
    console.log('Что-то изменилось в поле ' + this.priority)
  }
}

