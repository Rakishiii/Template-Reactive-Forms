import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
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
formdata: FormGroup = new FormGroup({
  userName: new FormControl()
});

onClickSubmit(data:{userName: string}){
  this.userName = data.userName;
}
}
