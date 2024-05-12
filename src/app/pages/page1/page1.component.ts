import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService, Student } from 'src/app/core/services/data.service';

enum Type {
  passenger, truck, special
}

enum Mark {
  mersedez,
  toyota,
  kia
}

enum Color {
  red,
  pink,
  blue,
  green,
  yellow,
  dirty
}


enum Oil {
  diesel,
  petrol
}

export class Autotransport {
  constructor(public num: string, public type: Type, public color: Color, public mark: Mark, public num_age: string, public oil: Oil) {

  }
}
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  users: Autotransport[] = [];
  students: Student[] = [];

  num = " ";
  type = 0;
  color = 0;
  mark = 0;
  num_age = " ";
  oil = 0;

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
    this.users.push(new Autotransport(this.num, this.type, this.color, this.mark, this.num_age, this.oil));
    this.num = " ";
    this.type = 0;
    this.color = 0;
    this.mark = 0;
    this.num_age = " ";
    this.oil = 0;
  }

  onNameChange(): void {
    console.log('Что-то изменилось в поле ' + this.type)
  }
}
