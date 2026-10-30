
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  name: string = 'Pooja';
  age: number = 23;
  course: string = 'Angular';

  message: string = '';

  submitForm() {
    this.message = 'Registration Successful!';
  }

}
