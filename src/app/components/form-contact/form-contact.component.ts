import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {

  formContact = new FormGroup({
    "name" : new FormControl('', Validators.required),
    "email" : new FormControl('', [Validators.required, Validators.email]),
    "assunt" : new FormControl('', Validators.required),
    "message" : new FormControl('', Validators.required),
  })

  sendFormContact(){
    console.log(this.formContact.value);
  }
}
