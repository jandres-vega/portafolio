import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NavHeaderComponent} from "../nav-header/nav-header.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavHeaderComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
