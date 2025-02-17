import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-validator',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-validator.component.html',
  styleUrls: ['./reactive-validator.component.css']
})
export class ReactiveValidatorComponent {
  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl(null, [Validators.required, Validators.min(1)])
  });

  onClickSubmit() {
    console.log(this.formdata.value);
  }
}