import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  title = 'ReactiveForm';
  userName: string = "";
  email: string = "";
  password: string = "";
  age: number | null = null;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(null),
  });

  onClickSubmit(data: { userName: string, email: string, password: string, age: number }) {
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.age = data.age;
  }
}
