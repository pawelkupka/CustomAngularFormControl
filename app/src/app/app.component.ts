import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = "";

  formGroup = new FormGroup({
    text: new FormControl(this.value, [Validators.required])
  });

  valueChange(value: string): void {
    this.value = value;
  }
}
