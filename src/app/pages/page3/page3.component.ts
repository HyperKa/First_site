import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService, Student } from 'src/app/core/services/data.service';


export class Contact_data {
  constructor(public num: string, public name: string, public mail: string, public phone: number, public reserve_phone: string) {

  }
}
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  users: Contact_data[] = [];
  students: Student[] = [];

  num = " ";
  name = 'Ivanov Dmitry Mihailovich';
  mail = 'mail@mail.ru';
  phone = 79271234567;
  reserve_phone = "79279876543";

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
    this.users.push(new Contact_data(this.num, this.name, this.mail, this.phone, this.reserve_phone));
    this.num = " ";
    this.name = '';
    this.mail = '';
    this.phone = 7927;
    this.reserve_phone = " ";

  }

  onNameChange(): void {
    console.log('Что-то изменилось в поле ' + this.name)
  }
}
