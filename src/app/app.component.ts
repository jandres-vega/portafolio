import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {HeaderComponent} from "./components/header/header.component";
import {ListProjectComponent} from "./container/list-project/list-project.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {FormContactComponent} from "./components/form-contact/form-contact.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    HeaderComponent,
    ListProjectComponent,
    WelcomeComponent,
    FormContactComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
