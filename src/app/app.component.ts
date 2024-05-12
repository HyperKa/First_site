import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'digital-department-application';

  greeting = "";

  ngOnInit(): void {
    console.log('Я родился!');
  }
  
  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}
