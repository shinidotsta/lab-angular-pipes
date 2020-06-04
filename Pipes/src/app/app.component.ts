import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'DOMEvents';

  date1 = new Date();
  number1: number = 100;
  string1 : string = 'Angular 8.0 is a Component Based Framework'



}
