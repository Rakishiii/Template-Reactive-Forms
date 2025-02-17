import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TemplateForm';
  anytext: string ="";
  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }
}
